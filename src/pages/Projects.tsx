import { BsListTask } from "react-icons/bs";
import { projectsData as projects } from "../utils/projectsData";
import CallToAction from "../components/CallToAction";
import sourcecode from "../assets/sourcecode.png";
const Projects = () => {
  return (
    <div className="flex flex-col mt-10 gap-6">
      <section className="flex items-center gap-2 text-3xl ">
        <BsListTask className="text-blue-400" />
        <h1>Projects</h1>
      </section>
      <section className="px-5 flex flex-col gap-5">
        {projects.map((project) => {
          return (
            <div key={project.id}>
              <h1 className="text-xl font-bold">
                {project.icon}
                {project.title}
              </h1>
              <div className="flex text-typography font-bold">
                {project.techStacks.map((tech) => {
                  return (
                    <p className="mr-2" key={tech}>
                      {tech}
                    </p>
                  );
                })}
              </div>
              <p className="text-typography">{project.description}</p>
              <div className="flex gap-3">
                {project.github && (
                  <CallToAction
                    title="Source Code"
                    href={project.github}
                    image={sourcecode}
                  />
                )}
                <CallToAction title="Visit Site🔗" href={project.url} />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Projects;
