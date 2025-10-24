import { FaCuttlefish,FaJava,FaCode,FaNodeJs,FaServer,FaReact,FaDatabase,FaExternalLinkAlt,FaJsSquare,FaPython,FaCube } from "react-icons/fa";
const Skills = () => {
  const divClass =
    "lskill-item bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center hover:-translate-y-2 transition border border-transparent hover:border-primary shadow-sm";
  const iconClass = "text-3xl text-primary mb-4";

  return (
    <section id="skills" className="skills py-10 bg-white dark:bg-gray-900 transition-colors">
      <div className="container max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="section-title text-3xl md:text-4xl text-center font-extrabold text-slate-700 dark:text-white mb-12 relative inline-block">
          Skills
          <span className="block w-12 h-1 bg-primary mx-auto mt-4"></span>
        </h2>

        <div className="skills-grid grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className={divClass}>
            <FaCuttlefish className={iconClass} />
            <h3 className="text-lg font-semibold text-slate-700 dark:text-white">C++</h3>
          </div>
          <div className={divClass}>
            <FaJava className={iconClass} />
            <h3 className="text-lg font-semibold text-slate-700 dark:text-white">Java</h3>
          </div>
          <div className={divClass}>
            <FaCode className={iconClass} />
            <h3 className="text-lg font-semibold text-slate-700 dark:text-white">OOP</h3>
          </div>
          <div className={divClass}>
            <FaNodeJs className={iconClass} />
            <h3 className="text-lg font-semibold text-slate-700 dark:text-white">Node.js</h3>
          </div>
          <div className={divClass}>
            <FaServer className={iconClass} />
            <h3 className="text-lg font-semibold text-slate-700 dark:text-white">Express.js</h3>
          </div>
          <div className={divClass}>
            <FaReact className={iconClass} />
            <h3 className="text-lg font-semibold text-slate-700 dark:text-white">React</h3>
          </div>
          <div className={divClass}>
            <FaDatabase className={iconClass} />
            <h3 className="text-lg font-semibold text-slate-700 dark:text-white">MongoDB</h3>
          </div>
          <div className={divClass}>
            <FaExternalLinkAlt className={iconClass} />
            <h3 className="text-lg font-semibold text-slate-700 dark:text-white">Next.js</h3>
          </div>
          <div className={divClass}>
            <FaJsSquare className={iconClass} />
            <h3 className="text-lg font-semibold text-slate-700 dark:text-white">JavaScript</h3>
          </div>
          <div className={divClass}>
            <FaPython className={iconClass} />
            <h3 className="text-lg font-semibold text-slate-700 dark:text-white">Python</h3>
          </div>
          <div className={divClass}>
            <FaDatabase className={iconClass} />
            <h3 className="text-lg font-semibold text-slate-700 dark:text-white">SQL</h3>
          </div>
          <div className={divClass}>
            <FaCube className={iconClass} />
            <h3 className="text-lg font-semibold text-slate-700 dark:text-white">OpenGL</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;