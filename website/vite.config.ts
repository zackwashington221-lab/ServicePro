// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.NITRO_PRESET === "github-pages";

export default defineConfig({
  // GitHub Pages publishes a pre-rendered SPA. Other deployments retain the
  // TanStack Start server for SSR.
  tanstackStart: isGitHubPages
    ? {
        spa: {
          enabled: true,
          maskPath: "/ServicePro/",
          prerender: { outputPath: "/index.html" },
        },
      }
    : { server: { entry: "server" } },
  vite: {
    base: isGitHubPages ? "/ServicePro/" : "/",
  },
  nitro: isGitHubPages ? false : undefined,
});
