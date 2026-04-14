import Section from "@/components/Section";
import PersonCard from "@/components/PersonCard";
import { leaders } from "@/lib/content";

export default function LeadershipPage() {
  return (
    <>
      <Section eyebrow="Leadership" title="Office bearers, ministry leads, and area representatives." intro="The parish is supported by clergy, office bearers, and ministry leaders who serve the church in worship, administration, pastoral care, and fellowship.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[...leaders.clergy, ...leaders.executive, ...leaders.ministryLeads].map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Area Representatives" title="Regional contact points across the parish." intro="Area representatives help maintain pastoral connection and fellowship across the different places served by the parish.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {leaders.areaRepresentatives.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </Section>
    </>
  );
}
