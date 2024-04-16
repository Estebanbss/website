import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  i18n: {
     defaultLocale: "es",
     locales: ["es", "en", "fr"],
     routing: "manual"
   }
});