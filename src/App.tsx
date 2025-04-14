import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header";
import { Main, NotFound, Blogs, BlogSingle } from "./pages";

function App() {
  const theme = useTheme();

  return (
    <div className={`${theme.isDarkTheme ? "dark" : "light"} `}>
      <div className="py-5 min-h-screen text-black bg-white transition-all ease-linear dark:bg-background font-jetbrains dark:text-white">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogSingle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
