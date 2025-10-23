export default function Projects() {
  const projects = [
    {
      icon: "fas fa-lock",
      title: "OS Mutual Exclusion",
      desc: "Implementation of mutual exclusion in operating systems using C++ with various methods including disabling interrupts, locking variables, strict alteration, semaphores, message passing, and monitors.",
      tech: ["C++", "Operating Systems"],
    },
    {
      icon: "fas fa-exclamation-triangle",
      title: "OS Ostrich Algorithm",
      desc: "Implementation of the ostrich algorithm for deadlock handling, which ignores deadlocks and alerts users only when the system freezes, allowing user intervention to kill problematic processes.",
      tech: ["C++", "Algorithms"],
    },
    {
      icon: "fas fa-chart-line",
      title: "Dynamic Programming",
      desc: "Implementation of dynamic programming solutions that store calculated results and reuse them when necessary, optimizing recursive functions by avoiding redundant calculations.",
      tech: ["Algorithms", "Optimization"],
    },
    {
      icon: "fas fa-globe",
      title: "Public Listing Web Application",
      desc: "A web application for public listings with modern web technologies, featuring user-friendly interface and efficient data management.",
      tech: ["Web Development", "JavaScript"],
    },
    {
      icon: "fas fa-cube",
      title: "Computer Graphics",
      desc: "Implementation of simple and advanced OpenGL animations using Python and C++, demonstrating 3D graphics programming and animation techniques.",
      tech: ["OpenGL", "Python", "C++"],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary dark:text-gray-100 mb-12 relative">
          Projects
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary mt-2 rounded"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div key={proj.title} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow transition-transform transform hover:-translate-y-2 hover:shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-full text-white mb-4">
                <i className={proj.icon}></i>
              </div>
              <h3 className="text-secondary dark:text-gray-100 font-semibold text-xl mb-2">{proj.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((tech) => (
                  <span key={tech} className="bg-primary text-white px-2 py-1 rounded-full text-sm">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}