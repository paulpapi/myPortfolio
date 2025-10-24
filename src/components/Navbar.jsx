import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  const navClassLink = ({isActive}) =>
    isActive
      ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <>
      <header className="fixed top-0 w-full bg-headerBg dark:bg-gray-700 backdrop-blur z-50 shadow-md">
        <nav className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 flex items-center justify-between py-4">
          <div className="nav-brand">
            <NavLink to="/">
              <h2 className="text-2xl font-bold text-slate-700 dark:text-primary text-white">
                Pawlos Addisu
              </h2>
            </NavLink>
          </div>

          <div className="nav-controls flex items-center gap-6">
            <ul className="nav-menu hidden md:flex items-center gap-6 list-none">
              <li>
                <NavLink to="/" className={navClassLink}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className={navClassLink}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={navClassLink}>
                  Contact
                </NavLink>
              </li>
            </ul>

            <button
              onClick={() => setDarkMode((prevState) => !prevState)}
              id="theme-toggle"
              aria-label="Toggle dark mode"
              className="w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <button id="hamburger" className="md:hidden flex flex-col gap-1.5 p-1.5">
              <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white transition-transform"></span>
              <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white transition-opacity"></span>
              <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white transition-transform"></span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
