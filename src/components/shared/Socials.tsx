import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export const Socials = () => {
  return (
    <div className="flex gap-2 mt-2 text-xl cursor-pointer">
      <a href="https://www.linkedin.com/in/kriteshtimsina/" target="_blank">
        <FaLinkedinIn
          className="hover:text-[#0077b5] transition-all"
          size={25}
        />
      </a>
      <a href="https://github.com/KriteshTimsina" target="_blank">
        <AiFillGithub
          className="transition-all hover:text-gray-600"
          size={25}
        />
      </a>
      <a href="https://www.youtube.com/@kritstims" target="_blank">
        <AiFillYoutube
          className="hover:text-[#c4302b] transition-all"
          size={25}
        />
      </a>
    </div>
  );
};
