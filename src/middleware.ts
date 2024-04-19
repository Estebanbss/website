import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
    const domain = context.url.pathname;
    const domainWeb = context.url.origin;

    const redirects = {
        "/ln": "https://linkedin.com/in/estebanbss",
        "/gh": "https://github.com/Estebanbss",
        "/git": "https://github.com/Estebanbss/website",
        "/cv": "https://drive.google.com/file/d/1ypkmvNxf4ZNEo4kBh01O38uD539V-2ca/view",
        "/en/cv": "https://drive.google.com/file/d/1W1c5wMeKC0w7r-W-xoKyuJPySc2guPjy/view"
    };
    interface Redirects {
     "/ln": string;
     "/gh": string;
     "/git": string;
     "/cv": string;
     "/en/cv": string;
 }
    const pages = ["/", "/en", "/es", "/fr"];

    const redirectUrl = redirects[domain as keyof typeof redirects];
    const isExcludedRoute = pages.includes(domain);

    console.log('redirectUrl:', redirectUrl);
    console.log('isExcludedRoute:', isExcludedRoute);

    if (redirectUrl && !isExcludedRoute) {
        console.log("It's a redirect");
        console.log('Redirecting to:', redirectUrl);
        return Response.redirect(redirectUrl, 302);
    }

    if (!redirectUrl && !isExcludedRoute) {
        console.log('Redirecting to:', domainWeb);
        return Response.redirect(domainWeb, 301);
    }

    return next();
});
