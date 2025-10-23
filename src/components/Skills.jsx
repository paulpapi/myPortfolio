// src/components/Skills.jsx
const skills = [
  "HTML", "CSS", "JavaScript", "React", "Tailwind CSS",
  "Node.js", "Express", "MongoDB", "Git", "Next.js"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-5 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
