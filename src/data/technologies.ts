import type { TechIcons } from "../types/techIcons";

export const techs: { [key: number]: string } = {
     1: "Angular",
     2: "TypeScript",
     3: "Tailwind CSS",
     4: "C#",
     5: "ASP.NET Core",
     6: "SQL Server",
     7: "Firebase",
     8: "Astro",
 };


export const techsIcons: TechIcons = {
    1: { 1: "mdi:angular", 2:"vscode-icons:file-type-angular"  },
    2: { 1: "mdi:language-typescript", 2:"vscode-icons:file-type-typescript-official"},
    3: { 1: "mdi:tailwind", 2:"vscode-icons:file-type-tailwind"},
    4: { 1: "mdi:language-csharp", 2:"vscode-icons:file-type-csharp2"},
    5: { 1: "mdi:dot-net", 2:"mdi:dot-net"},
    6: { 1: "ph:file-sql", 2:"vscode-icons:file-type-sql"},
    7: { 1: "mdi:firebase", 2:"vscode-icons:file-type-firebase"},
    8: { 1: "vscode-icons:file-type-astro", 2:"vscode-icons:file-type-astro"}
};
