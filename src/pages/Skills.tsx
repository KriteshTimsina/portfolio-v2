import { GoLightBulb } from "react-icons/go";
import { DiReact, DiJavascript1, DiCss3, DiSass } from "react-icons/di";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { BsGit } from "react-icons/bs";
import { FaNode } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="flex flex-col gap-6">
      <section className="flex gap-2 items-center text-3xl">
        <GoLightBulb className="text-yellow-500" />
        <h1>Skills</h1>
      </section>
      <section className="flex flex-wrap gap-2 justify-start items-center px-5 cursor-pointer">
        <AiFillHtml5
          title="Hypertext Markup Language"
          size={50}
          className="text-[#d84b24] "
        />
        <DiCss3
          title=" Cascading Style Sheets"
          size={50}
          className="text-[#146cad] "
        />
        <DiReact
          title="React- Javascript Library"
          size={50}
          className="text-blue-400"
        />
        <TbBrandReactNative
          title="Reactnative"
          size={50}
          className="text-blue-400"
        />
        <SiNextdotjs title="Next Js- React framework" size={50} />
        <DiJavascript1
          title="Javascript"
          size={50}
          className="text-[#ead41c] "
        />
        <SiTypescript title="Typescript" size={40} className="text-blue-500" />
        <SiTailwindcss
          title="Tailwind- css framework"
          size={50}
          className="text-[#07B0CE] "
        />
        <FaNode title="Node" size={50} className="text-[#4AAA4D]" />
        <SiMongodb title="Mongo DB" size={50} className="text-[#4AAA4D]" />
        <DiSass
          title="Syntactically Awesome Stylesheet"
          size={50}
          className="text-[#C36291] "
        />
        <BsGit title="Git" size={50} className="text-[#E84D31]" />
      </section>
    </div>
  );
};

export default Skills;
