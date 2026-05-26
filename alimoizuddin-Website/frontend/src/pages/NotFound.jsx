import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import NoiseOverlay from "../components/NoiseOverlay";
import { PROFILE } from "../data/site";
import { track } from "../lib/analytics";

export default function NotFound() {
  useEffect(() => {
    track("not_found", { path: window.location.pathname });
  }, []);

  return (
    <main className="relative min-h-screen bg-[#0D0D0D] text-[#F5F0E8] flex items-center justify-center overflow-hidden">
      <NoiseOverlay />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60rem 30rem at 50% 30%, rgba(31,71,136,0.25) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-2xl px-6 md:px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="block w-10 h-px bg-[#C9A84C]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#C9A84C]">
            Error · 404
          </span>
          <span className="block w-10 h-px bg-[#C9A84C]" />
        </div>

        <h1
          className="font-serif text-[#F5F0E8] text-6xl md:text-8xl font-light tracking-tight leading-none"
          data-testid="not-found-title"
        >
          0<span className="italic text-[#C9A84C]">/</span>4
          <br className="md:hidden" />
          <span className="text-[#C9A84C]">.</span>
          <span className="italic"> Not found.</span>
        </h1>

        <p className="mt-10 text-[#888880] text-lg leading-relaxed max-w-md mx-auto">
          The page you&rsquo;re looking for doesn&rsquo;t exist — or perhaps it was a
          system that didn&rsquo;t survive its first draft.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            data-testid="not-found-home"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A84C] text-[#0D0D0D] font-mono text-[11px] uppercase tracking-[0.25em] hover:bg-[#F5F0E8] transition-colors duration-500"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>
          <a
            href={`mailto:${PROFILE.email}`}
            data-testid="not-found-email"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#C9A84C]/50 text-[#C9A84C] font-mono text-[11px] uppercase tracking-[0.25em] hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-colors duration-500"
          >
            Report a broken link
          </a>
        </div>
      </div>
    </main>
  );
}
