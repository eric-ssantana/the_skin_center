<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- The site is ported from the Claude Design project "The Skin Center.dc.html": the home markup lives in `src/site/body.html`, styles in `public/assets/css/site.css`, copy in `public/assets/js/translations.js` (EN/PT/ES) and behaviour in `public/assets/js/site.js`.
- Switch languages only through the `.lang-btn[data-lang]` pills, which call `setLanguage`; it updates every `data-i18n`, `data-i18n-aria` and `data-i18n-ph` element and emits `tsc:language` so React pages (blog, technology) follow along.
- Blog and technology pages reuse the home header, footer and booking modal through `SiteShell` (`src/components/site/site-shell.tsx`), which slices `body.html` at the HEADER, HERO and LUXURY FOOTER comment markers, so keep those markers.
- Technology detail pages are `/technology/$slug`, rendered from `src/data/technologies.ts`; keep the home carousel cards linking to the same slugs.
- Keep Blog posts in the typed multilingual catalog (`src/data/blog.ts`) and render them through the listing and slug routes.
- Never apply scroll-reveal hiding to cards inside the horizontally scrolling technology track, and keep the fallback that reveals anything still hidden while on screen.
- Keep the hero video's pause button and respect prefers-reduced-motion for autoplaying or looping motion.
