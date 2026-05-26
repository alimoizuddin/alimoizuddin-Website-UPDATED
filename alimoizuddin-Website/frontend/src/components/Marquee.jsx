import React from "react";
import { useContent } from "../context/ContentContext";

// A slow, silent editorial marquee — credibility surface area without sounding loud.
export default function Marquee() {
  const { stackMarquee } = useContent();
  const STACK = stackMarquee || [];
  if (STACK.length === 0) return null;
  return (
    <section
      aria-label="Tools & stack"
      className="relative border-y border-[#C9A84C]/15 py-7 md:py-9 overflow-hidden bg-[#0D0D0D]"
      data-testid="stack-marquee"
    >
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #0D0D0D 0%, transparent 100%)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, #0D0D0D 0%, transparent 100%)" }} />

      <div className="flex items-center gap-3 mb-5 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        <span className="block w-8 h-px bg-[#C9A84C]/60" />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C9A84C]">
          In the stack
        </span>
      </div>

      <div className="marquee-track flex gap-12 whitespace-nowrap will-change-transform">
        {[...STACK, ...STACK].map((tool, i) => (
          <span
            key={`${tool}-${i}`}
            className="font-serif text-[#F5F0E8] text-2xl md:text-3xl tracking-tight inline-flex items-center gap-12"
          >
            {tool}
            <span aria-hidden className="text-[#C9A84C]/40 text-xl">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
