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
          topics: [techs[1], techs[3], techs[4], techs[Object.values(techs).length-1], techs[5], techs[6], techs[7]],
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
          topics: [techs[1], techs[3], techs[4], techs[Object.values(techs).length], techs[4], techs[5], techs[6]],
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

     {
          title: "monkey-type-clone",         
          description: {
               en: "🦜 MonkeyType game clone but is a parrot",
               es: "🦜 Clon del juego MonkeyType pero es un loro",
               fr: "🦜 Clone du jeu MonkeyType mais c'est un perroquet",
          },
          url: "https://github.com/Estebanbss/monkey-type-clone",
          web: "https://estebanbss.github.io/monkey-type-clone/",
          topics: [techs[15], techs[16], techs[2]],
          team: ["Estebanbss"],    
     },

]
