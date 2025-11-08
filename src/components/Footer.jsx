import { useLocation } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  const location = useLocation();
  const currentHash = location.hash;

  const navClassLink = (hash) =>
    currentHash === hash
      ? "text-white font-semibold mx-2"
      : "text-gray-300 hover:text-white font-semibold mx-2";

  return (
    <footer className="py-10 bg-gray-900 text-gray-300 text-center">
      <p className="text-sm font-medium">
        © {new Date().getFullYear()} Pawlos Addisu. All rights reserved.
      </p>
      <div className="mt-4 flex justify-center gap-4 text-sm uppercase tracking-wide">
        <a href="https://github.com/" className="hover:text-white font-semibold">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" className="hover:text-white font-semibold">
          <FaLinkedin />
        </a>
        <a href="#home" className={navClassLink("#home")}>
          Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
