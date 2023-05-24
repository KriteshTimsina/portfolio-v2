import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const theme = useTheme();

  return (
    <header className="p-5 flex justify-around h-20 items-center sticky top-0 z-20  bg-white  dark:bg-background ">
      <a
        onClick={() => window.scrollTo(0, 0)}
        href="#"
        className="scroll-smooth text-2xl text-primary font-dmsans font-bold dark:text-primary cursor-pointer group flex "
      >
        Kritesh
        <span className=" -translate-x-20 opacity-0 text-black dark:text-white group-hover:translate-x-0 group-hover:opacity-100 transition-transform">
          Timsina
        </span>
      </a>
      <nav className="cursor-pointer">
        <DarkModeSwitch
          className="text-primary "
          checked={theme.isDarkTheme}
          onChange={theme.toggleTheme}
        />
      </nav>
    </header>
  );
};

export default Header;
