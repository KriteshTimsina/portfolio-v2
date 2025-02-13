import { MdWorkOutline } from "react-icons/md";
import Timeline from "../components/Timeline";

const Experience = () => {
  return (
    <div className="flex flex-col gap-6 py-10">
      <section className="flex gap-2 items-center text-3xl">
        <MdWorkOutline className="text-teal-400" />
        <h1>Experience</h1>
      </section>
      <section className="flex gap-10 px-5">
        <Timeline size={2} />
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-sm text-typography">November 2023 - Present</h1>
            <div>
              <h1 className="font-semibold">Associate Programmer</h1>
              <p className="text-sm text-typography">
                Mantra IT Solution, Jwagal, Kathmandu
              </p>
            </div>
            <br />
          </div>
          <div>
            <h1 className="text-sm text-typography">
              July 2023 - October 2023
            </h1>
            <div>
              <h1 className="font-semibold">Intern</h1>
              <p className="text-sm text-typography">
                Mantra IT Solution, Jwagal, Kathmandu
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
