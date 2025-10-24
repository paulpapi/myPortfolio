import { useLocation } from "react-router-dom";

// src/components/Footer.jsx
const Footer = () => {
  const location=useLocation();
  const currentHash=location.hash;
  const navClassLink=(hash)=>
    currentHash===hash
  ? "hover:text-white mx-2"
  : "hover:text-white mx-2"
  return (
    <footer className="py-6 bg-gray-900 text-gray-400 text-center">
      <p>© {new Date().getFullYear()} Paul. All rights reserved.</p>
      <div className="mt-2">
        <a href="https://github.com/" className="hover:text-white mx-2">GitHub</a>
        <a href="https://linkedin.com/" className="hover:text-white mx-2">LinkedIn</a>
        <a href="#home" className={navClassLink("#home")}>Back to Top</a>
      </div>
    </footer>
  );
};

export default Footer;
