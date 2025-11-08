import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const navClassLink = ({ isActive }) =>
    isActive
      ? "text-white bg-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 font-bold uppercase tracking-wide transition"
      : "text-gray-900 hover:bg-gray-900 hover:text-white rounded-md px-4 py-2 font-bold uppercase tracking-wide transition";

  return (
    <header className="fixed top-0 w-full bg-white z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between py-4">
        {/* Brand with image */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/Paul.jpg"
            alt="Pawlos Addisu"
            className="w-10 h-10 object-cover rounded-full border border-gray-300 shadow"
          />
          <span className="text-xl font-extrabold text-gray-900 uppercase tracking-wide">
            Paul
          </span>
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6 list-none">
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

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
            className="w-10 h-10 rounded-full border-2 border-gray-900 text-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Hamburger */}
          <button className="md:hidden flex flex-col gap-1.5 p-1.5">
            <span className="block w-6 h-0.5 bg-gray-900 transition-transform"></span>
            <span className="block w-6 h-0.5 bg-gray-900 transition-opacity"></span>
            <span className="block w-6 h-0.5 bg-gray-900 transition-transform"></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
