import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
    const domain = context.url.pathname;
    const domainWeb = 'http://localhost:4321';

    const redirects: { [key: string]: string } = {
        "/ln": "https://linkedin.com/in/estebanbss",
        "/gh": "https://github.com/Estebanbss",
        "/git": "https://github.com/Estebanbss/website",
        "/cv": "https://drive.google.com/file/d/1ypkmvNxf4ZNEo4kBh01O38uD539V-2ca/view",
        "/en/cv": "https://drive.google.com/file/d/1W1c5wMeKC0w7r-W-xoKyuJPySc2guPjy/view"
    };

    const pages: { [key: string]: string } = {
            "/" : "/",
            "/en": "/en/",
            "/es": "/es/",
            "/fr": "/fr/"
      };

    if (pages[domain]){
        return next(); // Permitir el acceso
    } else {
        // Verificar si el path está en redirects
        if (redirects[domain]) {
            // Redireccionar a la URL correspondiente
            return Response.redirect(redirects[domain], 301);
        } else {
            return Response.redirect(domainWeb, 301);
        }
    }
});
