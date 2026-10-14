import { useEffect } from 'react';
const scripts = ['/assets/js/translations.js', '/assets/js/technologies-data.js', '/assets/js/services-data.js', '/assets/js/inline.js', '/assets/js/main.js', '/assets/js/reveal.js?v=3'];
export function useSiteController() {
  useEffect(() => {
    const w = window as unknown as { __tscLoaded?: boolean };
    if (w.__tscLoaded) return;
    w.__tscLoaded = true;
    void (async () => {
      for (const src of scripts) {
        await new Promise<void>((resolve) => {
          const script = document.createElement('script');
          script.src = src; script.async = false; script.setAttribute('data-tsc', '1');
          script.onload = () => resolve(); script.onerror = () => resolve();
          document.body.appendChild(script);
        });
      }
      document.dispatchEvent(new Event('DOMContentLoaded'));
    })();
  }, []);
}
