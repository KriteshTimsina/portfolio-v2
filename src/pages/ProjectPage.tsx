import { BsListTask } from "react-icons/bs";
import { projectsData as projects } from "../utils/projectsData";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const ProjectPage = () => {
  return (
    <div className="flex flex-col gap-6 mt-10 ">
      <section className="flex items-center gap-2 text-3xl ">
        <BsListTask className="text-blue-400" />
        <h1>Projects</h1>
      </section>
      <section className="flex flex-wrap justify-center gap-5 px-5 md:justify-start">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="flex flex-col gap-2 w-80 sm:max-w-[350px]  "
            >
              <div className="flex items-center justify-between ">
                <h1 className="text-base font-bold">
                  {project.icon}
                  {project.title}
                </h1>
                <div className="flex gap-1 text-sm text-white ">
                  {project.techStacks.map((tech) => {
                    return (
                      <p className="px-1 rounded-sm bg-red-400/20" key={tech}>
                        {tech}
                      </p>
                    );
                  })}
                </div>
              </div>
              <img
                src={project.image}
                alt={project.title}
                width={350}
                className="w-80 sm:w-[350px] h-[180px]"
              />
              <p className="h-16 text-sm md:text-base text-typography">
                {project.description}
              </p>

              <div className="flex justify-start gap-5 text-sm md:text-base">
                <a
                  className="flex items-center gap-1 p-1 text-black bg-white"
                  href={project.github}
                >
                  <p>Github</p>
                  <AiFillGithub />
                </a>
                <a
                  className="flex items-center gap-1 p-1 text-black bg-white"
                  href={project.url}
                >
                  <p>Live preview</p>
                  <FiExternalLink />
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ProjectPage;
