import Image from "next/image";
import type { EventItem } from "@/lib/content";
import GlassCard from "./GlassCard";
import { Calendar, MapPin } from "lucide-react";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <GlassCard className="p-0 h-full flex flex-col">
      {event.image ? (
        <div className="relative aspect-[1.25/1] overflow-hidden border-b border-border">
          <Image src={event.image} alt={event.title} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      ) : null}
      <div className="p-6 sm:p-8 flex flex-col flex-grow bg-background">
        <div className="flex items-center gap-2 text-accent text-xs font-mono uppercase tracking-widest mb-4">
          <Calendar size={14} />
          <p>{event.dateLabel}</p>
        </div>
        <h3 className="text-xl font-display text-foreground transition-colors group-hover:text-accent">{event.title}</h3>
        <p className="font-sans text-mutedForeground mt-3 flex-grow">{event.summary}</p>
        <div className="flex items-center gap-2 mt-6 text-mutedForeground text-sm uppercase tracking-wide">
          <MapPin size={14} />
          <p>{event.location}</p>
        </div>
      </div>
    </GlassCard>
  );
}
