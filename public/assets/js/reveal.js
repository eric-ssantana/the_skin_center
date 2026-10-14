(function () {
  if (window.__tscReveal) return;
  window.__tscReveal = true;
  var css = document.createElement("style");
  css.textContent =
    ".tsc-reveal{opacity:0;transform:translateY(40px);transition:opacity .9s cubic-bezier(.22,.61,.36,1),transform .9s cubic-bezier(.22,.61,.36,1);will-change:opacity,transform}" +
    ".tsc-reveal.tsc-in{opacity:1;transform:none}" +
    "@media (prefers-reduced-motion:reduce){.tsc-reveal{opacity:1;transform:none;transition:none}}";
  document.head.appendChild(css);

  var SEL = [
    "section h1", "section h2", "section h3", "section h4", "section p",
    ".hero-stat-card", ".hero-visual-card", ".about-accent-card", ".about-feature-item",
    ".experience-card", ".ba-card", "section [class*='card']", "section [class*='item']",
    "section img", "section form", "section .btn", "section button", "footer > *"
  ].join(",");

  // Elements living inside a horizontally scrolling track (carousels) are clipped
  // sideways, so the viewport observer may never reach them: never hide those.
  function inHScroller(el) {
    var node = el, hops = 0;
    while (node && node !== document.body && hops < 6) {
      var ox = getComputedStyle(node).overflowX;
      if ((ox === "auto" || ox === "scroll") && node.scrollWidth > node.clientWidth + 1) return true;
      node = node.parentElement;
      hops++;
    }
    return false;
  }

  var io = null;
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("tsc-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  }

  function scan() {
    document.querySelectorAll(SEL).forEach(function (el) {
      if (el.classList.contains("tsc-reveal")) return;
      // skip elements nested inside an already-animated element
      if (el.parentElement && el.parentElement.closest(".tsc-reveal")) return;
      if (el.closest("nav, header, .modal, [role='dialog']")) return;
      // technologies + treatments cards are always visible (rendered by script)
      if (el.closest("#technologies, #services") && el.tagName !== "H2") { el.classList.add("tsc-in"); return; }
      if (!io || inHScroller(el)) { el.classList.add("tsc-in"); return; }
      var sibs = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.transitionDelay = Math.min(sibs, 5) * 0.1 + "s";
      el.classList.add("tsc-reveal");
      io.observe(el);
    });
  }

  // Safety net: anything still hidden while on screen becomes visible.
  function showOnScreen() {
    document.querySelectorAll(".tsc-reveal:not(.tsc-in)").forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("tsc-in");
    });
  }

  scan();
  setTimeout(showOnScreen, 900);
  setTimeout(showOnScreen, 2500);
  window.addEventListener("scroll", function () {
    clearTimeout(window.__tscRevealT);
    window.__tscRevealT = setTimeout(showOnScreen, 200);
  }, { passive: true });

  var t;
  new MutationObserver(function () { clearTimeout(t); t = setTimeout(scan, 100); })
    .observe(document.body, { childList: true, subtree: true });
})();
