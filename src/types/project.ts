interface Description {
     en: string;
     es: string;
     fr: string;
   }

export interface Project {
     title?: string;
     description?: Description;
     web?: string;
     url?: string;
     api?: string;
     topics?: string[];
     team?: string[];
}