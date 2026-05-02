"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { site } from "@/lib/content";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
      <div
        className={`pointer-events-auto w-full transition-all duration-500 ${
          scrolled || open
            ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-gradient-to-b from-background/80 via-background/30 to-transparent"
        }`}
      >
        <div className={`w-full max-w-[1600px] mx-auto flex items-center justify-between px-6 lg:px-10 transition-all duration-500 ${scrolled || open ? "py-3" : "py-5"}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
            <div className="transition-transform duration-300 group-hover:scale-110">
              <BrandLogo variant="shield" className="h-9 w-9 object-contain" alt="Salem Mar Thoma logo" />
            </div>
            <span className="font-display font-semibold text-foreground tracking-tight text-xs sm:text-sm leading-tight">
              Salem Mar Thoma Church<br />
              <span className="text-[10px] sm:text-xs font-medium tracking-widest uppercase" style={{ color: "var(--gold)" }}>
                Southampton
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {site.nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors rounded-lg ${
                    active
                      ? "text-accent"
                      : "text-mutedForeground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0.5 left-4 right-4 h-[1.5px] rounded-full"
                      style={{ background: "var(--gold)" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            {mounted && (
              <button
                aria-label="Toggle dark mode"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-mutedForeground hover:text-gold hover:border-gold transition-all duration-200"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            )}

            {/* Mobile toggle */}
            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-border text-foreground hover:border-gold hover:text-gold transition-all"
              onClick={() => setOpen(!open)}
              aria-label="Open menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-border lg:hidden"
            >
              <div className="flex flex-col p-3 gap-1 pb-4">
                {site.nav.map((item) => {
                  const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                        active
                          ? "text-accent bg-muted"
                          : "text-mutedForeground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
