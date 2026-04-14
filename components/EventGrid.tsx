"use client";

import { motion } from "framer-motion";
import { EventItem } from "@/lib/content";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function EventGrid({ events }: { events: EventItem[] }) {
  return (
    <section className="w-full py-24 lg:py-36 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div>
            <span
              className="inline-block text-[10px] font-semibold tracking-[0.25em] uppercase mb-4 px-3 py-1.5 rounded border"
              style={{
                color: "var(--gold)",
                borderColor: "color-mix(in srgb, var(--gold) 30%, transparent)",
                background: "color-mix(in srgb, var(--gold) 6%, transparent)",
              }}
            >
              Parish Calendar
            </span>
            <h2
              className="font-display font-semibold text-foreground leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
            >
              Upcoming{" "}
              <em className="not-italic" style={{ color: "var(--accent)" }}>Services and Events</em>
            </h2>
          </div>
          <p className="text-mutedForeground text-sm leading-relaxed max-w-xs">
            Forthcoming worship services, prayer meetings, ministry gatherings, and parish occasions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {events.slice(0, 6).map((event, i) => (
            <motion.div
              key={`${event.title}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-border hover:shadow-md transition-shadow duration-300"
              style={{ background: "var(--surface)" }}
            >
              {/* Image */}
              {event.image && (
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <span
                    className="absolute bottom-3 left-4 text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{ background: "var(--gold)", color: "var(--background)" }}
                  >
                    {event.dateLabel}
                  </span>
                </div>
              )}

              {/* Body */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-foreground text-lg mb-2 leading-tight">
                  {event.title}
                </h3>
                <p className="text-mutedForeground text-sm leading-relaxed mb-4">
                  {event.summary}
                </p>
                <div className="flex items-center gap-1.5 text-mutedForeground text-xs font-medium">
                  <MapPin size={11} />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Gold bottom bar on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: "var(--gold)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
