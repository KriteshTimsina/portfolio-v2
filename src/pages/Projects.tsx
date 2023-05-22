import { BsListTask } from "react-icons/bs";
const Projects = () => {
  return (
    <div className="flex flex-col mt-10 gap-6">
      <section className="flex items-center gap-2 text-3xl ">
        <BsListTask className="text-primary" />
        <h1>About</h1>
      </section>
    </div>
  );
};

export default Projects;
