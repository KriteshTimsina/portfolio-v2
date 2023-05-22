import { BsListTask } from "react-icons/bs";
import { projectsData as projects } from "../utils/projectsData";
const Projects = () => {
  const { title, image, description, techStacks, url } = projects[0];
  console.log(title);

  return (
    <div className="flex flex-col mt-10 gap-6">
      <section className="flex items-center gap-2 text-3xl ">
        <BsListTask className="text-orange-500" />
        <h1>Projects</h1>
      </section>
      <section className="flex gap-5">
        {/* <div>
          <img src={image} alt={title} width={700} />
        </div>
        <div>
          <h1 className="text-xl font-semibold"> {title}</h1>
          <h1 className=""> {description}</h1>
          <div className="flex gap-3 items-center">
            <div>Tech Stacks</div>
            {techStacks.map((tech) => {
              return <button className="bg-red-400 p-1">{tech}</button>;
            })}
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Projects;
