import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import WithSideBar from "./components/WithSideBar/WithSideBar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
      return;
    }
    document.documentElement.classList.add("light");
    setIsDarkMode(false);
  }, [userTheme, systemTheme]);

  const handleThemeChange = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
      return;
    }

    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setIsDarkMode(true);
  };

  return (
    <div>
      <WithSideBar setIsDarkMode={handleThemeChange} isDarkMode={isDarkMode}>
        <Dashboard />
      </WithSideBar>
    </div>
  );
}

export default App;
