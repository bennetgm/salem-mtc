import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  eyebrow?: string;
  title?: string;
  intro?: string;
  className?: string;
}>;

export default function Section({ eyebrow, title, intro, className = "", children }: SectionProps) {
  return (
    <section className={`w-full max-w-[1800px] mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-20 ${className}`.trim()}>
        {(eyebrow || title || intro) && (
          <div className="mb-16 max-w-3xl">
            {eyebrow ? <span className="text-accent uppercase tracking-widest text-xs font-semibold block mb-4">{eyebrow}</span> : null}
            {title ? <h2 className="text-4xl lg:text-5xl font-display text-foreground tracking-tighter mb-4">{title}</h2> : null}
            {intro ? <p className="text-mutedForeground font-sans text-lg">{intro}</p> : null}
          </div>
        )}
        {children}
    </section>
  );
}
