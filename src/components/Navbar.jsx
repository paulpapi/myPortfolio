import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { NavLink, Link, useLocation } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();
  const currentHash = location.hash;

  const navClassLink = (hash) =>
    currentHash === hash
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

          <ul className="nav-menu hidden md:flex items-center gap-8 list-none">
            <li>
              <Link to="/#home" className={navClassLink("#home")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/#about" className={navClassLink("#about")}>
                About
              </Link>
            </li>
            <li>
              <Link to="/#projects" className={navClassLink("#projects")}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/#skills" className={navClassLink("#skills")}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/#contact" className={navClassLink("#contact")}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="nav-controls flex items-center gap-3">
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
