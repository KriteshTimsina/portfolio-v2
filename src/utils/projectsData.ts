import musicsansar from "../assets/musicworld.png";
import expensetracker from "../assets/expensetracker.jpg";
import passwordgenerator from "../assets/passwordgenerator.png";
import sastobazaar from "../assets/sastobazaar.png";
import subhakaarya from "../assets/subhakaarya.jpg";
import chat from "../assets/chat.png";

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
      "Event management website that allows users to view and book services for the events.",
    image: subhakaarya,
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
    image: sastobazaar,
    url: "https://sastobazaar.netlify.app",
    github: "https://github.com/KriteshTimsina/nestnepal-frontend-NestStore",
    techStacks: ["React", " Tailwind"],
    category: "React",
  },
  {
    id: 3,
    title: "Wassup-chat app",
    icon: "💬",
    description:
      "Chat app that allows user to interact with each other in realtime.",
    image: chat,
    url: "https://wassupbroo.vercel.app",
    github: "https://github.com/KriteshTimsina/chat-app",
    techStacks: ["Next js"],
    category: "next",
  },

  {
    id: 3,
    title: "Music World",
    icon: "🎵",
    description:
      "A simple and minimal music app allowing search and view trending albums.",
    image: musicsansar,
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
    image: expensetracker,
    url: "https://daytodayexpenses.netlify.app",
    github: "https://github.com/KriteshTimsina/expense-tracker",
    techStacks: ["React", "Tailwind"],
    category: "React",
  },
];
