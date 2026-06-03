// Lightweight analytics helper — fire-and-forget POSTs to backend.
// Tracks scroll depth (25/50/75/100) and section views via IntersectionObserver.

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = BACKEND_URL ? `${BACKEND_URL}/api` : "";
const ANALYTICS_ENABLED = process.env.REACT_APP_ENABLE_ANALYTICS === "true";
const ANALYTICS_TIMEOUT_MS = 1200;

const isSameOriginApi = () => {
  try {
    if (typeof window === "undefined") return false;
    return new URL(API, window.location.href).origin === window.location.origin;
  } catch {
    return false;
  }
};

const send = (event, payload = {}) => {
  if (!ANALYTICS_ENABLED || !API) return;

  try {
    const body = {
      event,
      payload,
      source: typeof window !== "undefined" ? window.location.href : "",
    };
    // navigator.sendBeacon is more reliable than fetch on tab close.
    if (typeof navigator !== "undefined" && navigator.sendBeacon && isSameOriginApi()) {
      const blob = new Blob([JSON.stringify(body)], { type: "application/json" });
      navigator.sendBeacon(`${API}/analytics/event`, blob);
      return;
    }

    const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
    const timeoutId = controller
      ? window.setTimeout(() => controller.abort(), ANALYTICS_TIMEOUT_MS)
      : null;

    fetch(`${API}/analytics/event`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      keepalive: true,
      credentials: "omit",
      signal: controller?.signal,
    })
      .catch(() => {})
      .finally(() => {
        if (timeoutId) window.clearTimeout(timeoutId);
      });
  } catch {
    // non-blocking
  }
};

let scrollFlags = { 25: false, 50: false, 75: false, 100: false };

const onScroll = () => {
  const doc = document.documentElement;
  const total = doc.scrollHeight - doc.clientHeight;
  if (total <= 0) return;
  const pct = Math.round((doc.scrollTop / total) * 100);
  [25, 50, 75, 100].forEach((m) => {
    if (!scrollFlags[m] && pct >= m) {
      scrollFlags[m] = true;
      send("scroll_depth", { percent: m });
    }
  });
};

let started = false;

export function initAnalytics(sectionIds = []) {
  if (started || typeof window === "undefined") return () => {};
  started = true;

  send("page_view", {
    path: window.location.pathname,
    referrer: document.referrer || "",
    width: window.innerWidth,
  });

  const handler = () => {
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(onScroll);
    } else {
      onScroll();
    }
  };
  window.addEventListener("scroll", handler, { passive: true });

  // Section viewed
  const seen = new Set();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !seen.has(e.target.id)) {
          seen.add(e.target.id);
          send("section_view", { section: e.target.id });
        }
      });
    },
    { threshold: 0.35 }
  );
  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  return () => {
    window.removeEventListener("scroll", handler);
    observer.disconnect();
    started = false;
    scrollFlags = { 25: false, 50: false, 75: false, 100: false };
  };
}

export function track(event, payload = {}) {
  send(event, payload);
}
