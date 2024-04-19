
const REDIRECTS: { [key: string]: string }  = {
     "/ln":"https://www.linkedin.com/in/estebanbss/",
     "/gh":"https://github.com/Estebanbss",
     "/git":"https://github.com/Estebanbss/website",
     "/cv":"https://drive.google.com/file/d/1ypkmvNxf4ZNEo4kBh01O38uD539V-2ca/view",
     "/en/cv":"https://drive.google.com/file/d/1W1c5wMeKC0w7r-W-xoKyuJPySc2guPjy/view"
   };

   export function getRedirectUrlFromUrl(url: URL) {
     console.log(url);
     const pathname = url.pathname.toLowerCase(); // Convertir a minúsculas para evitar problemas de mayúsculas y minúsculas
     const normalizedPathname = pathname.endsWith('/') ? pathname : pathname + '/'; // Asegurarse de que la ruta tenga una barra diagonal al final
 
     if (normalizedPathname in REDIRECTS) {
         return REDIRECTS[normalizedPathname];
     }
 
     // Comparar rutas normalizadas para manejar diferentes formas de escribir la misma ruta
     if (
         normalizedPathname === "/" ||
         normalizedPathname === "/en/" ||
         normalizedPathname === "/es/" ||
         normalizedPathname === "/en/index/" ||
         normalizedPathname === "/es/index/" ||
         normalizedPathname === "/fr/" ||
         normalizedPathname === "/fr/index/"
     ) {
         return '/';
     }
 
     // Si no hay ninguna coincidencia, devolver null o undefined según lo que prefieras
     return null; // O podrías devolver undefined si prefieres
 }
 