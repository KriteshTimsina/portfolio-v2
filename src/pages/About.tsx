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
        I'm a highly motivated computer science enthusiast with a passion for problem-solving and software development. I quickly adapt to new challenges and opportunities to broaden my skills. With strong analytical abilities and a keen eye for detail, I believe in my capability to contribute effectively to any team, ensuring success in my career as a software developer.
        When I'm not coding, you can find me strumming my guitar and crafting songs—a creative outlet that complements my technical pursuits perfectly. Join me as I explore the fascinating worlds and music!
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
