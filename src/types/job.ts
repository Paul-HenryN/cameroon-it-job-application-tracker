export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  posted: string;
  type: "full-time" | "part-time" | "contract" | "internship";
  skills: string[];
  remote: boolean;
  logo: string;
};
