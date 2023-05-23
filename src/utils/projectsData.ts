type IProjects = {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  url: string;
  github: string;
  techStacks: string[];
}[];

export const projectsData: IProjects = [
  {
    id: 1,
    icon: "💐",
    title: "Subhakaarya",
    description:
      "Event management website that allows users to view and book services for the events. Specifically worked on the frontend part of the website, utilizing ReactJS and Tailwind CSS.",
    image: "/src/assets/subhakaarya.png",
    url: "https://subhakaarya.com/",
    github: "",
    techStacks: ["React js ●", "Tailwind css ●", "Django"],
  },
  {
    id: 2,
    title: "SastoBazaar",
    icon: "🛒",
    description:
      "E-commerce website build using react js and tailwind css. Added features such as authentication, add to cart, search for products, pagination and so on.",
    image: "",
    url: "https://sastobazaar.netlify.app",
    github: "https://github.com/KriteshTimsina/nestnepal-frontend-NestStore",
    techStacks: ["React js ●", "Tailwind css ●", "Typescript"],
  },
  {
    id: 3,
    title: "Resumee",
    icon: "📖",
    description:
      "Resume builder where user can fill up the from, select from list of resume and generate the resume as per their requirements. ",
    image: "",
    url: "www.resumee.netlify.com",
    github: "",
    techStacks: ["React js ●", "Tailwind css ●", "Typescript"],
  },
];
