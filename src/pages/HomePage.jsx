import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import ViewAllProjects from "../components/ViewAllProjects"

const HomePage = () => {
  return (
    <>
    <Hero />
    <About />
    <Skills />
    <Projects isHome={true} />
    <ViewAllProjects />
    <Contact />
    </>
  )
}

export default HomePage