"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";
import { motion } from "framer-motion";

type HeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
};

const fadeUpParams = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Hero({ eyebrow, title, body, image }: HeroProps) {
  return (
    <section className="shell hero-section">
      <div className="hero-grid">
        <motion.div 
          className="hero-copy-panel"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="hero-copy-stack">
            <motion.span variants={fadeUpParams} className="eyebrow-chip">{eyebrow}</motion.span>
            <motion.h1 variants={fadeUpParams} className="hero-title mt-5 text-[var(--brand)]">{title}</motion.h1>
            <motion.p variants={fadeUpParams} className="section-copy hero-copy-text mt-6 max-w-xl">{body}</motion.p>
          </div>
          <motion.div variants={fadeUpParams} className="mt-8 flex flex-wrap gap-3 hero-actions">
            <Link href="/services" className="button-primary hover:shadow-xl transition-all">
              Service Times
            </Link>
            <Link href="/events" className="button-secondary">
              Upcoming Events
            </Link>
          </motion.div>
          <motion.div variants={fadeUpParams} className="hero-service-strip">
            {site.serviceTimes.slice(0, 2).map((item) => (
              <div key={item} className="hero-service-pill">
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="hero-image-wrap aspect-[3/2] lg:aspect-[16/9]"
        >
          <div className="hero-image-shell">
            <Image src={image} alt="Salem Mar Thoma Church congregation" fill className="object-cover transition-transform duration-1000 hover:scale-105" priority />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
