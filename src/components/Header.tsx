import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../contexts/ThemeContext";
import logo from "../assets/logo.png";
const Header = () => {
  const theme = useTheme();

  return (
    <header className="sticky top-0 z-20 flex items-center justify-around h-20 p-5 dark:bg-background ">
      <a
        onClick={() => window.scrollTo(0, 0)}
        href="#"
        className="flex gap-1 text-2xl font-bold cursor-pointer scroll-smooth text-primary font-dmsans dark:text-primary "
      >
        <img src={logo} alt="Kritesh Timsina" width={200} />
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
