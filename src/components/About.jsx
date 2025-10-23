export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary dark:text-gray-100 mb-12 relative">
          About Me
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary mt-2 rounded"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-xl font-semibold text-secondary dark:text-gray-200">Objective</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Motivated and detail-oriented third-year Computer Science student at Addis Ababa University, seeking a software development or web development internship. Skilled in modern programming languages and frameworks, with a solid foundation in algorithms, object-oriented programming, and team collaboration.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-secondary dark:text-gray-200 mb-4">Education</h3>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow transition-colors">
                <h4 className="text-secondary dark:text-gray-100 font-semibold mb-2">B.Sc. in Computer Science</h4>
                <p>Addis Ababa University</p>
                <p>GPA: 3.5+</p>
                <p>2023 - 2026</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-secondary dark:text-gray-200 mb-2">Languages</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Amharic (Native)</li>
                <li>English (Fluent)</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow text-center transition-colors">
              <h3 className="text-primary text-3xl font-bold mb-1">3+</h3>
              <p className="text-gray-600 dark:text-gray-300">Years of Study</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow text-center transition-colors">
              <h3 className="text-primary text-3xl font-bold mb-1">8+</h3>
              <p className="text-gray-600 dark:text-gray-300">Programming Languages</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow text-center transition-colors">
              <h3 className="text-primary text-3xl font-bold mb-1">5+</h3>
              <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}