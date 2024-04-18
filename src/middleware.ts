import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
     let domain = context.url.hostname;
     let webDomain = 'https://estebanbss.com';
     
  if (domain === webDomain + '/ln' ) {
    return Response.redirect(new URL('https://www.linkedin.com/in/estebanbss/', context.url), 302);
  }

  if(domain === webDomain + '/gh') {
     return Response.redirect(new URL('https://github.com/Estebanbss', context.url), 302);
  }

  if(domain === webDomain + '/git') {
     return Response.redirect(new URL('https://github.com/Estebanbss/website', context.url), 302);
  }     
  
  return next();
});