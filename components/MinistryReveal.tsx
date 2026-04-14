"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Ministry } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export default function MinistryReveal({ ministries }: { ministries: Ministry[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="w-full py-24 lg:py-36 bg-background border-t border-border relative overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-12 flex items-end justify-between">
        <div>
          <span
            className="inline-block text-[10px] font-semibold tracking-[0.25em] uppercase mb-4 px-3 py-1.5 rounded border"
            style={{
              color: "var(--gold)",
              borderColor: "color-mix(in srgb, var(--gold) 30%, transparent)",
              background: "color-mix(in srgb, var(--gold) 6%, transparent)",
            }}
          >
            Ministries
          </span>
          <h2
            className="font-display font-semibold text-foreground leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            Parish{" "}
            <em className="not-italic" style={{ color: "var(--accent)" }}>Organisations</em>
          </h2>
        </div>
        <div className="hidden lg:block text-right max-w-xs">
          <p className="text-mutedForeground text-sm leading-relaxed">
            These organisations support the spiritual, musical, pastoral, and fellowship life of the parish.
          </p>
        </div>
      </div>

      {/* Rows */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="border-t border-border">
          {ministries.map((min, idx) => (
            <motion.div
              key={min.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(null)}
              className="group relative border-b border-border py-8 px-4 -mx-4 grid grid-cols-[1fr_auto] lg:grid-cols-[auto_1fr_auto_auto] gap-6 lg:gap-12 items-center cursor-default transition-colors duration-200 hover:bg-muted rounded-xl"
            >
              {/* Index */}
              <span
                className="hidden lg:block font-mono text-xs tabular-nums font-medium"
                style={{ color: "color-mix(in srgb, var(--gold) 60%, transparent)" }}
              >
                0{idx + 1}
              </span>

              {/* Name + description */}
              <div>
                <h3
                  className="font-display font-semibold tracking-tight transition-colors duration-200 group-hover:text-accent"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
                >
                  {min.name}
                </h3>
                <p className="text-mutedForeground text-sm mt-1 leading-relaxed max-w-md hidden lg:block">
                  {min.short}
                </p>
              </div>

              {/* Focus tags */}
              <div className="hidden lg:flex flex-wrap gap-2 justify-end max-w-xs">
                {min.focus.slice(0, 2).map((f) => (
                  <span
                    key={f}
                    className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded border border-border"
                    style={{ color: "var(--muted-fg)", background: "var(--muted)" }}
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <span
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-mutedForeground transition-all duration-200 group-hover:border-gold group-hover:text-gold"
              >
                <ArrowUpRight size={14} />
              </span>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
