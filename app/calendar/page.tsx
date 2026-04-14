import CalendarListCard from "@/components/CalendarListCard";
import CalendarMonthView from "@/components/CalendarMonthView";
import { getParishCalendarEvents } from "@/lib/calendar-feed";
import { calendar, site } from "@/lib/content";
import { ArrowUpRight, CalendarDays, Clock3, MapPin } from "lucide-react";

export const dynamic = "force-dynamic";

function formatLongDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function formatTime(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(date));
}

function groupEventsByDay(
  events: Awaited<ReturnType<typeof getParishCalendarEvents>>
) {
  const labelFormatter = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const keyFormatter = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const grouped = new Map<string, { label: string; items: typeof events }>();

  for (const event of events) {
    const date = new Date(event.start);
    const key = keyFormatter.format(date);
    const existing = grouped.get(key);

    if (existing) {
      existing.items.push(event);
      continue;
    }

    grouped.set(key, {
      label: labelFormatter.format(date),
      items: [event],
    });
  }

  return Array.from(grouped.entries())
    .slice(0, 8)
    .map(([key, value]) => ({ key, ...value }));
}

export default async function CalendarPage() {
  const events = await getParishCalendarEvents();
  const upcoming = events.slice(0, 8);
  const featured = upcoming[0];
  const nextThree = upcoming.slice(1, 5);
  const byDay = groupEventsByDay(events);
  const categorySummary = Array.from(
    upcoming.reduce((map, event) => {
      map.set(event.category, (map.get(event.category) ?? 0) + 1);
      return map;
    }, new Map<string, number>())
  ).slice(0, 5);

  return (
    <div className="mx-auto w-full max-w-[1800px] px-4 pb-20 pt-28 sm:px-6 lg:px-12 lg:pt-36">
      <section className="calendar-shell overflow-hidden rounded-[2rem] border border-border px-5 py-6 sm:px-7 sm:py-8 lg:px-10 lg:py-10">
        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="calendar-kicker">Parish Calendar</span>
              <h1 className="max-w-4xl text-4xl font-display tracking-tight text-foreground sm:text-5xl lg:text-7xl">
                A clearer, calmer way to keep up with parish life.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-mutedForeground sm:text-lg">
                View Holy Qurbana, prayer meetings, Sunday School, ministry gatherings, and parish
                dates in a format designed to be fast to scan on phone, tablet, and desktop.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {site.serviceTimes.map((item) => (
                <div key={item} className="calendar-stat-card">
                  <span className="calendar-stat-label">Service</span>
                  <p className="calendar-stat-copy">{item}</p>
                </div>
              ))}
              <div className="calendar-stat-card sm:col-span-2 xl:col-span-1">
                <span className="calendar-stat-label">Prayer</span>
                <p className="calendar-stat-copy">{site.prayerRhythm}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={calendar.publicEmbed}
                target="_blank"
                rel="noreferrer"
                className="button-primary inline-flex items-center gap-2"
              >
                Open in Google Calendar
                <ArrowUpRight size={16} />
              </a>
              <a href="#forthcoming-dates" className="calendar-secondary-button inline-flex items-center gap-2">
                Browse upcoming dates
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="calendar-feature-card">
              <div className="flex items-center justify-between gap-4">
                <span className="calendar-kicker">Next in the parish</span>
                {featured?.source === "fallback" ? (
                  <span className="text-[10px] uppercase tracking-[0.24em] text-mutedForeground">
                    Local fallback
                  </span>
                ) : null}
              </div>

              {featured ? (
                <>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <span className="calendar-card-pill">{featured.category}</span>
                    <span className="text-xs uppercase tracking-[0.24em] text-mutedForeground">
                      {formatLongDate(featured.start)}
                    </span>
                  </div>

                  <h2 className="mt-5 max-w-2xl text-3xl font-display leading-tight text-foreground sm:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-mutedForeground">
                    {featured.summary}
                  </p>

                  <div className="mt-7 grid gap-4 sm:grid-cols-3">
                    <div className="calendar-detail-box">
                      <CalendarDays size={18} />
                      <div>
                        <p className="calendar-detail-label">Date</p>
                        <p className="calendar-detail-value">{formatLongDate(featured.start)}</p>
                      </div>
                    </div>
                    <div className="calendar-detail-box">
                      <Clock3 size={18} />
                      <div>
                        <p className="calendar-detail-label">Time</p>
                        <p className="calendar-detail-value">
                          {formatTime(featured.start)}
                          {featured.end ? ` - ${formatTime(featured.end)}` : ""}
                        </p>
                      </div>
                    </div>
                    <div className="calendar-detail-box">
                      <MapPin size={18} />
                      <div>
                        <p className="calendar-detail-label">Location</p>
                        <p className="calendar-detail-value">{featured.location}</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {categorySummary.map(([label, count]) => (
                <div key={label} className="calendar-stat-card">
                  <span className="calendar-stat-label">{label}</span>
                  <p className="calendar-stat-copy">
                    {count} upcoming {count === 1 ? "date" : "dates"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 pt-10 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="calendar-panel">
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="calendar-kicker">Coming Soon</span>
              <h2 className="mt-3 text-3xl font-display text-foreground sm:text-4xl">
                Next dates at a glance
              </h2>
            </div>
            <CalendarDays className="hidden text-[var(--gold)] sm:block" size={24} />
          </div>

          <div className="mt-8 space-y-5">
            {byDay.map((group) => (
              <div key={group.key} className="calendar-day-group">
                <div className="calendar-day-label">{group.label}</div>
                <div className="space-y-3">
                  {group.items.map((event) => (
                    <div key={event.id} className="calendar-day-item">
                      <div className="min-w-[96px]">
                        <p className="calendar-day-time">{formatTime(event.start)}</p>
                        <p className="calendar-day-location">{event.location}</p>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="calendar-day-title">{event.title}</p>
                        <p className="calendar-day-copy">{event.summary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="calendar-panel">
          <span className="calendar-kicker">Upcoming Cards</span>
          <h2 className="mt-3 text-3xl font-display text-foreground sm:text-4xl">
            Easy to scan on any device
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {nextThree.map((event) => (
              <CalendarListCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section id="forthcoming-dates" className="pt-12">
        <CalendarMonthView events={events} />
      </section>
    </div>
  );
}
