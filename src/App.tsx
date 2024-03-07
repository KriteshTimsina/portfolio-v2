import Header from "./components/Header";
import { useTheme } from "./contexts/ThemeContext";
import About from "./pages/About";
import Blogs from "./pages/Blogs/Blogs";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import Skills from "./pages/Skills";

function App() {
  const theme = useTheme();

  return (
    <div className={`${theme.isDarkTheme ? "dark" : "light"}`}>
      <div className="min-h-screen py-5 text-black bg-white dark:bg-background font-jetbrains dark:text-white">
        <Header />
        <div className="w-full px-5 md:px-0 md:w-[797px] mx-auto mt-[50px]">
          <Home />
          <About />
          <Education  />
          <Experience />
          <Skills />
          <ProjectPage />
          <Blogs />
        </div>
      </div>
    </div>
  );
}

export default App;
