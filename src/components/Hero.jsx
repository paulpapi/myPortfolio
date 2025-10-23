export default function Hero() {
  return (
    <section id="home" className="min-h-[70vh] flex items-center bg-blue-900 text-white pt-28">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-accent">Pawlos Addisu</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-4 font-light">
            Computer Science Student & Aspiring Developer
          </h2>
          <p className="mb-6 opacity-90">
            Motivated Computer Science student & developer at Addis Ababa University, seeking software development and web development opportunities.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">View My Work</a>
            <a href="#contact" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors">Get In Touch</a>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="./photo_2025-10-23_16-37-07.jpg" alt="Pawlos Addisu" className="w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-white object-cover shadow-lg" />
        </div>
      </div>
    </section>
  );
}