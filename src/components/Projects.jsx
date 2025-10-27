import {
  FaLock,
  FaExclamationTriangle,
  FaChartLine,
  FaGlobe,
  FaCube,
} from "react-icons/fa";
import Project from "./Project";

const projects = [
  {
    title: "OS Mutual Exclusion",
    description:
      "Implementation of mutual exclusion in operating systems using C++ with various methods including disabling interrupts, locking variables, strict alteration, semaphores, message passing, and monitors.",
    tech: ["C++", "Operating Systems"],
    icon: <FaLock className="text-white" />,
  },
  {
    title: "OS Ostrich Algorithm",
    description:
      "Implementation of the ostrich algorithm for deadlock handling, which ignores deadlocks and alerts users only when the system freezes, allowing user intervention to kill problematic processes.",
    tech: ["C++", "Algorithms"],
    icon: <FaExclamationTriangle className="text-white" />,
  },
  {
    title: "Dynamic Programming",
    description:
      "Implementation of dynamic programming solutions that store calculated results and reuse them when necessary, optimizing recursive functions by avoiding redundant calculations.",
    tech: ["Algorithms", "Optimization"],
    icon: <FaChartLine className="text-white" />,
  },
  {
    title: "Public Listing Web Application",
    description:
      "A web application for public listings with modern web technologies, featuring user-friendly interface and efficient data management.",
    tech: ["Web Development", "JavaScript"],
    icon: <FaGlobe className="text-white" />,
  },
  {
    title: "Computer Graphics",
    description:
      "Implementation of simple and advanced OpenGL animations using Python and C++, demonstrating 3D graphics programming and animation techniques.",
    tech: ["OpenGL", "Python", "C++"],
    icon: <FaCube className="text-white" />,
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS"],
    icon: <FaGlobe className="text-white" />,
  },
  {
    title: "Task Manager API",
    description: "A RESTful API built with Express.js and MongoDB for managing tasks.",
    tech: ["Express.js", "MongoDB"],
    icon: <FaLock className="text-white" />,
  },
  {
    title: "Job Finder App",
    description: "A job listing platform built with React, Node.js, and MongoDB.",
    tech: ["React", "Node.js", "MongoDB"],
    icon: <FaChartLine className="text-white" />,
  },
];

const Projects = ({isHome=false}) => {
  const projectList=isHome ? projects.slice(0,4) : projects;

  return (
    <section id="projects" className="projects py-8 bg-gray-100 dark:bg-gray-800 transition-colors">
      <div className="container max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="section-title text-3xl md:text-4xl text-center font-extrabold text-slate-700 dark:text-white mb-12 relative inline-block">
          {isHome ? "Projects" : ""}
          <span className="block w-12 h-1 bg-primary mx-auto mt-4"></span>
        </h2>
        <div className="projects-grid grid gap-6 grid-cols-1 md:grid-cols-2">
          {projectList.map((project)=>(
            <Project key={project.title} project={project}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;