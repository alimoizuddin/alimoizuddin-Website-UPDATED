import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import NoiseOverlay from "../components/NoiseOverlay";
import CursorGlow from "../components/CursorGlow";
import { initAnalytics } from "../lib/analytics";

export default function Layout({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Use native scrolling — CSS scroll-behavior: smooth handles smoothness without
    // hijacking the wheel events that desktop users expect.
    const cleanupAnalytics = initAnalytics([
      "hero", "about", "skills", "projects", "agents", "philosophy", "experience", "contact",
    ]);
    return () => cleanupAnalytics();
  }, []);

  // Scroll to top on route change (unless hash present)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          window.scrollTo({
            top: el.getBoundingClientRect().top + window.scrollY - 24,
            behavior: "smooth",
          });
        }, 80);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return (
    <main className="relative bg-[#0D0D0D] text-[#F5F0E8] min-h-screen">
      <NoiseOverlay />
      <CursorGlow />
      <Nav />
      {children}
      <Footer />
    </main>
  );
}
