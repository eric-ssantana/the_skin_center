import { withBase } from '@/lib/base';
import rawBody from '@/site/body.html?raw';
import { useEffect, type ReactNode } from 'react';

// Shared header + footer (and booking modal) sliced from the home markup, so
// blog and technology pages reuse exactly the same chrome and controller.
const bodyHtml = rawBody.replaceAll('href="/blog"', `href="${withBase('/blog')}"`);
const headerStart = bodyHtml.indexOf('<!-- ================= MASTER HEADER');
const header = bodyHtml.slice(headerStart, bodyHtml.indexOf('<!-- ================= HERO'));
const footer = bodyHtml.slice(bodyHtml.indexOf('<!-- ================= LUXURY FOOTER'));
const rebase = (html: string) => html
  .replaceAll('src="assets/', `src="${withBase('/assets/')}`)
  .replaceAll('href="#', `href="${withBase('/')}#`);
export const shellHeader = rebase(header).replace('class="site-header"', 'class="site-header is-solid"');
export const shellFooter = rebase(footer);

export const siteScripts = [withBase('/assets/js/translations.js?v=3'), withBase('/assets/js/site.js?v=3')];
export const siteLinks = [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' as const },
  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Newsreader:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap' },
  { rel: 'stylesheet', href: withBase('/assets/css/site.css?v=2') },
];

export function useSiteController() {
  useEffect(() => {
    const w = window as unknown as { __tscLoaded?: boolean };
    if (w.__tscLoaded) return;
    w.__tscLoaded = true;
    void (async () => {
      for (const src of siteScripts) {
        await new Promise<void>((resolve) => {
          const script = document.createElement('script');
          script.src = src; script.async = false; script.setAttribute('data-tsc', '1');
          script.onload = () => resolve(); script.onerror = () => resolve();
          document.body.appendChild(script);
        });
      }
    })();
  }, []);
}

export function SiteShell({ children }: { children: ReactNode }) {
  useSiteController();
  return <>
    <div dangerouslySetInnerHTML={{ __html: shellHeader }} />
    {children}
    <div dangerouslySetInnerHTML={{ __html: shellFooter }} />
  </>;
}
