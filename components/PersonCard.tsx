import Image from "next/image";
import type { Person } from "@/lib/content";
import GlassCard from "./GlassCard";

export default function PersonCard({ person }: { person: Person }) {
  return (
    <GlassCard className="h-full px-6 py-7 sm:px-7 sm:py-8 flex flex-col items-center">
      <div className="relative mx-auto mb-6 aspect-square w-32 overflow-hidden rounded-full shadow-lg transition-transform duration-500 group-hover:scale-105 border border-border group-hover:border-accent">
        <Image src={person.image} alt={person.name} fill className="object-cover" />
      </div>
      <h3 className="text-center text-xl font-display text-foreground transition-colors group-hover:text-accent">{person.name}</h3>
      <p className="mt-2 text-center text-sm uppercase tracking-widest text-accent font-semibold">{person.role}</p>
      {person.area ? <p className="mt-4 text-center text-sm font-sans text-mutedForeground">{person.area}</p> : null}
    </GlassCard>
  );
}
