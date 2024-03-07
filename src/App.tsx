import Header from "./components/Header";
import { useTheme } from "./contexts/ThemeContext";
import Main from "./pages";
import BlogPage from "./pages/Blogs/BlogPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const theme = useTheme();

  return (
    <div className={`${theme.isDarkTheme ? "dark" : "light"}`}>
      <div className="min-h-screen py-5 text-black bg-white dark:bg-background font-jetbrains dark:text-white">
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
