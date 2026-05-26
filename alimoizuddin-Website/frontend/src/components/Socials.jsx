import React from "react";
import {
  Linkedin, Instagram, Facebook, Youtube, Github, Twitter, ExternalLink,
} from "lucide-react";
import { useContent } from "../context/ContentContext";
import { track } from "../lib/analytics";

const ICONS = {
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  github: Github,
  twitter: Twitter,
  external: ExternalLink,
};

export default function Socials({ variant = "row", className = "" }) {
  const { socials } = useContent();
  const active = (socials || []).filter((s) => s && s.url && s.url.length > 0);
  if (active.length === 0) return null;

  if (variant === "row") {
    return (
      <div className={`flex flex-wrap items-center gap-3 ${className}`} data-testid="socials-row">
        {active.map((s) => {
          const Icon = ICONS[s.icon] || ExternalLink;
          return (
            <a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              data-testid={`social-${s.id}`}
              onClick={() => track("social_click", { network: s.id })}
              className="group inline-flex items-center justify-center w-10 h-10 border border-[#888880]/30 text-[#888880] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors duration-500"
            >
              <Icon className="w-4 h-4" strokeWidth={1.5} />
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 ${className}`} data-testid="socials-labeled">
      {active.map((s) => {
        const Icon = ICONS[s.icon] || ExternalLink;
        return (
          <a
            key={s.id}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`social-labeled-${s.id}`}
            onClick={() => track("social_click", { network: s.id })}
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#888880] hover:text-[#C9A84C] transition-colors duration-500"
          >
            <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
            {s.label}
          </a>
        );
      })}
    </div>
  );
}
