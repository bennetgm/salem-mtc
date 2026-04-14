import CinematicHero from "@/components/CinematicHero";
import ServiceStrip from "@/components/ServiceStrip";
import MinistryReveal from "@/components/MinistryReveal";
import EventGrid from "@/components/EventGrid";
import { eventFeed, hero, ministries, site } from "@/lib/content";
import { getParishCalendarEvents } from "@/lib/calendar-feed";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import Link from "next/link";

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

export default async function HomePage() {
  const events = await getParishCalendarEvents();
  
  const now = new Date();
  const upcoming = events.filter(e => new Date(e.start) >= now);
  const featured = upcoming[0] || events[0];

  return (
    <div className="bg-background min-h-[100svh]">
      <CinematicHero 
        eyebrow={hero.eyebrow} 
        title={site.shortName} 
        text={site.summary} 
      />

      <ServiceStrip 
        services={site.serviceTimes} 
        prayerRhythm={site.prayerRhythm} 
      />

      <MinistryReveal ministries={ministries} />

      <EventGrid events={eventFeed} />

      {featured && (
        <section className="mx-auto max-w-[1800px] px-4 pb-20 sm:px-6 lg:px-12 pt-12">
          <div className="calendar-feature-card mx-auto max-w-7xl">
            <div className="flex items-center justify-between gap-4">
              <span className="calendar-kicker">Next in the parish</span>
              {featured.source === "fallback" ? (
                <span className="text-[10px] uppercase tracking-[0.24em] text-mutedForeground">
                  Local fallback
                </span>
              ) : null}
            </div>

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

            <div className="mt-8 flex">
              <Link href="/calendar" className="button-primary">View Full Calendar</Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
