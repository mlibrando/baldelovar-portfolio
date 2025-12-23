function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Who I Am</h3>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate developer who loves creating beautiful and functional
              web applications. With expertise in modern technologies, I turn ideas
              into reality through clean code and intuitive design.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python', 'Git'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
