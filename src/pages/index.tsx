import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import ProjectPage from "./ProjectPage";
import Blogs from "./Blogs/Blogs";

const Main = () => {
  return (
    <div className="w-full px-5 md:px-0 md:w-[797px] mx-auto mt-[50px]">
      <Home />
      <About />
      <Education />
      <Experience />
      <Skills />
      <ProjectPage />
      <Blogs />
    </div>
  );
};

export default Main;
