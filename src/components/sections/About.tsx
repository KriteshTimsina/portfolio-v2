import { RxInfoCircled } from "react-icons/rx";
import { details } from "../../constants/data";

export const About = () => {
  return (
    <div className="flex flex-col gap-6 mt-10">
      <section className="flex gap-2 items-center text-3xl">
        <RxInfoCircled className="text-primary" />
        <h1>About</h1>
      </section>
      <section className="px-5 text-typography">
        <p className="mb-3 selection:bg-yellow-300">{details.introduction}</p>
      </section>
    </div>
  );
};
