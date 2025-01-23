import { createContext, useState } from "react";

type ThemeContextProps = {
  isDarkTheme: boolean;
  toggleTheme: VoidFunction;
};

export const ThemeContext = createContext<ThemeContextProps | null>(null);

function ThemeProvider({ children }: { children: JSX.Element }): JSX.Element {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("isDarkTheme") === "true"
  );

  const toggleTheme = () => {
    localStorage.setItem("isDarkTheme", String(!isDarkTheme));
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
