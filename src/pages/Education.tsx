import { BsMortarboard } from "react-icons/bs";
import Timeline from "../components/Timeline";
const Education = () => {
  return (
    <div className="flex flex-col py-10 gap-6">
      <section className="flex items-center gap-2 text-3xl ">
        <BsMortarboard className="text-green-500" />
        <h1>Education</h1>
      </section>
      <section className="px-5 flex gap-10">
        <Timeline />
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-sm text-typography">2016-2018</h1>
            <div>
              <h1 className="font-semibold">Academic Degree</h1>
              <p className="text-sm font-semibold text-typography">
                +2 Science
              </p>
              <p className="text-sm text-typography">Kanchanjunga H.S.E.S</p>
            </div>
          </div>
          <div>
            <h1 className="text-sm text-typography">2018-present</h1>
            <div>
              <h1 className="font-semibold">Bachelor's Degree</h1>
              <p className="text-sm font-semibold text-typography">
                Bachelor in Science in Computer Science and Information
                Technology (B.Sc CSIT)
              </p>
              <p className="text-sm text-typography">Tribhuvan University</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
