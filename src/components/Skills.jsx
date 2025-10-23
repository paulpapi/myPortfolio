export default function Skills() {
  const skills = [
    { icon: "fab fa-cuttlefish", name: "C++" },
    { icon: "fab fa-java", name: "Java" },
    { icon: "fas fa-code", name: "OOP" },
    { icon: "fab fa-html5", name: "HTML & CSS" },
    { icon: "fab fa-js-square", name: "JavaScript" },
    { icon: "fab fa-python", name: "Python" },
    { icon: "fas fa-database", name: "SQL" },
    { icon: "fas fa-cube", name: "OpenGL" },
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary dark:text-gray-100 mb-12 relative">
          Skills
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary mt-2 rounded"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center transition-transform transform hover:-translate-y-2 hover:shadow-lg"
            >
              <i className={`${skill.icon} text-primary text-4xl mb-2`}></i>
              <h3 className="text-secondary dark:text-gray-100 font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}