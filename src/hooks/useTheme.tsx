import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const useTheme = (): {
  isDarkTheme: boolean;
  toggleTheme: VoidFunction;
} => {
  const theme = useContext(ThemeContext);
  if (theme === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return theme;
};
