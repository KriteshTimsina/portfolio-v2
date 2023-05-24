interface IParams {
  href: string;
  title: string;
  icon?: any;
  image?: any;
}

const CallToAction = ({ href, title, image }: IParams) => {
  return (
    <a
      href={href}
      target="_blank"
      className=" mt-2 bg-black w-fit px-2 py-1 text-white rounded-md flex items-center gap-1 hover:bg-transparent hover:border-black hover:border-2 hover:text-black transition-colors duration-300 hover:scale-105 dark:border-white dark:border-2  dark:shadow-yellow-200 dark:shadow-inner dark:text-white "
    >
      <span>{title}</span>
      {image && <img src={image} alt={title} width={20} className="" />}
    </a>
  );
};

export default CallToAction;
