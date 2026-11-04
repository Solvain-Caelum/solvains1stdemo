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

- Production `vite build` outputs a static GitHub Pages site in `dist/client` under base `/solvains1stdemo/` (nitro off, all public routes prerendered); keep new public routes in STATIC_ROUTES in vite.config.ts. Why: hosting is static GitHub Pages, no server runtime.
