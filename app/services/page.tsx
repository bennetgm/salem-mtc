import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { site } from "@/lib/content";

export default function ServicesPage() {
  return (
    <>
      <Section eyebrow="Services" title="Worship times and prayer rhythms for the parish." intro="Holy Qurbana and regular worship remain at the heart of church life. This page brings together the main service schedule and the wider rhythm of prayer in the parish.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {site.serviceTimes.map((service) => (
            <GlassCard key={service}>
              <p className="event-label">Worship</p>
              <h3 className="card-title mt-3">{service}</h3>
            </GlassCard>
          ))}
          <GlassCard>
            <p className="event-label">Prayer</p>
            <h3 className="card-title mt-3">Area Meetings</h3>
            <p className="section-copy mt-3">{site.prayerRhythm}</p>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="First Visit" title="What to expect when you join us for worship." intro="Mar Thoma worship is reverent, scripture-centred, and congregational. If you are visiting for the first time, these notes will help you understand the rhythm of the service and parish life.">
        <div className="grid gap-6 lg:grid-cols-3">
          <GlassCard>
            <h3 className="card-title">Worship Style</h3>
            <p className="section-copy mt-3">Mar Thoma liturgical worship is centred on scripture reading, prayer, preaching, congregational participation, and Holy Qurbana.</p>
          </GlassCard>
          <GlassCard>
            <h3 className="card-title">Family Rhythm</h3>
            <p className="section-copy mt-3">Families gather for worship, Sunday School, fellowship, and parish activities that help children and young people grow in faith.</p>
          </GlassCard>
          <GlassCard>
            <h3 className="card-title">Pastoral Support</h3>
            <p className="section-copy mt-3">Visitors are welcome to speak with the vicar or parish leaders, ask for prayer, and learn more about membership and church life.</p>
          </GlassCard>
        </div>
      </Section>
    </>
  );
}
