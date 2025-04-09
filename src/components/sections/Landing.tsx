import Typewriter from "typewriter-effect";
import { icons, images } from "../../assets";
import resume from "../../assets/KriteshTimsina-React-Reactnative-developer.pdf";
import { CallToAction, Socials } from "../shared";

export const Landing = () => {
  return (
    <div className="flex flex-col gap-3 justify-between items-start sm:flex-row sm:items-center">
      <section className="flex flex-col order-2 gap-1 px-5 sm:order-1">
        <h1 className="">Namaste, I'm</h1>
        <h1 className="text-3xl font-extrabold">
          <span className="text-primary"> Kritesh</span> Timsina
        </h1>
        <div>
          <Typewriter
            options={{
              strings: [
                "Web/ Mobile Application  Developer",
                "Musician(wannabe)",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <Socials />
        <div className="flex gap-2">
          <CallToAction href={resume} title="Download CV" image={icons.cv} />
          <CallToAction
            href="mailto:kriteshtimsina55@gmail.com"
            title="Say Hello"
            image={icons.email}
          />
        </div>
      </section>
      <section className="order-1 sm:order-2">
        <img
          className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] rounded-full hover:shadow-md hover:shadow-primary hover:grayscale-[50%] border-primary border-[2px] transition-all duration-75 "
          src={images.heroImage}
          title="Kritesh Timsina"
          alt="Kritesh Timsina"
        />
      </section>
    </div>
  );
};
