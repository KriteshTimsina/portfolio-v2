import Header from "./components/Header";
import { useTheme } from "./contexts/ThemeContext";
import About from "./pages/About";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

function App() {
  const { isDarkTheme } = useTheme();
  return (
    <div className=" py-5 bg-background font-jetbrains  text-white min-h-screen">
      <Header />
      <div className="w-full px-5 sm:px-0 sm:w-[797px] mx-auto mt-[50px]">
        <Home />
        <About />
        <Education />
        <Skills />
      </div>
    </div>
  );
}

export default App;
