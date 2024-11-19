import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../contexts/ThemeContext";
import logo from "../assets/logo.png";
const Header = () => {
  const theme = useTheme();

  return (
    <header className="flex sticky top-0 z-20 justify-around items-center px-5 h-16 bg-white dark:bg-background">
      <a
        onClick={() => window.scrollTo(0, 0)}
        href="/"
        className="  flex gap-1 text-2xl font-bold cursor-pointer scroll-smooth text-primary font-dmsans dark:text-primary  w-[100px] md:w-[150px]"
      >
        <img src={logo} alt="Kritesh Timsina" width={120} />
      </a>
      <nav className="cursor-pointer">
        <DarkModeSwitch
          className="text-primary"
          checked={theme.isDarkTheme}
          onChange={theme.toggleTheme}
        />
      </nav>
    </header>
  );
};

export default Header;
