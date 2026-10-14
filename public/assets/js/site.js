/**
 * The Skin Center — site controller (home, blog and technology pages).
 * Language (EN/PT/ES), header state, mobile menu, booking modal, technology
 * carousel, treatment tabs, before/after comparison, FAQ, hero video and
 * scroll reveals. Works on any page that includes the shared header/footer.
 */
(function () {
  if (window.__tscSite) return;
  window.__tscSite = true;

  var LANGS = ["en", "pt", "es"];
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var T = window.translations || {};
  var stored = null;
  try { stored = localStorage.getItem("tsc_lang"); } catch (e) {}
  window.currentLang = LANGS.indexOf(stored) > -1 ? stored : "en";
  var tr = function (key, fallback) { var l = T[window.currentLang] || {}; return l[key] != null ? l[key] : fallback; };
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* ---------------- Language ---------------- */
  function setLanguage(lang) {
    if (!T[lang]) return;
    window.currentLang = lang;
    try { localStorage.setItem("tsc_lang", lang); } catch (e) {}
    document.documentElement.lang = lang;
    var dict = T[lang];
    $$("[data-i18n]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v != null) el.innerHTML = v;
    });
    $$("[data-i18n-aria]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n-aria")];
      if (v != null) el.setAttribute("aria-label", v);
    });
    $$("[data-i18n-ph]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n-ph")];
      if (v != null) el.setAttribute("placeholder", v);
    });
    $$(".lang-btn").forEach(function (b) {
      var on = b.getAttribute("data-lang") === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    window.dispatchEvent(new CustomEvent("tsc:language", { detail: lang }));
  }
  window.setLanguage = setLanguage;

  function initLanguage() {
    $$(".lang-btn").forEach(function (b) {
      b.addEventListener("click", function () { setLanguage(b.getAttribute("data-lang")); });
    });
    setLanguage(window.currentLang);
  }

  /* ---------------- Header + mobile menu ---------------- */
  function initHeader() {
    var header = $("[data-site-header]");
    if (!header) return;
    var hero = document.getElementById("hero");
    var update = function () {
      var solid = !hero || window.scrollY > 40 || document.body.classList.contains("menu-open");
      header.classList.toggle("is-solid", solid);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });

    var toggle = $(".menu-toggle", header);
    var menu = document.getElementById("mobile-menu");
    if (!toggle || !menu) return;
    var setOpen = function (open) {
      menu.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("menu-open", open);
      update();
    };
    toggle.addEventListener("click", function () { setOpen(menu.hidden); });
    $$("a, button", menu).forEach(function (el) { el.addEventListener("click", function () { setOpen(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !menu.hidden) { setOpen(false); toggle.focus(); } });
  }

  /* ---------------- Booking modal ---------------- */
  function initModal() {
    var modal = document.getElementById("booking-modal");
    if (!modal) return;
    var card = $(".modal-card", modal);
    var form = $("#tsc-booking-form", modal);
    var thanks = $(".modal-thanks", modal);
    var formWrap = $(".modal-form-wrap", modal);
    var lastFocus = null;

    function open() {
      lastFocus = document.activeElement;
      thanks.hidden = true; formWrap.hidden = false;
      modal.hidden = false;
      document.body.classList.add("modal-open");
      var first = $("input", modal);
      setTimeout(function () { (first || card).focus(); }, 30);
    }
    function close() {
      modal.hidden = true;
      document.body.classList.remove("modal-open");
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    document.addEventListener("click", function (e) {
      var trigger = e.target.closest && e.target.closest("[data-open-modal]");
      if (trigger) { e.preventDefault(); open(); }
    });
    $(".modal-close", modal).addEventListener("click", close);
    modal.addEventListener("click", function (e) { if (e.target === modal) close(); });
    document.addEventListener("keydown", function (e) {
      if (modal.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "Tab") {
        var f = $$("button, input, select, a[href]", card).filter(function (el) { return !el.closest("[hidden]"); });
        if (!f.length) return;
        var a = f[0], z = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
        else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
      }
    });
    if (form) form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var msg = tr("waGreeting", "Hello! I would like to book a consultation at The Skin Center.") +
        "\n\n" + data.get("name") + "\n" + data.get("email") + "\n" + data.get("phone") + "\n" + data.get("service");
      window.open("https://wa.me/19549908774?text=" + encodeURIComponent(msg), "_blank", "noopener");
      formWrap.hidden = true; thanks.hidden = false;
      form.reset();
      card.focus();
    });
  }

  /* ---------------- Hero video ---------------- */
  function initVideo() {
    var video = $(".hero-video");
    var btn = $(".hero-video-toggle");
    if (!video) return;
    var userPaused = reduce;
    var play = function () { video.muted = true; var p = video.play(); if (p && p.catch) p.catch(function () {}); };
    var label = function () {
      if (!btn) return;
      btn.classList.toggle("is-paused", video.paused);
      btn.setAttribute("aria-pressed", String(video.paused));
      btn.setAttribute("aria-label", video.paused ? tr("videoPlay", "Play background video") : tr("videoPause", "Pause background video"));
    };
    if (reduce) { video.removeAttribute("autoplay"); video.pause(); } else play();
    video.addEventListener("play", label);
    video.addEventListener("pause", label);
    window.addEventListener("tsc:language", label);
    if (btn) btn.addEventListener("click", function () {
      if (video.paused) { userPaused = false; play(); } else { userPaused = true; video.pause(); }
    });
    // Some mobile browsers only start muted autoplay after a first gesture.
    var kick = function () { if (!userPaused && video.paused) play(); document.removeEventListener("touchstart", kick); };
    document.addEventListener("touchstart", kick, { passive: true });
    label();
  }

  /* ---------------- Technology carousel ---------------- */
  function initTech() {
    var track = $(".tech-track");
    if (!track) return;
    var step = function () { var c = $(".tech-card", track); return c ? c.getBoundingClientRect().width + 22 : 362; };
    var prev = $(".tech-prev"), next = $(".tech-next");
    if (prev) prev.addEventListener("click", function () { track.scrollBy({ left: -step(), behavior: reduce ? "auto" : "smooth" }); });
    if (next) next.addEventListener("click", function () { track.scrollBy({ left: step(), behavior: reduce ? "auto" : "smooth" }); });
  }

  /* ---------------- Treatment tabs ---------------- */
  function showCategory(i) {
    $$(".svc-tab").forEach(function (b) {
      var on = Number(b.getAttribute("data-cat")) === i;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    $$(".svc-panel").forEach(function (p) { p.hidden = Number(p.getAttribute("data-panel")) !== i; });
  }
  function initServices() {
    $$(".svc-tab").forEach(function (b) {
      b.addEventListener("click", function () { showCategory(Number(b.getAttribute("data-cat"))); });
    });
    $$("[data-cat-link]").forEach(function (a) {
      a.addEventListener("click", function () {
        var i = Number(a.getAttribute("data-cat-link"));
        if ($(".svc-tab")) showCategory(i);
        try { sessionStorage.setItem("tsc_cat", String(i)); } catch (e) {}
      });
    });
    var saved = null;
    try { saved = sessionStorage.getItem("tsc_cat"); sessionStorage.removeItem("tsc_cat"); } catch (e) {}
    if (saved != null && $(".svc-tab")) showCategory(Number(saved));
  }

  /* ---------------- Before / after ---------------- */
  function initResults() {
    var ba = $(".ba");
    if (!ba) return;
    var range = $(".ba-range", ba);
    var before = $(".ba-before", ba), after = $(".ba-after", ba);
    var num = $(".ba-num");
    var current = 1;
    var setPos = function (v) { range.value = v; ba.style.setProperty("--pos", v + "%"); };
    var setAlt = function () {
      var cap = function (s) { return s.charAt(0) + s.slice(1).toLowerCase(); };
      var w = cap(tr("caseWord", "CASE"));
      before.alt = cap(tr("before", "Before")) + " — " + w + " " + current;
      after.alt = cap(tr("after", "After")) + " — " + w + " " + current;
      $$(".ba-thumb").forEach(function (b) { b.setAttribute("aria-label", w + " " + b.getAttribute("data-case")); });
    };
    range.addEventListener("input", function () { setPos(range.value); });
    $$(".ba-thumb").forEach(function (b) {
      b.addEventListener("click", function () {
        current = Number(b.getAttribute("data-case"));
        $$(".ba-thumb").forEach(function (o) {
          var on = o === b;
          o.classList.toggle("is-active", on);
          o.setAttribute("aria-pressed", String(on));
        });
        before.src = "assets/images/results/case" + current + "-before.jpg";
        after.src = "assets/images/results/case" + current + "-after.jpg";
        if (num) num.textContent = (current < 10 ? "0" : "") + current;
        setPos(50); setAlt();
      });
    });
    window.addEventListener("tsc:language", setAlt);
    setAlt();
  }

  /* ---------------- FAQ ---------------- */
  function initFaq() {
    var items = $$(".faq-item");
    items.forEach(function (item) {
      var q = $(".faq-q", item), a = $(".faq-a", item), sign = $(".faq-sign", item);
      q.addEventListener("click", function () {
        var open = q.getAttribute("aria-expanded") !== "true";
        items.forEach(function (o) {
          $(".faq-q", o).setAttribute("aria-expanded", "false");
          $(".faq-a", o).hidden = true;
          $(".faq-sign", o).textContent = "+";
          o.classList.remove("is-open");
        });
        if (open) { q.setAttribute("aria-expanded", "true"); a.hidden = false; sign.textContent = "−"; item.classList.add("is-open"); }
      });
    });
  }

  /* ---------------- Scroll reveal ---------------- */
  function initReveal() {
    if (reduce || !("IntersectionObserver" in window)) return;
    var SEL = ".section:not(#hero) > *, .g2 > *, .gs > *, .gc > *, .g4 > *, .hero-ctas > *, .tp-section > *";
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("rv-in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    var reg = function (el) {
      if (el.__rv || el.closest("header, .tech-track, .modal, .mobile-menu") || el.matches("img.quote-bg, .quote-shade, .quote-mark")) return;
      el.__rv = true;
      var i = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.transitionDelay = Math.min(i, 4) * 0.1 + "s";
      el.classList.add("rv");
      io.observe(el);
    };
    var scan = function () { $$(SEL).forEach(reg); };
    scan();
    var t;
    new MutationObserver(function () { clearTimeout(t); t = setTimeout(scan, 80); }).observe(document.body, { childList: true, subtree: true });
    // Safety net: never leave something hidden while it is on screen.
    setInterval(function () {
      $$(".rv:not(.rv-in)").forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.bottom > 0 && r.top < window.innerHeight) el.classList.add("rv-in");
      });
    }, 1200);
  }

  function init() {
    if (window.__tscSiteInit) return;
    window.__tscSiteInit = true;
    initLanguage();
    initHeader();
    initModal();
    initVideo();
    initTech();
    initServices();
    initResults();
    initFaq();
    initReveal();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
