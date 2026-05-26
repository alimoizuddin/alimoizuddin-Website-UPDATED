import React, { useEffect, useState } from "react";

// Slim gold progress bar that fills as you scroll a long page.
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const pct = total > 0 ? (doc.scrollTop / total) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, pct)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[80] pointer-events-none bg-transparent"
      aria-hidden="true"
      data-testid="reading-progress"
    >
      <div
        className="h-full bg-gradient-to-r from-[#C9A84C] via-[#F5F0E8] to-[#C9A84C] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
