/**
 * The Skin Center — site controller (home, blog and technology pages).
 * Language (EN/PT/ES), header state, mobile menu, booking modal, technology
 * carousel, treatment tabs, before/after comparison, FAQ, hero video and
 * scroll reveals.
 *
 * Every handler is delegated from `document`, and translations are re-applied
 * whenever new markup appears, because React may re-create the shared
 * header/footer (SiteShell) after this script has run.
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
  var on = function (type, selector, fn) {
    document.addEventListener(type, function (e) {
      var el = e.target && e.target.closest ? e.target.closest(selector) : null;
      if (el) fn(e, el);
    });
  };
  var mo = null;
  var cap = function (s) { return s.charAt(0) + s.slice(1).toLowerCase(); };

  /* ---------------- Language ---------------- */
  function applyTranslations() {
    var lang = window.currentLang, dict = T[lang] || {};
    $$("[data-i18n]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v != null && el.innerHTML !== v) el.innerHTML = v;
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
      var active = b.getAttribute("data-lang") === lang;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", String(active));
    });
    syncDynamic();
    // Our own innerHTML writes are not "new markup": drop them from the observer queue.
    if (mo) mo.takeRecords();
  }
  function setLanguage(lang) {
    if (!T[lang]) return;
    window.currentLang = lang;
    try { localStorage.setItem("tsc_lang", lang); } catch (e) {}
    document.documentElement.lang = lang;
    applyTranslations();
    window.dispatchEvent(new CustomEvent("tsc:language", { detail: lang }));
  }
  window.setLanguage = setLanguage;
  on("click", ".lang-btn[data-lang]", function (e, b) { setLanguage(b.getAttribute("data-lang")); });

  /* ---------------- Header + mobile menu ---------------- */
  function updateHeader() {
    var header = $("[data-site-header]");
    if (!header) return;
    var solid = !document.getElementById("hero") || window.scrollY > 40 || document.body.classList.contains("menu-open");
    header.classList.toggle("is-solid", solid);
  }
  function setMenu(open) {
    var menu = document.getElementById("mobile-menu"), toggle = $(".menu-toggle");
    if (!menu) return;
    menu.hidden = !open;
    if (toggle) toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
    updateHeader();
  }
  window.addEventListener("scroll", updateHeader, { passive: true });
  on("click", ".menu-toggle", function () { var m = document.getElementById("mobile-menu"); setMenu(!!(m && m.hidden)); });
  on("click", "#mobile-menu a, #mobile-menu button", function () { setMenu(false); });

  /* ---------------- Booking modal ---------------- */
  var lastFocus = null;
  function modalParts() {
    var modal = document.getElementById("booking-modal");
    return modal && { modal: modal, card: $(".modal-card", modal), form: $("#tsc-booking-form", modal), thanks: $(".modal-thanks", modal), wrap: $(".modal-form-wrap", modal) };
  }
  function openModal() {
    var p = modalParts(); if (!p) return;
    lastFocus = document.activeElement;
    p.thanks.hidden = true; p.wrap.hidden = false; p.modal.hidden = false;
    document.body.classList.add("modal-open");
    setTimeout(function () { ($("input", p.modal) || p.card).focus(); }, 30);
  }
  function closeModal() {
    var p = modalParts(); if (!p || p.modal.hidden) return;
    p.modal.hidden = true;
    document.body.classList.remove("modal-open");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  on("click", "[data-open-modal]", function (e) { e.preventDefault(); setMenu(false); openModal(); });
  on("click", ".modal-close", closeModal);
  document.addEventListener("click", function (e) { if (e.target && e.target.id === "booking-modal") closeModal(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      var m = document.getElementById("mobile-menu");
      if (m && !m.hidden) { setMenu(false); var t = $(".menu-toggle"); if (t) t.focus(); }
      closeModal();
    }
    var p = modalParts();
    if (e.key !== "Tab" || !p || p.modal.hidden) return;
    var f = $$("button, input, select, a[href]", p.card).filter(function (el) { return !el.closest("[hidden]"); });
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  document.addEventListener("submit", function (e) {
    var form = e.target;
    if (!form || form.id !== "tsc-booking-form") return;
    e.preventDefault();
    var p = modalParts(), data = new FormData(form);
    var msg = tr("waGreeting", "Hello! I would like to book a consultation at The Skin Center.") +
      "\n\n" + data.get("name") + "\n" + data.get("email") + "\n" + data.get("phone") + "\n" + data.get("service");
    window.open("https://wa.me/19549908774?text=" + encodeURIComponent(msg), "_blank", "noopener");
    p.wrap.hidden = true; p.thanks.hidden = false;
    form.reset();
    p.card.focus();
  });

  /* ---------------- Hero video ---------------- */
  var userPaused = reduce;
  function playVideo(v) { v.muted = true; var r = v.play(); if (r && r.catch) r.catch(function () {}); }
  function labelVideo() {
    var v = $(".hero-video"), btn = $(".hero-video-toggle");
    if (!v || !btn) return;
    btn.classList.toggle("is-paused", v.paused);
    btn.setAttribute("aria-pressed", String(v.paused));
    btn.setAttribute("aria-label", v.paused ? tr("videoPlay", "Play background video") : tr("videoPause", "Pause background video"));
  }
  function initVideo() {
    var v = $(".hero-video");
    if (!v || v.__tsc) return;
    v.__tsc = true;
    if (reduce) { v.removeAttribute("autoplay"); v.pause(); } else playVideo(v);
    v.addEventListener("play", labelVideo);
    v.addEventListener("pause", labelVideo);
    labelVideo();
  }
  on("click", ".hero-video-toggle", function () {
    var v = $(".hero-video"); if (!v) return;
    if (v.paused) { userPaused = false; playVideo(v); } else { userPaused = true; v.pause(); }
  });
  document.addEventListener("touchstart", function () { var v = $(".hero-video"); if (v && v.paused && !userPaused) playVideo(v); }, { passive: true });

  /* ---------------- Technology carousel ---------------- */
  on("click", ".tech-arrow", function (e, btn) {
    var track = $(".tech-track"); if (!track) return;
    var card = $(".tech-card", track);
    var step = card ? card.getBoundingClientRect().width + 22 : 362;
    track.scrollBy({ left: btn.classList.contains("tech-prev") ? -step : step, behavior: reduce ? "auto" : "smooth" });
  });

  /* ---------------- Treatment tabs ---------------- */
  function showCategory(i) {
    $$(".svc-tab").forEach(function (b) {
      var active = Number(b.getAttribute("data-cat")) === i;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", String(active));
    });
    $$(".svc-panel").forEach(function (p) { p.hidden = Number(p.getAttribute("data-panel")) !== i; });
  }
  on("click", ".svc-tab", function (e, b) { showCategory(Number(b.getAttribute("data-cat"))); });
  on("click", "[data-cat-link]", function (e, a) {
    var i = Number(a.getAttribute("data-cat-link"));
    if ($(".svc-tab")) showCategory(i);
    else try { sessionStorage.setItem("tsc_cat", String(i)); } catch (err) {}
  });

  /* ---------------- Before / after (one slider per case) ---------------- */
  function syncDynamic() {
    var w = cap(tr("caseWord", "CASE"));
    $$(".ba").forEach(function (ba, i) {
      var n = i + 1, before = $(".ba-before", ba), after = $(".ba-after", ba), range = $(".ba-range", ba);
      if (before) before.alt = cap(tr("before", "Before")) + " — " + w + " " + n;
      if (after) after.alt = cap(tr("after", "After")) + " — " + w + " " + n;
      if (range) range.setAttribute("aria-label", tr("sliderLabel", "Before and after comparison") + " — " + w + " " + n);
    });
    labelVideo();
  }
  document.addEventListener("input", function (e) {
    var r = e.target;
    if (!r || !r.classList || !r.classList.contains("ba-range")) return;
    var ba = r.closest(".ba");
    if (ba) ba.style.setProperty("--pos", r.value + "%");
  });

  /* ---------------- FAQ ---------------- */
  on("click", ".faq-q", function (e, q) {
    var open = q.getAttribute("aria-expanded") !== "true";
    $$(".faq-item").forEach(function (item) {
      var b = $(".faq-q", item), a = $(".faq-a", item), s = $(".faq-sign", item);
      var mine = b === q && open;
      b.setAttribute("aria-expanded", String(mine));
      a.hidden = !mine;
      s.textContent = mine ? "−" : "+";
      item.classList.toggle("is-open", mine);
    });
  });

  /* ---------------- Scroll reveal ---------------- */
  var io = null;
  if (!reduce && "IntersectionObserver" in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("rv-in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    setInterval(function () {
      $$(".rv:not(.rv-in)").forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.bottom > 0 && r.top < window.innerHeight) el.classList.add("rv-in");
      });
    }, 1200);
  }
  var RV = ".section:not(#hero) > *, .g2 > *, .gs > *, .gc > *, .g4 > *, .hero-ctas > *, .tp-section > *";
  function scanReveal() {
    if (!io) return;
    $$(RV).forEach(function (el) {
      if (el.__rv || el.closest("header, .tech-track, .modal, .mobile-menu") || el.matches("img.quote-bg, .quote-shade, .quote-mark")) return;
      el.__rv = true;
      var i = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.transitionDelay = Math.min(i, 4) * 0.1 + "s";
      el.classList.add("rv");
      io.observe(el);
    });
  }

  /* ---------------- Re-sync when markup is (re)created ---------------- */
  function refresh() {
    applyTranslations();
    updateHeader();
    initVideo();
    scanReveal();
    var saved = null;
    try { saved = sessionStorage.getItem("tsc_cat"); if (saved != null && $(".svc-tab")) sessionStorage.removeItem("tsc_cat"); } catch (e) {}
    if (saved != null && $(".svc-tab")) showCategory(Number(saved));
  }
  var pending;
  mo = new MutationObserver(function (records) {
    var relevant = records.some(function (r) {
      return Array.prototype.some.call(r.addedNodes, function (n) { return n.nodeType === 1 && !(n.classList && (n.classList.contains("rv") || n.tagName === "SCRIPT")); });
    });
    if (!relevant) return;
    clearTimeout(pending);
    pending = setTimeout(refresh, 60);
  });
  mo.observe(document.body, { childList: true, subtree: true });

  function init() {
    document.documentElement.lang = window.currentLang;
    refresh();
    if (window.currentLang !== "en") window.dispatchEvent(new CustomEvent("tsc:language", { detail: window.currentLang }));
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
