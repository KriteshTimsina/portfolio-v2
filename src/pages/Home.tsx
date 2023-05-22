import { AiFillGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
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
        <a
          href="/src/assets/resume.pdf"
          target="_blank"
          className=" mt-2 bg-primary w-fit p-1 rounded-md hover:bg-yellow-300 hover:text-black transition-color duration-300"
          download
        >
          Download resume
        </a>
      </section>
      <section className="order-1 sm:order-2">
        <img
          className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] rounded-full hover:shadow-md hover:shadow-primary hover:grayscale-[50%] hover:border-primary hover:border-[2px] transition-all duration-75 "
          src="/src/assets/kritesh.jpg"
          title="Kritesh Timsina"
          alt="Kritesh Timsina"
        />
      </section>
    </div>
  );
};

export default Home;
