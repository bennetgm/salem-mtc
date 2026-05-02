import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        /* Hex CSS variables — simple and reliable */
        background:      "var(--background)",
        surface:         "var(--surface)",
        foreground:      "var(--foreground)",
        muted:           "var(--muted)",
        "muted-fg":      "var(--muted-fg)",
        border:          "var(--border)",
        accent:          "var(--accent)",
        "accent-fg":     "var(--accent-fg)",
        gold:            "var(--gold)",
        "gold-light":    "var(--gold-light)",
      },
      fontFamily: {
        sans:    ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      boxShadow: {
        sm:          "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        md:          "0 4px 16px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04)",
        lg:          "0 12px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)",
        gold:        "0 0 0 1px rgba(197,158,56,0.3), 0 8px 24px rgba(197,158,56,0.12)",
        /* Legacy tokens used by GlassCard / older components */
        soft:        "0 20px 40px -15px rgba(0,0,0,0.07)",
        bubbly:      "0 10px 40px -10px rgba(197,158,56,0.2)",
      },
      animation: {
        "fade-up":    "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in":    "fadeIn 0.5s ease forwards",
        "slide-right":"slideRight 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%":   { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
