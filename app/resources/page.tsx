import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { formResource } from "@/lib/content";

export default function ResourcesPage() {
  return (
    <Section eyebrow="Resources" title="Membership forms and practical parish documents." intro="This page brings together useful resources for parish administration and membership-related needs.">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <GlassCard>
          <h3 className="card-title">{formResource.title}</h3>
          <p className="section-copy mt-4">{formResource.description}</p>
          <a href={formResource.href} target="_blank" rel="noreferrer" className="button-primary mt-6 inline-flex">
            Download Form
          </a>
        </GlassCard>
        <GlassCard>
          <h3 className="card-title">Submission Instructions</h3>
          <p className="section-copy mt-4">{formResource.instructions}</p>
        </GlassCard>
      </div>
    </Section>
  );
}
