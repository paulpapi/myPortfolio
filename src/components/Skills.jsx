import { FaCuttlefish,FaJava,FaCode,FaNodeJs,FaServer,FaReact,FaDatabase,FaExternalLinkAlt,FaJsSquare,FaPython,FaCube } from "react-icons/fa";
const Skills = () => {
  const divClass =
    "bg-gray-100 rounded-xl p-6 text-center hover:-translate-y-2 transition border border-transparent hover:border-gray-900 shadow-sm";
  const iconClass = "text-3xl text-gray-900 mb-4";

  return (
    <section id="skills" className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl text-center font-extrabold uppercase tracking-wide mb-12">
          Skills
          <span className="block w-12 h-1 bg-gray-900 mx-auto mt-4"></span>
        </h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className={divClass}>
            <FaCuttlefish className={iconClass} />
            <h3 className="text-lg font-bold uppercase tracking-wide">C++</h3>
          </div>
          <div className={divClass}>
            <FaJava className={iconClass} />
            <h3 className="text-lg font-bold uppercase tracking-wide">Java</h3>
          </div>
          <div className={divClass}>
            <FaCode className={iconClass} />
            <h3 className="text-lg font-bold uppercase tracking-wide">OOP</h3>
          </div>
          <div className={divClass}>
            <FaNodeJs className={iconClass} />
            <h3 className="text-lg font-bold uppercase tracking-wide">Node.js</h3>
          </div>
          <div className={divClass}>
            <FaServer className={iconClass} />
            <h3 className="text-lg font-bold uppercase tracking-wide">Express.js</h3>
          </div>
          <div className={divClass}>
            <FaReact className={iconClass} />
            <h3 className="text-lg font-bold uppercase tracking-wide">React</h3>
          </div>
          <div className={divClass}>
            <FaDatabase className={iconClass} />
            <h3 className="text-lg font-bold uppercase tracking-wide">MongoDB</h3>
          </div>
          <div className={divClass}>
            <FaExternalLinkAlt className={iconClass} />
            <h3 className="text-lg font-bold uppercase tracking-wide">Next.js</h3>
          </div>
          <div className={divClass}>
            <FaJsSquare className={iconClass} />
            <h3 className="text-lg font-bold uppercase tracking-wide">JavaScript</h3>
          </div>
          <div className={divClass}>
            <FaPython className={iconClass} />
            <h3 className="text-lg font-bold uppercase tracking-wide">Python</h3>
          </div>
          <div className={divClass}>
            <FaDatabase className={iconClass} />
            <h3 className="text-lg font-bold uppercase tracking-wide">SQL</h3>
          </div>
          <div className={divClass}>
            <FaCube className={iconClass} />
            <h3 className="text-lg font-bold uppercase tracking-wide">OpenGL</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;