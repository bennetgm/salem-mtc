"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BrandLogo from "@/components/BrandLogo";

export default function CinematicHero({
  title,
  eyebrow,
  text,
}: {
  image?: string;
  title: string;
  eyebrow: string;
  text: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full flex flex-col justify-center items-center overflow-hidden bg-background pt-24 pb-32 md:pb-40"
    >
      {/* ── Background decorations ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Warm radial glow top */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in srgb, var(--gold-light) 15%, transparent) 0%, transparent 70%)" }}
        />
        {/* Accent bleed top-right */}
        <div
          className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full"
          style={{ background: "var(--accent)", filter: "blur(120px)", opacity: 0.06 }}
        />
        {/* Gold bleed bottom-left */}
        <div
          className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full"
          style={{ background: "var(--gold)", filter: "blur(100px)", opacity: 0.07 }}
        />
        {/* Hairline grid */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Gold vertical line — left */}
        <div
          className="absolute left-4 md:left-10 top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(to bottom, transparent, var(--gold) 30%, var(--gold) 70%, transparent)", opacity: 0.2 }}
        />
        {/* Gold vertical line — right */}
        <div
          className="absolute right-4 md:right-10 top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(to bottom, transparent, var(--gold) 30%, var(--gold) 70%, transparent)", opacity: 0.2 }}
        />
      </div>

      {/* ── Content ── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-8 md:px-16 lg:px-20 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center justify-center"
        >
          <BrandLogo
            variant="shield"
            className="h-auto w-32 sm:w-48 md:w-64 lg:w-[400px] xl:w-[600px] 2xl:w-[800px] object-contain transition-all duration-700"
            alt="Salem Mar Thoma Church Southampton crest"
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-12 bg-gold opacity-60" />
          <span className="text-gold text-sm font-medium tracking-[0.25em] uppercase">
            {eyebrow}
          </span>
          <span className="h-px w-12 bg-gold opacity-60" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-display font-semibold text-foreground tracking-tight leading-[1.05]"
          style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}
        >
          Salem{" "}
          <em className="not-italic" style={{ color: "var(--accent)" }}>
            Mar Thoma
          </em>
          <br />
          Church
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          className="my-8 w-24 h-px origin-center"
          style={{ background: "var(--gold)" }}
        />

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          className="text-mutedForeground text-lg lg:text-xl leading-relaxed max-w-2xl font-sans font-normal"
        >
          {text}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          className="mt-12 mb-24 lg:mb-36 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/contact"
            className="shimmer px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "var(--accent)",
              color: "var(--accent-fg)",
              boxShadow: "0 4px 20px color-mix(in srgb, var(--accent) 25%, transparent)",
            }}
          >
            Contact the Parish
          </a>
          <a
            href="/about"
            className="px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 border border-gold/50"
            style={{
              color: "var(--gold)",
              background: "color-mix(in srgb, var(--gold) 5%, transparent)",
            }}
          >
            About the Parish
          </a>
        </motion.div>
      </motion.div>

      {/* ── Scroll nudge ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-mutedForeground">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, var(--gold), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
