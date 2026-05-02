import { calendar, eventFeed } from "@/lib/content";

export type ParishCalendarEvent = {
  id: string;
  title: string;
  summary: string;
  location: string;
  start: string;
  end?: string;
  dateLabel: string;
  category: string;
  image?: string;
  htmlLink?: string;
  source: "google-calendar" | "fallback";
};

function formatDateLabel(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function inferCategory(title: string) {
  const normalized = title.toLowerCase();
  if (normalized.includes("qurbana") || normalized.includes("holy communion") || normalized.includes("communion")) {
    return "Holy Qurbana";
  }
  if (normalized.includes("prayer")) return "Prayer Meeting";
  if (normalized.includes("choir")) return "Choir";
  if (normalized.includes("youth")) return "Youth Fellowship";
  if (normalized.includes("school")) return "Sunday School";
  if (normalized.includes("sevika")) return "Sevika Sangham";
  if (normalized.includes("mission")) return "Edavaka Mission";
  return "Parish Event";
}

function cleanSummary(description: string) {
  return description
    .replace(/\r/g, "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 3)
    .join(" ");
}

function parseGoogleApiEvents(items: Array<Record<string, unknown>>): ParishCalendarEvent[] {
  return items
    .map<ParishCalendarEvent | null>((item) => {
      const title = typeof item.summary === "string" ? item.summary : "";
      const description = typeof item.description === "string" ? item.description : "";
      const location = typeof item.location === "string" ? item.location : "";
      const id = typeof item.id === "string" ? item.id : title;
      const htmlLink = typeof item.htmlLink === "string" ? item.htmlLink : undefined;

      const startInfo = (item.start ?? {}) as { dateTime?: string; date?: string };
      const endInfo = (item.end ?? {}) as { dateTime?: string; date?: string };
      const startValue = startInfo.dateTime || startInfo.date;
      const endValue = endInfo.dateTime || endInfo.date;

      if (!title || !startValue) return null;

      const startDate = new Date(startValue);
      const endDate = endValue ? new Date(endValue) : undefined;

      return {
        id,
        title,
        summary: cleanSummary(description) || "See parish calendar for full event details.",
        location: location || "Parish calendar",
        start: startDate.toISOString(),
        end: endDate?.toISOString(),
        dateLabel: formatDateLabel(startDate),
        category: inferCategory(title),
        htmlLink,
        source: "google-calendar" as const,
      };
    })
    .filter((item): item is ParishCalendarEvent => Boolean(item))
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
}

function fallbackEvents(): ParishCalendarEvent[] {
  const now = new Date();
  const currentYear = now.getFullYear();

  return eventFeed.map((event, index) => {
    const syntheticDate = new Date(currentYear, now.getMonth(), Math.min(28, index * 3 + 3), 12, 0, 0);

    return {
      id: `fallback-${index}-${event.title}`,
      title: event.title,
      summary: event.summary,
      location: event.location,
      start: syntheticDate.toISOString(),
      dateLabel: event.dateLabel,
      category: inferCategory(event.title),
      image: event.image,
      source: "fallback" as const,
    };
  });
}

export async function getParishCalendarEvents() {
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;
  if (!apiKey) {
    return fallbackEvents();
  }

  const rangeStart = new Date();
  rangeStart.setDate(1);
  rangeStart.setHours(0, 0, 0, 0);

  const rangeEnd = new Date(rangeStart);
  rangeEnd.setMonth(rangeEnd.getMonth() + 18, 0);
  rangeEnd.setHours(23, 59, 59, 999);

  const params = new URLSearchParams({
    key: apiKey,
    singleEvents: "true",
    orderBy: "startTime",
    maxResults: "250",
    timeMin: rangeStart.toISOString(),
    timeMax: rangeEnd.toISOString(),
  });

  const endpoint = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
    calendar.publicCalendarId
  )}/events?${params.toString()}`;

  try {
    const response = await fetch(endpoint, {
      next: { revalidate: 1800 },
    });

    if (!response.ok) {
      throw new Error(`Calendar feed returned ${response.status}`);
    }

    const data = (await response.json()) as { items?: Array<Record<string, unknown>> };
    if (!data.items?.length) {
      throw new Error("Calendar API returned no items");
    }

    const parsed = parseGoogleApiEvents(data.items);
    if (parsed.length === 0) {
      throw new Error("Calendar feed contained no parseable events");
    }

    return parsed;
  } catch {
    return fallbackEvents();
  }
}

export function groupEventsByMonth(events: ParishCalendarEvent[]) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    month: "long",
    year: "numeric",
  });

  const grouped = new Map<string, ParishCalendarEvent[]>();

  for (const event of events) {
    const key = formatter.format(new Date(event.start));
    const existing = grouped.get(key) ?? [];
    existing.push(event);
    grouped.set(key, existing);
  }

  return Array.from(grouped.entries()).map(([label, items]) => ({
    label,
    items,
  }));
}
