import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import bodyHtml from "@/site/body.html?raw";

const SCRIPTS = [
  "/assets/js/translations.js",
  "/assets/js/technologies-data.js",
  "/assets/js/services-data.js",
  "/assets/js/inline.js",
  "/assets/js/main.js",
  "/assets/js/reveal.js?v=3",
];

const DESC =
  "Physician-supervised aesthetic medicine and luxury med spa care. Bespoke Botox, fillers, medical radiofrequency, collagen biostimulators, laser and longevity wellness in English, Portuguese, and Spanish.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TSC - The Skin Center | Advanced Medical Aesthetics & Wellness" },
      { name: "description", content: DESC },
      { property: "og:title", content: "TSC - The Skin Center | Advanced Aesthetics & Medical Spa" },
      {
        property: "og:description",
        content: "Physician-supervised aesthetic medicine and clinical dermatology. Where anatomy meets timeless architectural elegance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600&display=swap",
      },
      { rel: "stylesheet", href: "/assets/css/styles.css" },
    ],
  }),
  component: Index,
});

function loadScript(src: string) {
  return new Promise<void>((resolve) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.setAttribute("data-tsc", "1");
    s.onload = () => resolve();
    s.onerror = () => resolve();
    document.body.appendChild(s);
  });
}

function Index() {
  useEffect(() => {
    const w = window as unknown as { __tscLoaded?: boolean };
    if (w.__tscLoaded) return;
    w.__tscLoaded = true;
    (async () => {
      for (const src of SCRIPTS) await loadScript(src);
      document.dispatchEvent(new Event("DOMContentLoaded"));
    })();
  }, []);

  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
