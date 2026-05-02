import { CalendarDays, Clock3, MapPin } from "lucide-react";
import type { ParishCalendarEvent } from "@/lib/calendar-feed";
import GlassCard from "@/components/GlassCard";

function formatFullDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(date));
}

function formatDay(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
  }).format(new Date(date));
}

function formatMonth(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    month: "short",
  }).format(new Date(date));
}

export default function CalendarListCard({ event }: { event: ParishCalendarEvent }) {
  return (
    <GlassCard className="calendar-card h-full p-0">
      <div className="flex h-full flex-col gap-0 md:flex-row">
        <div className="calendar-card-date flex min-w-[108px] flex-row items-center justify-between gap-4 px-5 py-5 md:flex-col md:justify-center md:px-4 md:py-7">
          <span className="calendar-card-month">{formatMonth(event.start)}</span>
          <span className="calendar-card-day">{formatDay(event.start)}</span>
          <span className="calendar-card-weekday">
            {new Intl.DateTimeFormat("en-GB", { weekday: "short" }).format(new Date(event.start))}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="calendar-card-pill">{event.category}</span>
          </div>

          <h3 className="mt-5 text-2xl font-display leading-tight text-foreground">{event.title}</h3>
          {event.summary ? (
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-mutedForeground">{event.summary}</p>
          ) : null}

          <div className="mt-6 space-y-3 text-sm text-mutedForeground">
            <div className="flex items-start gap-2">
              <CalendarDays size={16} className="mt-0.5 shrink-0" />
              <span>{formatFullDate(event.start)}</span>
            </div>
            {event.end ? (
              <div className="flex items-start gap-2">
                <Clock3 size={16} className="mt-0.5 shrink-0" />
                <span>
                  Ends{" "}
                  {new Intl.DateTimeFormat("en-GB", {
                    hour: "numeric",
                    minute: "2-digit",
                  }).format(new Date(event.end))}
                </span>
              </div>
            ) : null}
            {event.location ? (
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>{event.location}</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
