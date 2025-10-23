const Hero = () => (
  <section
    id="home"
    className="bg-deepblue text-white pt-32 pb-20 transition-colors"
  >
    <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Hi, I'm <span className="text-accent">Pawlos Addisu</span>
        </h1>
        <h2 className="text-lg md:text-xl font-medium mb-4 opacity-90">
          Computer Science Student & Aspiring Developer
        </h2>
        <p className="text-sm md:text-base mb-6 opacity-90 leading-relaxed">
          Motivated Computer Science student & developer at Addis Ababa
          University, seeking software and web development opportunities.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-[#2980b9] transform hover:-translate-y-1 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-block border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#1e3a8a] transform hover:-translate-y-1 transition"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src="/photo_2025-10-23_16-37-07.jpg"
          alt="Pawlos Addisu"
          className="w-64 h-64 rounded-full object-cover border-4 border-white/30 shadow-2xl"
        />
      </div>
    </div>
  </section>
);

export default Hero;
