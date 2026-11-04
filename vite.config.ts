// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static GitHub Pages build: on for `vite build`, off for the dev server and for
// Lovable's own publish pipeline (which sets LOVABLE_NITRO_PRESET).
const isBuild = process.argv.includes("build");
const githubPages = isBuild && !process.env.LOVABLE_NITRO_PRESET && process.env.GITHUB_PAGES !== "false";
const BASE = "/solvains1stdemo/";

const STATIC_ROUTES = ["/", "/programmes", "/membership", "/trainers", "/contact"];

export default defineConfig(
  githubPages
    ? {
        nitro: false,
        vite: { base: BASE },
        tanstackStart: {
          server: { entry: "server" },
          router: { basepath: BASE },
          pages: STATIC_ROUTES.map((path) => ({ path: path === "/" ? "/" : BASE.slice(0, -1) + path })),
          prerender: { enabled: true, autoStaticPathsDiscovery: false, crawlLinks: false },
        },
      }
    : {
        tanstackStart: {
          // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
          server: { entry: "server" },
        },
      },
);
