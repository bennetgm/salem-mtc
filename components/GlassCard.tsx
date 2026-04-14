import { PropsWithChildren } from "react";

type GlassCardProps = PropsWithChildren<{
  className?: string;
}>;

export default function GlassCard({ className = "", children }: GlassCardProps) {
  const hasPadding = /\bp(?:x|y|t|b|l|r)?-\d+/.test(className) || className.includes("p-");
  const defaultPadding = hasPadding ? "" : "p-8 md:p-10 lg:p-12";

  return (
    <div 
      style={{ background: "var(--surface)" }} 
      className={`border border-border shadow-sm rounded-3xl hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden group ${defaultPadding} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
