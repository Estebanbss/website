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

    // Verificar si la ruta es una ruta de i18n
    const isI18nRoute = domain.startsWith("/en/") || domain.startsWith("/es/") || domain.startsWith("/fr/");

    // Si la ruta es una ruta de i18n, pasar al siguiente middleware
    if (isI18nRoute) {
        return next();
    }

    // Realizar redirección si la ruta está en la lista de redirecciones
    const redirectUrl = redirects[domain] || null;
    if (redirectUrl) {
        return Response.redirect(new URL(redirectUrl, context.url), 302);
    }

    // Permitir que el sistema de enrutamiento maneje la solicitud
    return next();
});
