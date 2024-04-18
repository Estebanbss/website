import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
     let domain = context.url.href;
     let webDomain = "https://estebanbss.dev";
     let pages = ["/ln", "/gh", "/git", "/cv", "/blog", "/contact"];

     if (domain === webDomain + "/ln") {
          return Response.redirect(
               new URL("https://www.linkedin.com/in/estebanbss/", context.url),
               302
          );
     }

     if (domain === webDomain + "/gh") {
          return Response.redirect(
               new URL("https://github.com/Estebanbss", context.url),
               302
          );
     }

     if (domain === webDomain + "/git") {
          return Response.redirect(
               new URL("https://github.com/Estebanbss/website", context.url),
               302
          );
     }

     if (domain === webDomain + "/en/cv") {
          return Response.redirect(
               new URL(
                    "https://drive.google.com/file/d/1W1c5wMeKC0w7r-W-xoKyuJPySc2guPjy/view?usp=sharing",
                    context.url
               ),
               302
          );
     }

     if (domain === webDomain + "/cv") {
          return Response.redirect(
               new URL(
                    "https://drive.google.com/file/d/1ypkmvNxf4ZNEo4kBh01O38uD539V-2ca/view?usp=sharing",
                    context.url
               ),
               302
          );
     }

     pages.forEach((page) => {
          if (domain !== webDomain + page) {
               return Response.redirect(new URL(webDomain, context.url), 302);
          }
     } );

     return next();
});
