import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
     let domain = context.url.pathname;
     const redirects: { [key: string]: string } = {
          "/ln": "https://www.linkedin.com/in/estebanbss/",
          "/gh": "https://github.com/Estebanbss",
          "/git": "https://github.com/Estebanbss/website",
          "/cv": "https://drive.google.com/file/d/1ypkmvNxf4ZNEo4kBh01O38uD539V-2ca/view?usp=sharing",
          "/en/cv": "https://drive.google.com/file/d/1W1c5wMeKC0w7r-W-xoKyuJPySc2guPjy/view?usp=sharing"
        };
     let pages = ["/ln", "/gh", "/git", "/cv", "/en/cv", "/", "/en", "/es", "/fr"];
     let i = 0;

     const redirectUrl = redirects[domain] || null;

     if (redirectUrl) {
          return Response.redirect(new URL(redirectUrl, context.url), 302);
     }

     pages.forEach((page) => {
          if (domain ===  page || domain === '/') {
               i++;
          }else{
               return;
          }
     });

     if(i > 0){
          return next();
     }else{
          return Response.redirect(
               new URL(context.url.origin, context.url),
               302
          );
     }
});


