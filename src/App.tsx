import Header from "./components/Header";
import Main from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { useTheme } from "./hooks/useTheme";

function App() {
  const theme = useTheme();

  return (
    <div className={`${theme.isDarkTheme ? "dark" : "light"} `}>
      <div className="py-5 min-h-screen text-black bg-white transition-all ease-linear dark:bg-background font-jetbrains dark:text-white">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
