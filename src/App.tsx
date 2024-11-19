import Header from "./components/Header";
import { useTheme } from "./contexts/ThemeContext";
import Main from "./pages";
import BlogPage from "./pages/Blogs/BlogPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const theme = useTheme();

  return (
    <div className={`${theme.isDarkTheme ? "dark" : "light"} `}>
      <div className="py-5 min-h-screen text-black bg-white transition-all ease-linear dark:bg-background font-jetbrains dark:text-white">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/blog/:slug" element={<BlogPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
