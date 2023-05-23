import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import Socials from "../components/Socials";

const Contact = () => {
  return (
    <div className="flex flex-col mt-10 gap-6">
      <section className="flex items-center gap-2 text-3xl ">
        <FaPhoneAlt className="text-cyan-400" />
        <h1>Contact</h1>
      </section>
      <div className="px-5 flex justify-start items-start  gap-20">
        <div className="flex flex-col items-">
          <div className="flex">
            <ImLocation size={30} />
            <h2 className="text-xl font-bold">Address</h2>
          </div>
          <p className="text-typography">Mechinagar-14</p>
          <p className="text-typography">Jhapa, Nepal</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
{
  /* <div className="flex items-start gap-2">
  <div className="flex flex-col">
    <div>
      <FaPhoneAlt size={30} />
      <h2 className="text-xl font-bold">Contact</h2>
    </div>
    <a className="text-typography" href="mailto:kriteshtimsina55@gmail.com">
      kriteshtimsina55@gmail.com
    </a>
    <Socials />
  </div>
</div>; */
}
