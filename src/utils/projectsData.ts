type IProjects = {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  url: string;
  github: string;
  techStacks: string[];
  category: string;
}[];

export const projectsData: IProjects = [
  {
    id: 1,
    icon: "💐",
    title: "Subhakaarya",
    description:
      "Event management website that allows users to view and book services for the events. Specifically worked on the frontend part of the website.",
    image: "/src/assets/subhakaarya.png",
    url: "https://subhakaarya.com/",
    github: "",
    techStacks: ["React", " Django"],
    category: "React",
  },
  {
    id: 2,
    title: "SastoBazaar",
    icon: "🛒",
    description: "E-commerce website build using react js and tailwind css.",
    image: "",
    url: "https://sastobazaar.netlify.app",
    github: "https://github.com/KriteshTimsina/nestnepal-frontend-NestStore",
    techStacks: ["React", " Tailwind"],
    category: "React",
  },
  {
    id: 3,
    title: "Music World",
    icon: "🎵",
    description:
      "A simple and minimal music app allowing search and view trending albums.",
    image: "",
    url: "https://musicsansar.vercel.app/",
    github: "",
    techStacks: ["Next js"],
    category: "Next",
  },
  {
    id: 4,
    title: "Expense Tracker",
    icon: "📚",
    description: "Expense tracker to track your income and expenses.",
    image: "",
    url: "https://daytodayexpenses.netlify.app",
    github: "https://github.com/KriteshTimsina/expense-tracker",
    techStacks: ["React", "Tailwind"],
    category: "React",
  },
];
