import React from "react";
import { Link } from "react-router-dom";
import { useContent } from "../context/ContentContext";
import Socials from "./Socials";

export default function Footer() {
  const { profile } = useContent();
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-[#C9A84C]/15 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex items-center gap-3 flex-wrap">
          <Link
            to="/"
            className="font-serif text-[#C9A84C] text-lg tracking-[0.18em]"
          >
            {profile?.brand || "ALI MOIZUDDIN"}
          </Link>
          <span className="block w-6 h-px bg-[#C9A84C]/40" />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#888880]">
            {profile?.location?.split(",")[0] || "Siliguri"} · India
          </span>
        </div>

        <Socials variant="labeled" />

        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#888880]">
          © {year} {profile?.name || "Ali Moizuddin"}. Built like a system.
        </div>
      </div>
    </footer>
  );
}
