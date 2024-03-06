import { MdWorkOutline } from "react-icons/md";
import Timeline from "../components/Timeline";


const Experience = () => {
  return (
    <div className="flex flex-col py-10 gap-6">
      <section className="flex items-center gap-2 text-3xl ">
        <MdWorkOutline className="text-teal-400" />
        <h1>Experience</h1>
      </section>
      <section className="px-5 flex gap-10">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-sm text-typography">May 2023 - Present</h1>
            <div>
              <h1 className="font-semibold">Associate Programmer</h1>
              <p className="text-sm text-typography">Mantra IT Solution, Jwagal, Kathmandu</p>
            </div>
          </div>
         
        </div>
      </section>
    </div>
  )
}

export default Experience