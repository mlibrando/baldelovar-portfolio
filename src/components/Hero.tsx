function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col">
      {/* Navbar */}
      <div className="flex justify-center pt-8 px-4">
        <nav className="bg-[#121212] rounded-full px-8 py-4 flex items-center gap-10 text-sm font-medium">
          <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>
          <span className="text-gray-600">•</span>
          <a href="#about" className="hover:text-gray-300 transition-colors">About Me</a>
          <span className="text-gray-600">•</span>
          <a href="#experience" className="hover:text-gray-300 transition-colors">Experience</a>
          <span className="text-gray-600">•</span>
          <a href="#work" className="hover:text-gray-300 transition-colors">Projects</a>
          <span className="text-gray-600">•</span>
          <a href="#skills" className="hover:text-gray-300 transition-colors">Skills</a>
          <span className="text-gray-600">•</span>
          <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
        </nav>
      </div>

      {/* Hero content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pb-20">
        {/* Location badge */}
        <div className="mb-10 border border-gray-700 rounded-full px-5 py-2 flex items-center gap-2 text-xs font-bold tracking-widest text-white">
          <span className="w-2 h-2 rounded-full bg-[#A9B1FF] flex-shrink-0"></span>
          <p className="text-[#A9B1FF]">BASED IN CEBU, PHILIPPINES</p>
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-8xl lg:text-[6.5rem] font-black italic leading-none mb-6 tracking-tight">
          HEY, I'M ALYSSA.
        </h1>

        {/* Roles */}
        <p className="text-base md:text-lg text-gray-400 mb-6 font-semibold font-light tracking-wide">
          Product Designer | Multimedia Designer | E-Commerce Designer
        </p>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-400 mb-12 max-w-lg leading-relaxed">
          Bridging the gap between{' '}
          <em className="text-white italic">aesthetic beauty</em>{' '}
          and{' '}
          <em className="text-white italic">functional clarity</em>
          <br />
          for global brands and local icons.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#work"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-full font-semibold transition-colors"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
