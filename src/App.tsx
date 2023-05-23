import Header from "./components/Header";
import { useTheme } from "./contexts/ThemeContext";
import About from "./pages/About";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  const theme = useTheme();

  return (
    <div className={`${theme.isDarkTheme ? "dark" : "light"}`}>
      <div className=" py-5 bg-white dark:bg-background font-jetbrains text-black dark:text-white min-h-screen">
        <Header />
        <div className="w-full px-5 sm:px-0 sm:w-[797px] mx-auto mt-[50px]">
          <Home />
          <About />
          <Education />
          <Skills />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
