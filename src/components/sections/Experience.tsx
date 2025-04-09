import { MdWorkOutline } from "react-icons/md";
import { Timeline } from "../shared";
import { experiences } from "../../constants/data";

export const Experience = () => {
  return (
    <div className="flex flex-col gap-6 py-10">
      <section className="flex gap-2 items-center text-3xl">
        <MdWorkOutline className="text-teal-400" />
        <h1>Experience</h1>
      </section>
      <section className="flex gap-10 px-5">
        <Timeline size={experiences.length} />
        <div className="flex flex-col gap-5">
          {experiences.map((experience, index) => {
            return (
              <div key={index}>
                <h1 className="text-sm text-typography">
                  {experience.startDate} - {experience.endDate}
                </h1>
                <div>
                  <h1 className="font-semibold">{experience.designation}</h1>
                  <p className="text-sm text-typography">
                    {experience.company}, {experience.address}
                  </p>
                </div>
                <br />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
