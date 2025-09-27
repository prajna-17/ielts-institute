import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
    if (saved) document.documentElement.classList.add("dark");
  }, []);

  // Update dark mode class and localStorage
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          IELTSPro
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 font-medium text-gray-700 dark:text-gray-200">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-left w-full text-gray-700 dark:text-gray-200"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XMarkIcon className="w-8 h-8 text-gray-700 dark:text-gray-200" />
            ) : (
              <Bars3Icon className="w-8 h-8 text-gray-700 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 flex flex-col gap-4 px-6 py-4 shadow-md">
          <li>
            <Link onClick={() => setMenuOpen(false)} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} to="/courses">
              Courses
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} to="/features">
              Features
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} to="/contact">
              Contact
            </Link>
          </li>

          {/* Dark Mode Toggle*/}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-left w-full text-gray-700 dark:text-gray-200"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
