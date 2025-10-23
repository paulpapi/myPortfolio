import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md backdrop-blur-md z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h2 className="text-2xl font-bold text-secondary dark:text-primary">Pawlos Addisu</h2>
        <ul className={`md:flex gap-6 ${open ? "block" : "hidden"} md:block`}>
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">{item}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 border border-primary rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button className="md:hidden flex flex-col gap-1" onClick={() => setOpen(!open)}>
            <span className="block w-6 h-0.5 bg-current"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}