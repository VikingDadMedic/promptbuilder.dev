import {sveltekit} from '@sveltejs/kit/vite';
import {defineConfig} from 'vite';
import {SvelteKitPWA} from '@vite-pwa/sveltekit'

export default defineConfig({
  plugins: [
    sveltekit({      experimental: {
        inspector: true,
      }}),
    SvelteKitPWA(
      {
        strategies: "generateSW",
        devOptions: {
          enabled: true,
        },
        manifest: {
          name: "VS Prompt Customizer",
          short_name: "VS Prompt Customizer",
          description: "VS Prompt Customizer is a free library and builder for ChatGPT prompts.",
          lang: "en",
          display: "standalone",
          start_url: "https://prompts.voyagersocial.ai",
          scope: "/",
          theme_color: "#0e1728",
          background_color: "#0e1728",
          icons: [
            {
              src: "/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png"
            },
            {
              src: "/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png"
            },
          ]
        },
      }
    )
  ]
});
