import Section from "@/components/Section";
import MinistryCard from "@/components/MinistryCard";
import Hero from "@/components/Hero";
import { ministries } from "@/lib/content";

export default function MinistriesPage() {
  return (
    <div className="bg-background">
      <Hero 
        eyebrow="Ministries" 
        title="Worship, fellowship, and mutual care." 
        body="The parish is enriched by ministries that help children, young people, and families grow in faith and service through prayer and community."
        image="/images/Church Photos/Church Inside.jpg"
      />

      <Section eyebrow="Groups" title="Parish Organisations" intro="Engagement in these organisations helps different groups within the community nurture their faith and connect with one another.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {ministries.map((ministry) => (
            <MinistryCard key={ministry.slug} ministry={ministry} />
          ))}
        </div>
      </Section>
    </div>
  );
}
