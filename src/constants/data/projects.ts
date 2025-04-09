import { images } from "../../assets";

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

export const projects: IProjects = [
  {
    id: 1,
    icon: "📸",
    title: "Photos Cloud",
    description: "Secure cloud storage for your photos.",
    image: images.project1,
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
    image: images.project2,
    url: "https://checked.kriteshtimsina.com.np",
    github: "https://github.com/KriteshTimsina/checked",
    techStacks: ["Reactnative", "Expo"],
    category: "React",
  },
  {
    id: 3,
    title: "SastoBazaar",
    icon: "🛒",
    description: "Fullstack E-commerce website build using node and next.js",
    image: images.project3,
    url: "https://sastobazaar.vercel.app",
    github: "https://github.com/KriteshTimsina/sastobazaar-ecommerce",
    techStacks: ["Next", " Node.js"],
    category: "React",
  },
  {
    id: 4,
    icon: "📒",
    title: "Songwriter's Diary",
    description:
      "Creative 'open-source' platform to capture and organize musical ideas.",
    image: images.project4,
    url: "",
    github: "https://github.com/KriteshTimsina/songwriters-diary",
    techStacks: ["Reactnative"],
    category: "React",
  },

  {
    id: 5,
    title: "Wassup-chat app",
    icon: "💬",
    description:
      "Chat app that allows user to interact with each other in realtime.",
    image: images.project5,
    url: "https://wassupbroo.vercel.app",
    github: "https://github.com/KriteshTimsina/chat-app",
    techStacks: ["Next js"],
    category: "next",
  },
];
