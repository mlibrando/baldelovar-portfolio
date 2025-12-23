function Projects() {
  const projects = [
    {
      title: 'E-Commerce Brand Assets',
      category: 'Branding & Digital Design',
      description: 'Complete digital asset creation for Amazon and Shopify platforms, including product photography, A+ content, and marketing materials.',
      tags: ['Photoshop', 'Product Photography', 'E-Commerce'],
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      title: 'Product Launch Campaign',
      category: 'Multimedia Design',
      description: 'End-to-end video production and social media assets for new product launches, driving engagement across digital channels.',
      tags: ['Video Editing', 'After Effects', 'Social Media'],
      gradient: 'from-blue-400 to-purple-400'
    },
    {
      title: 'SME Brand Development',
      category: 'Product & Brand Design',
      description: 'Comprehensive branding projects for local manufacturers including logo design, packaging, and promotional materials.',
      tags: ['Illustrator', 'Packaging Design', 'Brand Identity'],
      gradient: 'from-pink-400 to-orange-400'
    },
    {
      title: 'Newsletter Templates',
      category: 'Digital Marketing',
      description: 'Designed cohesive newsletter templates and email campaigns using Klaviyo, maintaining brand consistency across touchpoints.',
      tags: ['Figma', 'Email Design', 'Klaviyo'],
      gradient: 'from-teal-400 to-blue-400'
    },
    {
      title: 'Motion Graphics & GIFs',
      category: 'Animation',
      description: 'Created engaging motion graphics and animated assets for digital marketing campaigns and social media platforms.',
      tags: ['After Effects', 'Motion Design', 'Animation'],
      gradient: 'from-violet-400 to-purple-400'
    },
    {
      title: 'Trade Event Materials',
      category: 'Print & Digital',
      description: 'Developed promotional materials and digital content for trade events and expos, ensuring high-quality branding across all mediums.',
      tags: ['InDesign', 'Print Design', 'Event Marketing'],
      gradient: 'from-amber-400 to-red-400'
    }
  ]

  return (
    <section id="work" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Featured Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of projects showcasing expertise in branding, multimedia design, and digital marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20">
                    {index + 1}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-600 font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.behance.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
          >
            <span>View Full Portfolio on Behance</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
