"use client";

import { motion } from "framer-motion";

export default function ServiceStrip({
  services,
  prayerRhythm,
}: {
  services: string[];
  prayerRhythm: string;
}) {
  return (
    <section className="w-full py-24 lg:py-36 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">

        {/* Left: heading */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="inline-block text-[10px] font-semibold tracking-[0.25em] uppercase mb-6 px-3 py-1.5 rounded border"
            style={{ color: "var(--gold)", borderColor: "color-mix(in srgb, var(--gold) 30%, transparent)", background: "color-mix(in srgb, var(--gold) 6%, transparent)" }}
          >
            Service Times
          </span>
          <h2
            className="font-display font-semibold text-foreground leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Holy Qurbana<br />
            <em className="not-italic" style={{ color: "var(--accent)" }}>and Worship</em>
          </h2>
          <div className="mt-6 w-10 h-px" style={{ background: "var(--gold)" }} />
          <p className="mt-6 text-mutedForeground text-base leading-relaxed max-w-xs">
            The worshipping life of the parish is centred on Holy Qurbana, regular services, prayer, and reverent participation by the congregation.
          </p>
        </motion.div>

        {/* Right: service rows */}
        <div className="flex flex-col divide-y divide-border">
          {services.map((service, i) => {
            const [title, time] = service.split(" - ");
            return (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-7 gap-3 hover:bg-muted/30 px-4 -mx-4 rounded-xl transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-150"
                    style={{ background: "var(--gold)" }}
                  />
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                </div>
                <span
                  className="text-sm font-medium tracking-wide tabular-nums ml-6 sm:ml-0"
                  style={{ color: "var(--gold)" }}
                >
                  {time}
                </span>
              </motion.div>
            );
          })}

          {/* Prayer bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pt-8 mt-2"
          >
            <div
              className="rounded-2xl p-6 border"
              style={{
                background: "color-mix(in srgb, var(--gold) 5%, transparent)",
                borderColor: "color-mix(in srgb, var(--gold) 20%, transparent)",
              }}
            >
              <span
                className="block text-[10px] font-semibold tracking-[0.25em] uppercase mb-3"
                style={{ color: "var(--gold)" }}
              >
                Prayer Meetings
              </span>
              <p className="text-foreground text-sm leading-relaxed">{prayerRhythm}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
