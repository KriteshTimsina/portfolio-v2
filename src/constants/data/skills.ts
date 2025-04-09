import { IconType } from "react-icons";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact, DiJavascript1, DiSass } from "react-icons/di";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { BsGit } from "react-icons/bs";

interface ISkill {
  title: string;
  icon: IconType;
  color: string;
}

export const skills: ISkill[] = [
  { icon: AiFillHtml5, title: "Hypertext Markup Language", color: "#d84b24" },
  { icon: DiCss3, title: "Cascading Style Sheets", color: "#146cad" },
  { icon: DiReact, title: "React - Javascript Library", color: "#61DBFB" },
  { icon: TbBrandReactNative, title: "React Native", color: "#61DBFB" },
  { icon: SiNextdotjs, title: "Next.js - React Framework", color: "#000000" },
  { icon: DiJavascript1, title: "JavaScript", color: "#ead41c" },
  { icon: SiTypescript, title: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, title: "Tailwind CSS Framework", color: "#07B0CE" },
  { icon: FaNode, title: "Node.js", color: "#4AAA4D" },
  { icon: SiMongodb, title: "MongoDB", color: "#4AAA4D" },
  { icon: DiSass, title: "Sass - CSS Preprocessor", color: "#C36291" },
  { icon: BsGit, title: "Git", color: "#E84D31" },
];
