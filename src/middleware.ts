import { defineMiddleware } from "astro/middleware";

const INDEX_PATH = "/";
const DEFAULT_PATH = "/es";

export const onRequest = defineMiddleware((context, next) => {

  if (context.url.pathname === INDEX_PATH) {

    return Response.redirect(new URL(DEFAULT_PATH, context.url), 302);

  }

  return next();
});