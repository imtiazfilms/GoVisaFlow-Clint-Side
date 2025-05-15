import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("nord");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "nord";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "nord" ? "night" : "nord";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="btn btn-sm ml-6 border-white rounded-full bg-white">
      {theme === "nord" ? <img className="h-4 w-4" src="https://i.ibb.co.com/XZbbBDpS/icons8-crescent-moon-50.png" alt="moon" /> : <img className="h-4 w-4" src="https://i.ibb.co/JRR6jc0C/icons8-sun-50.png" alt="sun" /> }
    </button>
  );
};

export default ThemeToggle;
