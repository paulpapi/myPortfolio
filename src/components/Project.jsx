
const Project = ({project}) => {
  return (
    <>
            <div
              className="project-card bg-white dark:bg-gray-700 rounded-xl p-6 shadow hover:-translate-y-2 transition"
            >
              <div className="project-icon w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                {project.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-700 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="project-tech flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
    </>
  )
}

export default Project