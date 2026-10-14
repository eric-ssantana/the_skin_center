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

- Keep the imported site's language dropdown in its existing HTML/CSS/controller structure and call setLanguage for every selection, so all translated sections stay synchronized.

- Keep Blog posts in the typed multilingual catalog and render them through listing and slug routes, so new articles reuse the same layout without duplicating pages.
- Blog pages reuse the imported header, footer and language controller; language changes emit a browser event to synchronize React article content.
- Never apply scroll-reveal hiding to cards inside a horizontally scrolling carousel, and keep a fallback that reveals anything still hidden while on screen, because sideways-clipped cards can stay invisible forever and leave a section looking empty.
- For technology cards keep the full product photo in `image` and put any tighter crop in an optional `cardImage`, so a card can frame the most recognizable part of a machine while the detail popup still shows it complete.
