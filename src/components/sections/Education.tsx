import { BsMortarboard } from "react-icons/bs";
import { Timeline } from "../shared";
import { education } from "../../constants/data";

export const Education = () => {
  return (
    <div className="flex flex-col gap-6 py-10">
      <section className="flex gap-2 items-center text-3xl">
        <BsMortarboard className="text-green-500" />
        <h1>Education</h1>
      </section>
      <section className="flex gap-10 px-5">
        <Timeline size={education.length} />
        <div className="flex flex-col gap-5">
          {education.map((item) => {
            return (
              <div key={item.degree}>
                <h1 className="text-sm text-typography">
                  {item.startDate}-{item.endDate}
                </h1>
                <div>
                  <h1 className="font-semibold">{item.degree}</h1>
                  <p className="text-sm text-typography">{item.institution}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
