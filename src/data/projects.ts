import type { Project } from "../types/project";
import { techs } from "./technologies";

export const projects: Project[] = [

     {
          title: "mini-trello",
          description: {
               en: "📝 A minimal Trello clone in a practical way",
               es: "📝 Un clon minimalista de Trello de forma práctica",
               fr: "📝 Un clone minimaliste de Trello de manière pratique"
           },
          url: "https://github.com/Estebanbss/mini-trello",
          web: "https://estebanbss.github.io/mini-trello",
          api: "https://github.com/Estebanbss/trello-clone-api",
          topics: [techs[1], techs[3], techs[4], techs[11], techs[5], techs[6], techs[7]],
          team: ["Estebanbss"],
     },

     {
          title: "paroot-url",
          description: {
               en: "🔗An URL shortener and QR Code generator",
               es: "🔗Un acortador de URL y generador de códigos QR",
               fr: "🔗Un raccourcisseur d'URL et un générateur de codes QR",
          },
          url: "https://github.com/Estebanbss/paroot-url",
          web: "https://estebanbss.github.io/paroot-url/",
          api: "https://github.com/Estebanbss/paroot-api",
          topics: [techs[1], techs[3], techs[4], techs[12], techs[4], techs[5], techs[6]],
          team: ["Estebanbss"],
     },

     {
          title: "web-palhuila",
          description: {
               en: "☀️ Tourism website of the department of Huila, Colombia",
               es: "☀️ Sitio web turístico del departamento del Huila, Colombia",
               fr: "☀️ Site touristique du département de Huila, Colombia",
          },
          url: "https://github.com/Estebanbss/web-palhuila",
          web: "https://www.palhuila.com/",
          topics: [techs[1], techs[3], techs[4], techs[9]],
          team: ["Estebanbss","Sanvargas02"],
     },

     {
          title: "landing-palhuila",
          description: {
               en: "🌄 Landing page of the department of Huila, Colombia",
               es: "🌄 Página de aterrizaje del departamento del Huila, Colombia",
               fr: "🌄 Page d'atterrissage du département de Huila, Colombia",

          },
          url: "https://github.com/Estebanbss/landing-palhuila",
          web:"https://estebanbss.github.io/landing-palhuila/",
          topics: [techs[10],techs[3],techs[4]],
          team: ["Estebanbss"],
     },

]
