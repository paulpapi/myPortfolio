import { useState, useEffect} from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

const HomePage = () => {

   const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <>
    <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default HomePage