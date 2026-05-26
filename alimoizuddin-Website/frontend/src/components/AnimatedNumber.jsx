import React, { useEffect, useRef, useState } from "react";

// Animates a numeric value from 0 → target when the element enters the viewport.
// Preserves any non-numeric characters in the original string (e.g. "1,000+", "40–60%").
export default function AnimatedNumber({ value, duration = 1400, className = "" }) {
  const [display, setDisplay] = useState(value);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            animate();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animate = () => {
    const str = String(value);
    const match = str.match(/[\d,]+/);
    if (!match) {
      setDisplay(str);
      return;
    }
    const numStr = match[0];
    const target = parseInt(numStr.replace(/,/g, ""), 10);
    if (!Number.isFinite(target)) {
      setDisplay(str);
      return;
    }
    const hasComma = numStr.includes(",");
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.floor(target * eased);
      const formatted = hasComma ? current.toLocaleString("en-US") : String(current);
      setDisplay(str.replace(numStr, formatted));
      if (t < 1) requestAnimationFrame(tick);
      else setDisplay(str);
    };
    requestAnimationFrame(tick);
  };

  return (
    <span ref={ref} className={className} data-testid="animated-number">
      {display}
    </span>
  );
}
