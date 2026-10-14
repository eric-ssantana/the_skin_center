import { withBase } from "@/lib/base";
import { createFileRoute } from "@tanstack/react-router";
import rawBody from "@/site/body.html?raw";
import { siteLinks, useSiteController } from "@/components/site/site-shell";

const bodyHtml = rawBody
  .replaceAll('href="/blog"', `href="${withBase("/blog")}"`)
  .replaceAll('href="/technology/', `href="${withBase("/technology/")}`);

const DESC =
  "The Skin Center — Physician-Led Medical Spa in Davie, FL. Personalized treatments tailored to your unique facial anatomy, body and wellness goals, in English, Portuguese and Spanish.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Skin Center | Physician-Led Medical Spa in Davie, FL" },
      { name: "description", content: DESC },
      { property: "og:title", content: "The Skin Center | Physician-Led Medical Spa" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      ...siteLinks,
      { rel: "preload", as: "image", href: withBase("/assets/video/hero-poster.jpg") },
    ],
  }),
  component: Index,
});

function Index() {
  useSiteController();
  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
