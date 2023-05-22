import { GoLightBulb } from "react-icons/go";
import {
  DiReact,
  DiJavascript1,
  DiCss3,
  DiSass,
  DiGithubBadge,
} from "react-icons/di";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { BsGit } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="flex flex-col  gap-6">
      <section className="flex items-center gap-2 text-3xl ">
        <GoLightBulb className="text-yellow-500" />
        <h1>Skills</h1>
      </section>
      <section className="px-5 items-center justify-start flex flex-wrap cursor-pointer gap-1  ">
        <AiFillHtml5 size={50} className="text-[#d84b24] " />
        <DiCss3 size={50} className="text-[#146cad] " />
        <DiReact size={50} className="text-blue-400 " />
        <DiJavascript1 size={50} className="text-[#ead41c] " />
        <SiTypescript size={40} className="text-blue-500 " />
        <SiTailwindcss size={50} className="text-[#07B0CE] " />
        <DiSass size={50} className="text-[#C36291] " />
        <BsGit size={50} className="text-[#E84D31]" />
        <DiGithubBadge size={60} />
      </section>
    </div>
  );
};

export default Skills;
