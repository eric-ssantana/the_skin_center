import { withBase } from '@/lib/base';
import { useEffect } from 'react';
const scripts = [withBase('/assets/js/translations.js'), withBase('/assets/js/technologies-data.js'), withBase('/assets/js/services-data.js'), withBase('/assets/js/inline.js'), withBase('/assets/js/main.js'), withBase('/assets/js/reveal.js?v=3')];
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
