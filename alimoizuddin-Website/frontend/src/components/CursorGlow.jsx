import React, { useEffect, useRef, useState } from "react";


// Cursor glow — uses RAF throttling to avoid layout thrashing on every mousemove
export default function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const rafRef = useRef(null);


  useEffect(() => {
    const canShowCursorGlow =
      typeof window !== "undefined" &&
      window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches &&
      !window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (!canShowCursorGlow) return;

    const onMove = (e) => {
      if (rafRef.current) return; // skip if RAF already pending
      rafRef.current = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.left = e.clientX + "px";
          ref.current.style.top = e.clientY + "px";
        }
        setVisible(true);
        rafRef.current = null;
      });
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);


  return (
    <div
      ref={ref}
      className="cursor-glow"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    />
  );
}

