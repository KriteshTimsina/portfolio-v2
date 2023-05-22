import { RxInfoCircled } from "react-icons/rx";
const About = () => {
  return (
    <div className="flex flex-col mt-10 gap-6">
      <section className="flex items-center gap-2 text-3xl ">
        <RxInfoCircled className="text-primary" />
        <h1>About</h1>
      </section>
      <section className="px-5 text-typography">
        <p className="mb-3 selection:bg-yellow-300">
          A highly motivated and eager student of B.Sc CSIT 8th semester with a
          passion for learning new technologies.I enjoy developing web
          applications and, in my free time, I like to contribute to open-source
          projects. When I'm not coding or studying, I'm usually playing guitar
          and making music.
        </p>
        <a
          href="https://www.youtube.com/@kritstims"
          target="_blank"
          className=" bg-primary text-white w-fit p-2 rounded-md hover:bg-yellow-300 hover:text-black transition-color duration-300 hover:scale-105"
        >
          Listen to my music
        </a>
      </section>
    </div>
  );
};

export default About;
