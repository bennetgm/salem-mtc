import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { galleryCollections } from "@/lib/content";

export default function GalleryPage() {
  return (
    <Section eyebrow="Gallery" title="Moments from worship, fellowship, and parish life." intro="These collections reflect the shared life of the church through services, gatherings, celebrations, and ministry events.">
      <div className="grid gap-6 md:grid-cols-2">
        {galleryCollections.map((collection) => (
          <GlassCard key={collection.title} className="flex h-full flex-col justify-between">
            <div>
              <img src={collection.image} alt={collection.title} className="mb-6 aspect-[1.4/1] w-full rounded-[1.5rem] object-cover" />
              <h3 className="card-title">{collection.title}</h3>
              <p className="section-copy mt-4">{collection.description}</p>
            </div>
            <a
              href={collection.href}
              target={collection.href.startsWith("http") ? "_blank" : undefined}
              rel={collection.href.startsWith("http") ? "noreferrer" : undefined}
              className="button-secondary mt-6 inline-flex"
            >
              {collection.cta}
            </a>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
