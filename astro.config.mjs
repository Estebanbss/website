import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site:"https://estebanbss.dev",
  integrations: [tailwind(), icon(), playformCompress()],
});
