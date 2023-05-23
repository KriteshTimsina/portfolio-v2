import { RxInfoCircled } from "react-icons/rx";
import CallToAction from "../components/CallToAction";
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
        <CallToAction
          href="https://www.youtube.com/@kritstims"
          title="Listen to my music"
        />
      </section>
    </div>
  );
};

export default About;
