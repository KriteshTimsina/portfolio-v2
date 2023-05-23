import { AiFillGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const Socials = () => {
  return (
    <div className="flex gap-2 mt-2 text-xl cursor-pointer">
      <a href="https://www.linkedin.com/in/kriteshtimsina/" target="_blank">
        <FaLinkedinIn className="hover:text-[#0077b5] transition-all" />
      </a>
      <a href="https://github.com/KriteshTimsina" target="_blank">
        <AiFillGithub className="hover:text-gray-300 transition-all" />
      </a>
      <a href="https://www.instagram.com/kritstims/" target="_blank">
        <AiFillInstagram className="hover:text-[#D61861] transition-all" />
      </a>
      <a href="https://www.youtube.com/@kritstims" target="_blank">
        <AiFillYoutube className="hover:text-[#c4302b] transition-all" />
      </a>
    </div>
  );
};

export default Socials;
