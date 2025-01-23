import { RxInfoCircled } from "react-icons/rx";
import CallToAction from "../components/CallToAction";

const About = () => {
  return (
    <div className="flex flex-col gap-6 mt-10">
      <section className="flex gap-2 items-center text-3xl">
        <RxInfoCircled className="text-primary" />
        <h1>About</h1>
      </section>
      <section className="px-5 text-typography">
        <p className="mb-3 selection:bg-yellow-300">
          Highly motivated computer science enthusiast with a passion for
          problem-solving and software development. With strong analytical
          abilities and a keen eye for detail, I believe in my capability to
          contribute effectively to any team, ensuring success in my career as a
          software developer.
        </p>
      </section>
    </div>
  );
};

export default About;
