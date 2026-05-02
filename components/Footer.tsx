"use client";

import Link from "next/link";
import { site } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border">
      {/* CTA band */}
      <div
        className="w-full py-20 lg:py-28 flex flex-col items-center text-center px-6"
        style={{ background: "var(--surface)" }}
      >
        <span
          className="inline-block text-[10px] font-semibold tracking-[0.25em] uppercase mb-6 px-3 py-1.5 rounded border"
          style={{
            color: "var(--gold)",
            borderColor: "color-mix(in srgb, var(--gold) 30%, transparent)",
            background: "color-mix(in srgb, var(--gold) 6%, transparent)",
          }}
        >
          Salem Mar Thoma Church
        </span>
        <h2
          className="font-display font-semibold text-foreground leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          A Community<br />
          <em className="not-italic" style={{ color: "var(--accent)" }}>of Faith</em>
        </h2>
        <p className="mt-6 text-mutedForeground max-w-md text-base leading-relaxed">
          {site.summary}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="shimmer px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "var(--accent)",
              color: "var(--accent-fg)",
              boxShadow: "0 4px 20px color-mix(in srgb, var(--accent) 20%, transparent)",
            }}
          >
            Contact the Parish
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide border transition-all duration-300 hover:-translate-y-0.5"
            style={{
              borderColor: "color-mix(in srgb, var(--gold) 40%, transparent)",
              color: "var(--gold)",
              background: "color-mix(in srgb, var(--gold) 5%, transparent)",
            }}
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Links grid */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="mb-5">
            <BrandLogo variant="shield" className="h-12 w-12 object-contain" alt="Church mark" />
          </div>
          <h3 className="font-display font-semibold text-foreground text-lg tracking-tight leading-tight">
            {site.shortName}
          </h3>
          <p className="mt-2 text-mutedForeground text-xs leading-relaxed">Southampton, UK</p>
        </div>

        {[
          {
            label: "Navigate",
            links: site.nav.slice(0, 5).map((n) => ({ text: n.label, href: n.href, external: false })),
          },
          {
            label: "Connect",
            links: [
              ...site.social.map((s) => ({ text: s.label, href: s.href, external: true })),
              { text: site.email, href: `mailto:${site.email}`, external: false },
            ],
          },
          {
            label: "Worship",
            links: site.serviceTimes.map((t) => ({ text: t, href: "#", external: false })),
          },
        ].map((col) => (
          <div key={col.label}>
            <span
              className="block text-[10px] font-semibold tracking-[0.2em] uppercase mb-5"
              style={{ color: "var(--gold)" }}
            >
              {col.label}
            </span>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-mutedForeground hover:text-foreground transition-colors duration-150 flex items-center gap-1.5 truncate group"
                  >
                    <span className="truncate">{link.text}</span>
                    {link.external && (
                      <ArrowUpRight
                        size={11}
                        className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: "var(--gold)" }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border py-5 px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-mutedForeground tracking-wide">
          © {new Date().getFullYear()} {site.shortName}. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: "color-mix(in srgb, var(--gold) 60%, transparent)" }}>
          Mar Thoma Syrian Church of Malabar
        </p>
      </div>
    </footer>
  );
}
