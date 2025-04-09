import { IconType } from "react-icons";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

interface IDetails {
  firstName: string;
  lastName: string;
  roles: string[];
  introduction: string;
  email: string;
  socials: Social[];
}

interface Social {
  href: string;
  icon: IconType;
  color: string;
  title: string;
}

export const details: IDetails = {
  firstName: "Kritesh",
  lastName: "Timsina",
  roles: ["Web/Mobile Application Developer", "Music enthusiast"],
  introduction: `Front-end developer with a knack for crafting clean, user-friendly
          interfaces, optimizing performance, and enhancing user experiences
          across web and mobile applications.`,
  email: "kriteshtimsina55@gmail.com",
  socials: [
    {
      title: "Linkedin",
      href: "https://www.linkedin.com/in/kriteshtimsina/",
      icon: FaLinkedinIn,
      color: "#0077b5",
    },
    {
      title: "Github",
      href: "https://github.com/KriteshTimsina",
      icon: AiFillGithub,
      color: "#364153",
    },
    {
      title: "Youtube",
      href: "https://www.youtube.com/@kritstims",
      icon: AiFillYoutube,
      color: "#c4302b",
    },
  ],
};
