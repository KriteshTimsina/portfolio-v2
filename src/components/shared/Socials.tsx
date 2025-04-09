import { details } from "../../constants/data";

export const Socials = () => {
  return (
    <div className="flex gap-2 mt-2 text-xl cursor-pointer">
      {details.socials.map(({ color, href, icon: Icon, title }) => {
        return (
          <a title={title} href={href} target="_blank">
            <Icon
              className={`transition-all hover:text-[${color}]`}
              size={25}
            />
          </a>
        );
      })}
    </div>
  );
};
