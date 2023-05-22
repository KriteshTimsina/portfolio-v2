import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../contexts/ThemeContext";
const Header = () => {
  const theme = useTheme();

  return (
    <header className="flex justify-around h-20 items-center ">
      <h2 className="text-xl text-black dark:text-white ">
        Kritesh <span className="text-primary">Timsina</span>
      </h2>
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
