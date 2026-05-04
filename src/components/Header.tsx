import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../hooks/useTheme";
import { icons } from "../assets";

const Header = () => {
  const theme = useTheme();

  return (
    <header className="sticky top-0 z-20 flex items-center justify-around h-16 px-5 bg-white dark:bg-background">
      <a
        onClick={() => window.scrollTo(0, 0)}
        href="/"
        className="  flex gap-1 text-2xl font-bold cursor-pointer scroll-smooth text-primary font-dmsans dark:text-primary  w-[100px] md:w-[150px]"
      >
        <img src={icons.logo} alt="Kritesh Timsina" width={120} />
      </a>
      <nav className="cursor-pointer">
        <ul className="flex gap-5 text-lg font-semibold text-primary dark:text-primary">
          {/*<li>
            <Link to="https://blogs.kriteshtimsina.com.np">Read my blogs</Link>
          </li>*/}
          <DarkModeSwitch
            className="text-primary"
            checked={theme.isDarkTheme}
            onChange={theme.toggleTheme}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
