import CinematicHero from "@/components/CinematicHero";
import ServiceStrip from "@/components/ServiceStrip";
import MinistryReveal from "@/components/MinistryReveal";
import EventGrid from "@/components/EventGrid";
import { eventFeed, hero, ministries, site } from "@/lib/content";

export default function HomePage() {
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
    </div>
  );
}
