import { BsListTask } from "react-icons/bs";
import { projectsData as projects } from "../utils/projectsData";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const ProjectPage = () => {
  return (
    <div className="flex flex-col gap-6 mt-10">
      <section className="flex gap-2 items-center text-3xl">
        <BsListTask className="text-blue-400" />
        <h1>Projects</h1>
      </section>
      <section className="flex flex-wrap gap-10 justify-center px-5 md:justify-start">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="flex flex-col gap-2 w-80 sm:max-w-[350px]  "
            >
              <div className="flex justify-between items-center">
                <h1 className="text-base font-bold">
                  {project.icon}
                  {project.title}
                </h1>
                <div className="flex gap-1 text-sm text-white">
                  {project.techStacks.map((tech) => {
                    return (
                      <p
                        className="px-1 text-black rounded-sm bg-red-400/20 dark:text-white"
                        key={tech}
                      >
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

              <div className="flex gap-5 justify-start text-sm md:text-base">
                {project.github ? (
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex gap-1 items-center p-1 text-white bg-black rounded dark:bg-white dark:text-black"
                    href={project.github}
                  >
                    <p>Github</p>
                    <AiFillGithub />
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="flex gap-1 items-center p-1 text-black bg-gray-400 rounded brightness-75 focus:outline-none"
                  >
                    <p>Github</p>
                    <AiFillGithub />
                  </button>
                )}
                {project.url && (
                  <a
                    target="_blank"
                    className="flex gap-1 items-center p-1 text-white bg-black rounded dark:bg-white dark:text-black"
                    href={project.url}
                  >
                    <p>Live preview</p>
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ProjectPage;
