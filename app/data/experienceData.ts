import bs from "@/app/public/bs.jpeg";
import { StaticImageData } from "next/image";

export interface Experience {
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  technologies: string[];
  companyLogo?: StaticImageData;
}

export const experienceData: Experience[] = [
  {
    company: "Battery Smart",
    role: "Full Stack Developer Intern",
    location: "Gurgaon, India",
    startDate: "July 2025",
    endDate: "Present",
    description: [
      "Working on real-world projects and gaining hands-on experience",
      "Collaborating with team members on development tasks",
      "Learning and implementing best practices in software development"
    ],
    technologies: ["React", "TypeScript", "Node.js"],
    companyLogo: bs
  }
];

