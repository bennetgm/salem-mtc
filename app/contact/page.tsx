import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import Hero from "@/components/Hero";
import { formResource, site } from "@/lib/content";

export default function ContactPage() {
  return (
    <div className="bg-background">
      <Hero 
        eyebrow="Contact" 
        title="Get in touch with the parish family." 
        body="Whether you are planning to attend worship, looking for parish information, or need membership-related help, we would be glad to hear from you."
        image="/images/Church Photos/premium_photo-1730051167892-817312726056.avif"
      />

      <Section eyebrow="Connection" title="Reach our team." intro="The parish is served by dedicated clergy and lay leaders who are available for pastoral needs and administrative support.">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassCard>
            <h3 className="card-title">Get in touch</h3>
            <div className="mt-5 space-y-4">
              <p className="section-copy">
                <span className="font-semibold text-foreground">Email:</span> <a href={`mailto:${site.email}`} className="text-gold hover:underline">{site.email}</a>
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-fg mb-3">Service Rhythm</p>
                {site.serviceTimes.map((item) => (
                  <p key={item} className="section-copy text-sm mb-2">{item}</p>
                ))}
              </div>
            </div>
          </GlassCard>
          <GlassCard>
            <h3 className="card-title">Membership and parish resources</h3>
            <p className="section-copy mt-4">{formResource.description}</p>
            <a href={formResource.href} target="_blank" rel="noreferrer" className="button-primary mt-6 inline-flex">
              Download Membership Form
            </a>
            <p className="section-copy mt-6 text-sm italic">{formResource.instructions}</p>
          </GlassCard>
        </div>
      </Section>
    </div>
  );
}
