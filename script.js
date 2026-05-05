/* The Quality Portal — pitch page
 * Small enhancements: scroll reveals, sticky-nav state,
 * demo placeholder visibility, dynamic year, smooth in-page anchors.
 */
(() => {
  "use strict";

  const prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Year stamp ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ---------- Sticky-nav state ---------- */
  const nav = document.getElementById("nav");
  if (nav) {
    const updateStuck = () => {
      if (window.scrollY > 8) {
        nav.classList.add("is-stuck");
      } else {
        nav.classList.remove("is-stuck");
      }
    };
    updateStuck();
    window.addEventListener("scroll", updateStuck, { passive: true });
  }

  /* ---------- Demo placeholder visibility ----------
   * If the iframe has no src (or empty src), show the
   * "demo coming soon" overlay. Once a src is set, hide it.
   */
  const demoFrame = document.getElementById("demo-frame");
  const demoPlaceholder = document.getElementById("demo-placeholder");
  if (demoFrame && demoPlaceholder) {
    const sync = () => {
      const src = (demoFrame.getAttribute("src") || "").trim();
      const hasSrc = src.length > 0 && src !== "about:blank";
      demoPlaceholder.style.display = hasSrc ? "none" : "flex";
      demoPlaceholder.setAttribute("aria-hidden", hasSrc ? "true" : "false");
      demoFrame.style.visibility = hasSrc ? "visible" : "hidden";
    };
    sync();

    if ("MutationObserver" in window) {
      const mo = new MutationObserver(sync);
      mo.observe(demoFrame, { attributes: true, attributeFilter: ["src"] });
    }
  }

  /* ---------- Scroll reveals ----------
   * Toggle .is-revealed on .reveal and .reveal-stagger when in view.
   */
  const revealEls = document.querySelectorAll(".reveal, .reveal-stagger");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-revealed"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.08,
      }
    );

    revealEls.forEach((el) => io.observe(el));
  }
})();
