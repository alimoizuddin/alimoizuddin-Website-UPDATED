import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { X, Send, Mail, Check } from "lucide-react";
import { useContent } from "../context/ContentContext";
import { track } from "../lib/analytics";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function ContactDialog({ open, onClose, kind, title, subject }) {
  const { profile } = useContent();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    if (!open) {
      // small delay so the user sees confirmation before reset
      const t = setTimeout(() => {
        setName("");
        setEmail("");
        setMessage("");
        setDone(false);
        setErr("");
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Esc to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    // Lock scroll while open
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  const submit = useCallback(
    async (e) => {
      e?.preventDefault?.();
      setErr("");
      if (!name.trim() || !email.trim() || !message.trim()) {
        setErr("Please fill in all three fields.");
        return;
      }
      setBusy(true);
      try {
        await axios.post(`${API}/contact-message`, {
          kind,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          source: typeof window !== "undefined" ? window.location.href : "",
        });
        track("contact_submitted", { kind });
        setDone(true);
      } catch (e2) {
        setErr(e2?.response?.data?.detail || "Could not send. Please email directly.");
      } finally {
        setBusy(false);
      }
    },
    [name, email, message, kind]
  );

  if (!open) return null;

  const mailtoHref = `mailto:${profile?.email || "aalimoizuddin@outlook.com"}?subject=${encodeURIComponent(
    subject || "Inquiry"
  )}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      data-testid="contact-dialog"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-lg bg-[#111116] border border-[#C9A84C]/25 p-6 md:p-8 max-h-[92vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          data-testid="contact-dialog-close"
          className="absolute top-4 right-4 text-[#888880] hover:text-[#C9A84C] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!done ? (
          <>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
              {title || "Get in touch"}
            </div>
            <h2 className="font-serif text-[#F5F0E8] text-3xl md:text-4xl font-light tracking-tight leading-tight mb-2">
              Tell me what you need.
            </h2>
            <p className="text-[#888880] text-sm mb-7 leading-relaxed">
              A line is enough. I&rsquo;ll reply within one working day.
            </p>

            <form onSubmit={submit} className="space-y-4" data-testid="contact-form">
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#888880]">
                  Name
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  data-testid="contact-name"
                  className="mt-1.5 w-full bg-[#0D0D0D] border border-[#888880]/30 px-3 py-2.5 text-[#F5F0E8] focus:border-[#C9A84C] focus:outline-none transition-colors"
                />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#888880]">
                  Email
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  data-testid="contact-email-input"
                  className="mt-1.5 w-full bg-[#0D0D0D] border border-[#888880]/30 px-3 py-2.5 text-[#F5F0E8] focus:border-[#C9A84C] focus:outline-none transition-colors"
                />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#888880]">
                  Message
                </span>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  data-testid="contact-message-input"
                  placeholder={
                    kind === "freelance"
                      ? "What system are you trying to build?"
                      : kind === "hiring"
                      ? "Role, team, and scope you have in mind."
                      : "Idea, partnership, or exchange you want to explore."
                  }
                  className="mt-1.5 w-full bg-[#0D0D0D] border border-[#888880]/30 px-3 py-2.5 text-[#F5F0E8] focus:border-[#C9A84C] focus:outline-none transition-colors resize-none"
                />
              </label>

              {err && (
                <div className="text-red-400 text-xs font-mono" data-testid="contact-form-error">
                  {err}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={busy}
                  data-testid="contact-submit"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#C9A84C] text-[#0D0D0D] font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-[#F5F0E8] transition-colors disabled:opacity-60"
                >
                  <Send className="w-3.5 h-3.5" />
                  {busy ? "Sending..." : "Send Message"}
                </button>
                <a
                  href={mailtoHref}
                  data-testid="contact-mailto-fallback"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 border border-[#888880]/30 text-[#888880] font-mono text-[10px] uppercase tracking-[0.25em] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Email directly
                </a>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-6" data-testid="contact-success">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#C9A84C]/40 text-[#C9A84C] mb-6">
              <Check className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-[#F5F0E8] text-3xl md:text-4xl font-light tracking-tight leading-tight mb-3">
              Message <span className="italic text-[#C9A84C]">received.</span>
            </h2>
            <p className="text-[#888880] text-sm md:text-base mb-8 max-w-sm mx-auto leading-relaxed">
              Thanks, {name.split(" ")[0]}. I&rsquo;ll reply to{" "}
              <span className="text-[#F5F0E8]">{email}</span> within one working day.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-[#C9A84C] text-[#0D0D0D] font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-[#F5F0E8] transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
