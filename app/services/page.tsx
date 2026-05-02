import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import Hero from "@/components/Hero";
import Image from "next/image";
import { site } from "@/lib/content";

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <Hero 
        eyebrow="Services" 
        title="Worship times and prayer rhythms." 
        body="Holy Qurbana and regular worship remain at the heart of church life. We gather throughout the month for liturgical worship, area prayers, and fellowship."
        image="/images/Church Photos/hugo-l-casanova-UTLQ3icUT7g-unsplash.jpg"
      />

      <Section eyebrow="Schedule" title="Worship Gatherings" intro="Regular Holy Qurbana services are held in Southampton, alongside area prayer meetings across the region.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {site.serviceTimes.map((service) => (
            <GlassCard key={service}>
              <p className="event-label">Holy Qurbana</p>
              <h3 className="card-title mt-4 text-xl">{service}</h3>
            </GlassCard>
          ))}
          <GlassCard>
            <p className="event-label">Intercession</p>
            <h3 className="card-title mt-4 text-xl">Area Prayer Meetings</h3>
            <p className="section-copy mt-4">{site.prayerRhythm}</p>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="First Visit" title="Joining us for worship." intro="Mar Thoma worship is reverent and ancient. If you are joining us for the first time, here is what you can expect during the service.">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6 sm:grid-cols-1">
            <GlassCard>
              <h3 className="card-title">Worship Style</h3>
              <p className="section-copy mt-4">Liturgical worship is centered on scripture, prayer, and congregational response. The service guide helps everyone participate in the Malayalam liturgy.</p>
            </GlassCard>
            <GlassCard>
              <h3 className="card-title">Family Rhythm</h3>
              <p className="section-copy mt-4">We are a multi-generational community. Sunday School usually happens before the service, and children are welcome participants in the wider worship life.</p>
            </GlassCard>
          </div>
          
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image 
              src="/images/Church Photos/148cc71a59fdf130a3ad9d6adc5d52d1.jpg" 
              alt="Communion Chalice" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </Section>
    </div>
  );
}
