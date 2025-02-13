import { RxInfoCircled } from "react-icons/rx";

const About = () => {
  return (
    <div className="flex flex-col gap-6 mt-10">
      <section className="flex gap-2 items-center text-3xl">
        <RxInfoCircled className="text-primary" />
        <h1>About</h1>
      </section>
      <section className="px-5 text-typography">
        <p className="mb-3 selection:bg-yellow-300">
          Front-end developer with a knack for crafting clean, user-friendly
          interfaces, optimizing performance, and enhancing user experiences
          across web and mobile applications.
        </p>
      </section>
    </div>
  );
};

export default About;
