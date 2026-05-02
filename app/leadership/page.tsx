import Section from "@/components/Section";
import PersonCard from "@/components/PersonCard";
import Hero from "@/components/Hero";
import { leaders } from "@/lib/content";

export default function LeadershipPage() {
  return (
    <div className="bg-background">
      <Hero 
        eyebrow="Leadership" 
        title="Served by clergy and lay leaders." 
        body="The parish is guided by office bearers, ministry leads, and area representatives who serve together to support worship, administration, and community care."
        image="/images/Church Photos/126bb72df1f17cc18f7d9c735ad5f81a.jpg"
      />

      <Section eyebrow="Governance" title="Parish Leadership" intro="Office bearers and ministry leads help coordinate the daily and seasonal life of the Southampton parish.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[...leaders.clergy, ...leaders.executive, ...leaders.ministryLeads].map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Regional" title="Area Representatives" intro="Our representatives provide a vital link for fellowship and pastoral care within localized regions of the parish.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {leaders.areaRepresentatives.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </Section>
    </div>
  );
}
