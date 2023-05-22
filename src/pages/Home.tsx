import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div className=" flex flex-col  sm:flex-row items-start sm:items-center justify-between gap-3">
      <section className="flex flex-col gap-1 order-2 sm:order-1 px-5">
        <h1 className="">Namaste, I'm</h1>
        <h1 className="text-3xl font-extrabold">
          <span className="text-primary"> Kritesh</span> Timsina
        </h1>
        <div>
          <Typewriter
            options={{
              strings: ["Web Developer", "Musician(wannabe)"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="flex gap-2 mt-2 text-xl">
          <FaLinkedinIn className="hover:text-[#0077b5] transition-all" />
          <AiFillGithub className="hover:bg-slate-900 transition-all" />
          <AiFillTwitterCircle className="hover:text-[#1DA1F2] transition-all" />
          <AiFillYoutube className="hover:text-[#c4302b] transition-all" />
        </div>
      </section>
      <section className="order-1 sm:order-2">
        <img
          className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] rounded-full hover:shadow-md hover:shadow-primary hover:grayscale-[50%] hover:border-primary hover:border-[2px] transition-all duration-75 "
          src="./src/assets/kritesh.jpg"
          title="Kritesh Timsina"
          alt="Kritesh Timsina"
        />
      </section>
    </div>
  );
};

export default Home;
