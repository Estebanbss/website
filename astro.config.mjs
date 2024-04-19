import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), playformCompress()],
  optimizeCss: {
    link: ({ rel, href }) => {
      // Verifica si el atributo "rel" ya contiene "stylesheet"
      if (rel.includes('stylesheet')) {
        // Añade el atributo "media" con el valor "all"
        return `<link rel="${rel}" href="${href}" media="all" />`;
      }
      // Si no contiene "stylesheet", devuelve el enlace sin modificar
      return `<link rel="${rel}" href="${href}" />`;
    }
  },
});
