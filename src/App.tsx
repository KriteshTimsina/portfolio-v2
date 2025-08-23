import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header";
import { Main, NotFound } from "./pages";
import GithubButton from "./components/GithubButton";

function App() {
  const theme = useTheme();

  return (
    <div className={`${theme.isDarkTheme ? "dark" : "light"} `}>
      <div className="min-h-screen py-5 text-black transition-all ease-linear bg-white dark:bg-background font-jetbrains dark:text-white">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <GithubButton repo="kriteshtimsina/portfolio-v2" />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
