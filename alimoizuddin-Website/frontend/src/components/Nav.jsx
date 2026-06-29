import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useContent } from "../context/ContentContext";


const NAV_LINKS = [
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/documentation", label: "Docs" },
  { path: "/agents", label: "Agents" },
  { path: "/philosophy", label: "Philosophy" },
  { path: "/experience", label: "Experience" },
  { path: "/contact", label: "Contact" },
];


export default function Nav() {
  const { profile } = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);


  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || location.pathname !== "/"
            ? "bg-[#0D0D0D]/85 backdrop-blur-md border-b border-[#C9A84C]/10"
            : "bg-transparent"
        }`}
        data-testid="site-nav"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-4 md:py-5 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 group"
            data-testid="nav-brand"
            aria-label={`${profile?.brand || "Ali Moizuddin"} — Home`}
          >
            {profile?.photo && (
              <span className="hidden sm:inline-block w-8 h-8 rounded-full overflow-hidden ring-1 ring-[#C9A84C]/40">
                <img
                  src={profile.photo}
                  alt=""
                  width="32"
                  height="32"
                  decoding="async"
                  aria-hidden="true"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
                />
              </span>
            )}
            <span className="font-serif text-[#C9A84C] text-xl md:text-2xl tracking-[0.18em]">
              {profile?.brand || "ALI MOIZUDDIN"}
            </span>
          </Link>


          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => {
              const active = location.pathname === l.path;
              return (
                <Link
                  key={l.path}
                  to={l.path}
                  data-active={active}
                  data-testid={`nav-link-${l.path.replace("/", "")}`}
                  className="link-underline font-mono text-[11px] uppercase tracking-[0.22em] text-[#888880] hover:text-[#F5F0E8] transition-colors"
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>


          <button
            type="button"
            className="lg:hidden text-[#F5F0E8] p-2"
            aria-label="Open menu"
            data-testid="nav-menu-toggle"
            onClick={() => setOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>


      {open && (
        <div
          className="fixed inset-0 z-[70] bg-[#0D0D0D] flex flex-col"
          data-testid="mobile-menu"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <Link to="/" className="font-serif text-[#C9A84C] text-xl tracking-[0.18em]" onClick={() => setOpen(false)}>
              {profile?.brand || "ALI MOIZUDDIN"}
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-[#F5F0E8] p-2"
              aria-label="Close menu"
              data-testid="mobile-menu-close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center px-8 gap-5 overflow-y-auto">
            {NAV_LINKS.map((l, i) => (
              <button
                key={l.path}
                type="button"
                onClick={() => {
                  setOpen(false);
                  navigate(l.path);
                }}
                data-testid={`mobile-nav-link-${l.path.replace("/", "")}`}
                className="text-left font-serif text-[#F5F0E8] text-4xl sm:text-5xl tracking-tight leading-none hover:text-[#C9A84C] transition-colors"
              >
                <span className="font-mono text-xs text-[#888880] mr-4 align-middle">
                  0{i + 1}
                </span>
                {l.label}
              </button>
            ))}
          </nav>
          <div className="px-8 pb-10">
            <div className="gold-divider mb-6" />
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#888880]">
              {profile?.email}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
