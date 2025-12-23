function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'A full-stack web application built with React and Node.js',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Project Two',
      description: 'An e-commerce platform with payment integration',
      tags: ['TypeScript', 'Next.js', 'Stripe'],
    },
    {
      title: 'Project Three',
      description: 'A mobile-responsive portfolio website',
      tags: ['React', 'Tailwind CSS', 'Vite'],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
