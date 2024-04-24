import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import playformCompress from "@playform/compress";
import robotsTxt from "astro-robots-txt";

import criticalCss from "astro-critical-css";

// https://astro.build/config
export default defineConfig({
  site: "https://estebanbss.dev",
  integrations: [tailwind({applyBaseStyles:false}), icon(), playformCompress(), robotsTxt(), criticalCss()]
});