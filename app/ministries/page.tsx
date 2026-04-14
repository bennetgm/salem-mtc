import Section from "@/components/Section";
import MinistryCard from "@/components/MinistryCard";
import { ministries } from "@/lib/content";

export default function MinistriesPage() {
  return (
    <Section eyebrow="Ministries" title="Ministries that strengthen worship, fellowship, and service." intro="The parish is enriched by ministries that help different groups grow in faith, prayer, friendship, music, outreach, and mutual care.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {ministries.map((ministry) => (
          <MinistryCard key={ministry.slug} ministry={ministry} />
        ))}
      </div>
    </Section>
  );
}
