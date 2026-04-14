import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import PersonCard from "@/components/PersonCard";
import { leaders, marThomaChurch } from "@/lib/content";

export default function AboutPage() {
  return (
    <>
      <Section eyebrow="About Salem" title="A Mar Thoma parish shaped by worship, scripture, family life, and care." intro={marThomaChurch.parish}>
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
          <GlassCard>
            <h3 className="card-title">Our Church Heritage</h3>
            <p className="section-copy mt-4">{marThomaChurch.identity}</p>
            <p className="section-copy mt-4">As a local parish, we share in that wider Mar Thoma witness while serving the spiritual needs of families, children, young people, and visitors in and around Southampton.</p>
          </GlassCard>
          <GlassCard>
            <h3 className="card-title">Worship and Parish Life</h3>
            <ul className="mt-4 space-y-4">
              <li className="section-copy">{marThomaChurch.worship}</li>
              <li className="section-copy">Parish life includes Holy Qurbana, ordinary worship, area prayer meetings, Sunday School, and ministry gatherings through the year.</li>
              <li className="section-copy">Visitors can expect reverent worship, warm fellowship, and a community that values scripture, prayer, and service.</li>
            </ul>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="Leadership" title="Office bearers and ministry leads." intro="The parish is served by clergy, office bearers, and ministry leaders who help guide worship, administration, pastoral care, and community life.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {leaders.clergy.concat(leaders.executive).map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </Section>
    </>
  );
}
