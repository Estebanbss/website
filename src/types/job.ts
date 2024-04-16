export interface Job {
     jobTitle?: { [key: string]: string };
     company?: string;
     description?: { [key: string]: string };
     startDate?: { [key: string]: string };
     endDate?: { [key: string]: string };
     evidence?: string;
}
