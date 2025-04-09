import { BsMortarboard } from "react-icons/bs";
import Timeline from "../Timeline";

export const Education = () => {
  return (
    <div className="flex flex-col gap-6 py-10">
      <section className="flex gap-2 items-center text-3xl">
        <BsMortarboard className="text-green-500" />
        <h1>Education</h1>
      </section>
      <section className="flex gap-10 px-5">
        <Timeline size={2} />
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-sm text-typography">2018-2022</h1>
            <div>
              <h1 className="font-semibold">Bachelor's Degree</h1>
              <p className="text-sm font-semibold text-typography">
                Bachelor in Science in Computer Science and Information
                Technology (B.Sc. CSIT)
              </p>
              <p className="text-sm text-typography">
                Mechi Multiple Campus{"(TU)"}
              </p>
            </div>
          </div>
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
        </div>
      </section>
    </div>
  );
};
