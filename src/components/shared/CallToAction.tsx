interface ICta {
  href: string;
  title: string;
  image?: string;
}

export const CallToAction = ({ href, title, image }: ICta) => {
  return (
    <a
      href={href}
      target="_blank"
      className="flex gap-1 items-center px-2 py-1 mt-2 text-white bg-black rounded-md transition-colors duration-300 w-fit hover:bg-transparent hover:border-black hover:border-2 hover:text-black hover:scale-105 dark:border-white dark:border-2 dark:shadow-yellow-200 dark:shadow-inner dark:text-white"
    >
      <span>{title}</span>
      {image && <img src={image} alt={title} width={20} />}
    </a>
  );
};
