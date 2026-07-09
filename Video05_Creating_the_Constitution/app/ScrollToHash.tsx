"use client";

import { useEffect } from "react";

// Next's built-in Link hash-scroll can race with data-fetching pages and
// silently fail to scroll. This runs after mount, every time, and just
// finds the element itself — reliable regardless of how we got here
// (same-page click, cross-page navigation, or a hard page load).
export default function ScrollToHash() {
  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.getElementById(window.location.hash.slice(1));
    target?.scrollIntoView();
  }, []);

  return null;
}
