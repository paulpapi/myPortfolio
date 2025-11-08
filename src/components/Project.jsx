const Project = ({ project }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow hover:-translate-y-2 transition border border-transparent hover:border-gray-900">
      <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mb-4 text-white text-xl">
        {project.icon}
      </div>
      <h3 className="text-xl font-extrabold text-gray-900 uppercase tracking-wide mb-2">
        {project.title}
      </h3>
      <p className="text-base text-gray-700 leading-relaxed font-medium mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Project;
