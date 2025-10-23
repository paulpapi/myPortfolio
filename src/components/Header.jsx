import { useState } from "react";

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#projects", text: "Projects" },
    { href: "#skills", text: "Skills" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-headerBg dark:bg-darkHeaderBg backdrop-blur z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 flex items-center justify-between py-4">
        <h2 className="text-2xl font-bold text-slate-700 dark:text-primary">
          Pawlos Addisu
        </h2>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-gray-800 dark:text-white font-medium hover:text-primary transition"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition"
          >
            <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-1.5"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-transform ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-transform ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden fixed left-0 top-[70px] w-full bg-headerBg dark:bg-darkHeaderBg backdrop-blur shadow-lg transition-transform">
          <ul className="flex flex-col items-center py-8 gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-lg font-medium text-gray-800 dark:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
