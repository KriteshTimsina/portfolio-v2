import {
  Landing,
  Education,
  Experience,
  Skills,
  About,
  Projects,
  Blogs,
} from "../components/sections";

export default function Main() {
  return (
    <div className="w-full px-5 md:px-0 md:w-[797px] mx-auto mt-[50px]">
      <Landing />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Blogs />
    </div>
  );
}
