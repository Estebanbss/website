import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
     let domain = context.url.pathname;
     
     let pages = ["/ln", "/gh", "/git", "/cv", "/blog", "/contact"];
     let i = 0;

     if (domain ===  "/ln") {
          return Response.redirect(
               new URL("https://www.linkedin.com/in/estebanbss/", context.url),
               302
          );
     }

     if (domain ===  "/gh") {
          return Response.redirect(
               new URL("https://github.com/Estebanbss", context.url),
               302
          );
     }

     if (domain ===  "/git") {
          return Response.redirect(
               new URL("https://github.com/Estebanbss/website", context.url),
               302
          );
     }

     if (domain ===  "/en/cv") {
          return Response.redirect(
               new URL(
                    "https://drive.google.com/file/d/1W1c5wMeKC0w7r-W-xoKyuJPySc2guPjy/view?usp=sharing",
                    context.url
               ),
               302
          );
     }

     if (domain ===  "/cv") {
          return Response.redirect(
               new URL(
                    "https://drive.google.com/file/d/1ypkmvNxf4ZNEo4kBh01O38uD539V-2ca/view?usp=sharing",
                    context.url
               ),
               302
          );
     }

     pages.forEach((page) => {
          if (domain ===  page || domain === '/') {
               i++;
          }else{
               return;
          }
     });

     if(i === pages.length){
          return next();
     }else{
          return Response.redirect(
               new URL(context.url.origin, context.url),
               302
          );
     }

     return next();
});
