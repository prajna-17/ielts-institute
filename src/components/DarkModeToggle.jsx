import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // check local storage for saved preference
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-3 py-1 border rounded-lg text-gray-700 dark:text-gray-300 border-gray-700 dark:border-gray-300"
    >
      {darkMode ? "Light" : "Dark"}
    </button>
  );
};

export default DarkModeToggle;
