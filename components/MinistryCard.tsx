import Image from "next/image";
import Link from "next/link";
import type { Ministry } from "@/lib/content";
import GlassCard from "./GlassCard";
import { ArrowRight } from "lucide-react";

export default function MinistryCard({ ministry }: { ministry: Ministry }) {
  return (
    <GlassCard className="p-0 h-full flex flex-col">
      <div className="relative aspect-[1.08/1] overflow-hidden">
        <Image src={ministry.image} alt={ministry.name} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
      </div>
      <div className="p-6 sm:p-8 flex flex-col flex-grow bg-background">
        <h3 className="text-2xl font-display text-foreground">{ministry.name}</h3>
        <p className="font-sans text-mutedForeground mt-4 flex-grow">{ministry.short}</p>
        <Link href={`/ministries/${ministry.slug}`} className="mt-6 inline-flex items-center gap-2 font-sans text-sm uppercase tracking-widest text-accent group/link">
          Explore ministry
          <ArrowRight size={16} className="transform transition-transform duration-300 group-hover/link:translate-x-2" />
        </Link>
      </div>
    </GlassCard>
  );
}
