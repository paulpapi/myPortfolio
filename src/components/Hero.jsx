const Hero = () => (
  <section
    id="home"
    className="relative bg-white text-gray-900 pt-32 pb-20 transition-colors overflow-hidden"
  >
    {/* Background world map */}
    <div className="absolute inset-0 z-0 opacity-40">
      <img
        src="/worldmap.jpg"
        alt="World Map Background"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Text Section */}
      <div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 uppercase">
          Hi, I'm{' '}
          <span className="text-gray-700 font-extrabold">Pawlos Addisu</span>
        </h1>
        <h2 className="text-lg md:text-xl font-medium mb-4 text-gray-600">
          Computer Science Student & Aspiring Developer
        </h2>
        <p className="text-sm md:text-base mb-6 text-gray-500 leading-relaxed">
          Motivated Computer Science student & developer at Addis Ababa
          University, seeking software and web development opportunities.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transform hover:-translate-y-1 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-block border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transform hover:-translate-y-1 transition"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Portrait Section */}
      <div className="flex justify-center">
        <img
          src="/photo_2025-10-23_16-37-07.jpg"
          alt="Pawlos Addisu"
          className="w-64 h-64 object-cover rounded-full border-4 border-gray-300 shadow-2xl grayscale"
        />
      </div>
    </div>
  </section>
);

export default Hero;
