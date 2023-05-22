import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});
export const useTheme = (): {
  isDarkTheme: boolean;
  toggleTheme: any;
} => useContext(ThemeContext);

function ThemeProvider({ children }: { children: JSX.Element }): JSX.Element {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = (): void => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
