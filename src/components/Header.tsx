import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const theme = useTheme();

  return (
    <header className="p-5 flex justify-around h-20 items-center ">
      <h2 className="text-2xl text-primary font-dmsans font-bold dark:text-white cursor-pointer group flex ">
        Kritesh
        <span className=" -translate-x-20 opacity-0 text-black group-hover:translate-x-0 group-hover:opacity-100 transition-transform">
          Timsina
        </span>
      </h2>
      <nav className="cursor-pointer">
        <DarkModeSwitch
          className="text-primary animate-pulse"
          checked={theme.isDarkTheme}
          onChange={theme.toggleTheme}
        />
      </nav>
    </header>
  );
};

export default Header;
