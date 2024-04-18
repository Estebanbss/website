import { defineMiddleware } from "astro/middleware";

const INDEX_PATH = "/";


export const onRequest = defineMiddleware((context, next) => {

  if (context.url.pathname === '/ln') {
    return Response.redirect(new URL('https://www.linkedin.com/in/estebanbss/', context.url), 302);
  }

  if(context.url.pathname === '/gh') {
     return Response.redirect(new URL('https://github.com/Estebanbss', context.url), 302);
  }

  if(context.url.pathname === '/git') {
     return Response.redirect(new URL('https://github.com/Estebanbss/website', context.url), 302);
  }     
  


  return next();
});