function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-yellow-300">Alyssa C</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Product Designer | Multimedia Designer | Design Consultant
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
