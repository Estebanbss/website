import { defineMiddleware } from "astro/middleware";

const INDEX_PATH = "/";
const DEFAULT_PATH = "/es";

export const onRequest = defineMiddleware((context, next) => {
     let domain = context.url.hostname;

  // Verifica si el dominio es localhost
  if (domain === "localhost") {
    // Redirige a la ruta predeterminada si el dominio es localhost
    return Response.redirect(new URL(DEFAULT_PATH, context.url), 302);
  }

  // Redirige a la ruta predeterminada si no es localhost
  return Response.redirect(new URL(DEFAULT_PATH, `https://${domain}`), 302);
});
