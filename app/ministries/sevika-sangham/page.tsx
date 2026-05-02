import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { ministries } from "@/lib/content";

const ministry = ministries.find((item) => item.slug === "sevika-sangham")!;

export default function SevikaPage() {
  return (
    <Section eyebrow={ministry.name} title={ministry.short} intro={ministry.description}>
      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard>
          <h3 className="card-title">Rhythm</h3>
          <p className="section-copy mt-4">{ministry.rhythm}</p>
        </GlassCard>
        <GlassCard>
          <h3 className="card-title">Focus Areas</h3>
          <ul className="mt-4 space-y-3">
            {ministry.focus.map((item) => (
              <li key={item} className="section-copy">{item}</li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </Section>
  );
}
