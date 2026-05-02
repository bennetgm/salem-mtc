"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Clock3, ExternalLink, MapPin, X } from "lucide-react";
import type { ParishCalendarEvent } from "@/lib/calendar-feed";
import CalendarListCard from "./CalendarListCard";

type CalendarMonthViewProps = {
  events: ParishCalendarEvent[];
};

type DayCell = {
  key: string;
  date: Date;
  inMonth: boolean;
  isToday: boolean;
  events: ParishCalendarEvent[];
};

const weekdayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

function dateKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatMonthHeading(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    month: "long",
    year: "numeric",
  }).format(date);
}

function formatPanelDate(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function formatEventTime(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(date));
}

function getEventTone(category: string) {
  const normalized = category.toLowerCase();

  if (normalized.includes("qurbana")) {
    return {
      background: "color-mix(in srgb, var(--gold) 18%, transparent)",
      border: "1px solid color-mix(in srgb, var(--gold) 35%, transparent)",
      color: "color-mix(in srgb, var(--foreground) 86%, var(--gold))",
    };
  }

  if (normalized.includes("prayer")) {
    return {
      background: "color-mix(in srgb, var(--accent) 12%, transparent)",
      border: "1px solid color-mix(in srgb, var(--accent) 22%, transparent)",
      color: "color-mix(in srgb, var(--foreground) 92%, var(--accent))",
    };
  }

  return {
    background: "color-mix(in srgb, var(--foreground) 7%, transparent)",
    border: "1px solid color-mix(in srgb, var(--border) 92%, transparent)",
    color: "var(--foreground)",
  };
}

function groupEventsByDate(events: ParishCalendarEvent[]) {
  const grouped = new Map<string, ParishCalendarEvent[]>();

  for (const event of events) {
    const key = dateKey(new Date(event.start));
    const existing = grouped.get(key) ?? [];
    existing.push(event);
    grouped.set(key, existing);
  }

  return grouped;
}

function buildMonthCells(currentMonth: Date, eventsByDate: Map<string, ParishCalendarEvent[]>) {
  const firstDay = startOfMonth(currentMonth);
  const firstWeekday = (firstDay.getDay() + 6) % 7;
  const gridStart = new Date(firstDay);
  gridStart.setDate(firstDay.getDate() - firstWeekday);

  const todayKey = dateKey(startOfDay(new Date()));
  const cells: DayCell[] = [];

  for (let index = 0; index < 42; index += 1) {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + index);

    cells.push({
      key: dateKey(date),
      date,
      inMonth: date.getMonth() === currentMonth.getMonth(),
      isToday: dateKey(date) === todayKey,
      events: eventsByDate.get(dateKey(date)) ?? [],
    });
  }

  return cells;
}

export default function CalendarMonthView({ events }: CalendarMonthViewProps) {
  const baseMonth = useMemo(() => startOfMonth(new Date()), []);
  const eventsByDate = useMemo(() => groupEventsByDate(events), [events]);
  const [monthOffset, setMonthOffset] = useState(0);
  const currentMonth = useMemo(() => addMonths(baseMonth, monthOffset), [baseMonth, monthOffset]);
  const cells = useMemo(() => buildMonthCells(currentMonth, eventsByDate), [currentMonth, eventsByDate]);



  const [selectedDateKey, setSelectedDateKey] = useState<string | null>(null);
  const [view, setView] = useState<"month" | "list">("month");

  const selectedCell = selectedDateKey ? cells.find((cell) => cell.key === selectedDateKey) : null;

  const monthHasEvents = cells.some((cell) => cell.inMonth && cell.events.length > 0);
  const mobileSheetOpen = Boolean(selectedCell);

  function navigate(amount: number) {
    setMonthOffset((value) => value + amount);
  }

  function jumpToToday() {
    setMonthOffset(0);
  }

  return (
    <div className="w-full">
      <div className="calendar-month-panel">
        <div className="calendar-app-bar">
          <div className="calendar-app-toolbar">
            <div className="calendar-segmented-control">
              <button
                type="button"
                onClick={() => setView("list")}
                className={`calendar-segment ${view === "list" ? "calendar-segment-active" : ""}`}
              >
                List
              </button>
              <button
                type="button"
                onClick={() => setView("month")}
                className={`calendar-segment ${view === "month" ? "calendar-segment-active" : ""}`}
              >
                Month
              </button>
            </div>
          </div>

          <div className="calendar-app-header">
            <div>
              <span className="calendar-kicker">Month View</span>
              <h2 className="mt-3 text-3xl font-display text-foreground sm:text-4xl">
                {formatMonthHeading(currentMonth)}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={jumpToToday}
                className="calendar-today-button"
              >
                Today
              </button>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="calendar-nav-button"
                  aria-label="Previous month"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => navigate(1)}
                  className="calendar-nav-button"
                  aria-label="Next month"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {view === "month" ? (
          <>
            <div className="mt-6 grid grid-cols-7 gap-2 text-center">
              {weekdayLabels.map((label) => (
                <div key={label} className="calendar-weekday-label">
                  {label}
                </div>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-7 gap-2">
              {cells.map((cell) => {
                const selected = selectedCell?.key === cell.key;

                return (
                  <button
                    key={cell.key}
                    type="button"
                    onClick={() => setSelectedDateKey(cell.key)}
                    className={`calendar-date-cell ${cell.inMonth ? "calendar-date-cell-current" : "calendar-date-cell-outside"} ${selected ? "calendar-date-cell-selected" : ""} ${cell.isToday ? "calendar-date-cell-today" : ""}`.trim()}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className={`calendar-date-number ${cell.isToday ? "calendar-date-number-today" : ""}`.trim()}>
                        {cell.date.getDate()}
                      </span>
                    </div>
                    <div className="mt-2 space-y-1">
                      {cell.events.slice(0, 2).map((event) => (
                        <span key={event.id} className="calendar-date-entry" style={getEventTone(event.category)}>
                          <span className="calendar-date-entry-time">{formatEventTime(event.start)}</span>
                          <span className="truncate">{event.title}</span>
                        </span>
                      ))}
                      {cell.events.length > 2 ? (
                        <span className="calendar-date-more">+{cell.events.length - 2} more</span>
                      ) : null}
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <div className="mt-8">
            <div className="grid gap-5 lg:grid-cols-2">
              {cells
                .filter((cell) => cell.inMonth)
                .flatMap((cell) => cell.events)
                .map((event) => (
                  <CalendarListCard key={event.id} event={event} />
                ))}
            </div>
            {cells.filter((cell) => cell.inMonth).flatMap((cell) => cell.events).length === 0 && (
              <div className="text-center py-20">
                <p className="text-mutedForeground">No events found for this month.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {selectedCell?.events.length ? (
        <aside className="calendar-side-panel">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="calendar-kicker">Selected Day</span>
              <h3 className="mt-3 text-2xl font-display text-foreground">
                {selectedCell ? formatPanelDate(selectedCell.date) : "Choose a date"}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setSelectedDateKey(null)}
              className="calendar-close-button"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>


          <div className="mt-6 space-y-4">
            {selectedCell.events.map((event) => (
              <div key={event.id} className="calendar-side-card">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="calendar-card-pill">{event.category}</span>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-mutedForeground">
                    {formatEventTime(event.start)}
                  </span>
                </div>

                <h4 className="mt-4 text-xl font-display text-foreground">{event.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-mutedForeground">{event.summary}</p>

                <div className="mt-4 space-y-2 text-sm text-mutedForeground">
                  <div className="flex items-start gap-2">
                    <Clock3 size={16} className="mt-0.5 shrink-0" />
                    <span>
                      {formatEventTime(event.start)}
                      {event.end ? ` - ${formatEventTime(event.end)}` : ""}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="mt-0.5 shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {event.htmlLink ? (
                  <a
                    href={event.htmlLink}
                    target="_blank"
                    rel="noreferrer"
                    className="calendar-inline-link mt-5 inline-flex items-center gap-2"
                  >
                    Open in Google Calendar
                    <ExternalLink size={15} />
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </aside>
      ) : null}
    </div>
  );
}
