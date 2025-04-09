import { GoLightBulb } from "react-icons/go";
import { skills } from "../../constants/data";

export const Skills = () => {
  return (
    <div className="flex flex-col gap-6">
      <section className="flex gap-2 items-center text-3xl">
        <GoLightBulb className="text-yellow-500" />
        <h1>Skills</h1>
      </section>
      <section className="flex flex-wrap gap-2 justify-start items-center px-5 cursor-pointer">
        {skills.map(({ icon: Icon, color, title }) => {
          return <Icon key={title} color={color} title={title} size={50} />;
        })}
      </section>
    </div>
  );
};
