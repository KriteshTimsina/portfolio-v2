import sastobazaar from "../assets/sastobazaar.png";
import songwriter from "../assets/songwriter-diary.png";
import chat from "../assets/chat.png";
import photoscloud from "../assets/photoscloud.png";
import checked from "../assets/checked.png";

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
    icon: "📸",
    title: "Photos Cloud",
    description: "Secure cloud storage for your photos.",
    image: photoscloud,
    url: "https://photoscloud.vercel.app",
    github: "https://github.com/KriteshTimsina/photoscloud",
    techStacks: ["Next js, Tailwind"],
    category: "React",
  },
  {
    id: 2,
    icon: "✅",
    title: "Checked",
    description: "Todos and notes. Never miss a thing.",
    image: checked,
    url: "https://checked.kriteshtimsina.com.np",
    github: "https://github.com/KriteshTimsina/checked",
    techStacks: ["Reactnative", "Expo"],
    category: "React",
  },
  {
    id: 3,
    icon: "📒",
    title: "Songwriter's Diary",
    description:
      "Creative 'open-source' platform to capture and organize musical ideas.",
    image: songwriter,
    url: "",
    github: "https://github.com/KriteshTimsina/songwriters-diary",
    techStacks: ["Reactnative"],
    category: "React",
  },
  {
    id: 4,
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
    id: 5,
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
];
