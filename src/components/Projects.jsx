// src/components/Projects.jsx
const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS.",
    link: "#"
  },
  {
    title: "Task Manager API",
    description: "A RESTful API built with Express.js and MongoDB for managing tasks.",
    link: "#"
  },
  {
    title: "Job Finder App",
    description: "A job listing platform built with React, Node.js, and MongoDB.",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
