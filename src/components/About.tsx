function About() {
  const experience = [
    {
      title: 'Multimedia Designer',
      company: 'Picture Hang Solutions',
      period: 'March 2023 - Present',
      location: 'Cebu City, Philippines',
      highlights: [
        'Create high-quality digital assets for branding, marketing campaigns, and e-commerce platforms',
        'Design and execute video shoots from concept to post-production',
        'Lead product photography and video content creation for online channels'
      ]
    },
    {
      title: 'Product Designer',
      company: 'Department of Trade and Industry Cebu',
      period: 'August 2017 - December 2022',
      location: 'Cebu City, Philippines',
      highlights: [
        'Led product design initiatives for local manufacturers and SMEs',
        'Developed branding materials including logos, packaging designs, and promotional collateral',
        'Organized design workshops and training sessions for local entrepreneurs'
      ]
    }
  ]

  const skills = {
    design: ['Adobe Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'Premiere Pro', 'Figma', 'Canva'],
    expertise: ['Branding & Identity', 'Graphic Design', 'Video Production', 'Product Photography', 'E-Commerce Design', 'Motion Graphics']
  }

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Creative and highly skilled designer with extensive experience in product design, branding,
            multimedia design, and digital marketing. Passionate about creating high-impact designs that
            resonate with target audiences and drive business growth.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-gray-900">Experience</h3>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{job.title}</h4>
                    <p className="text-lg text-purple-600 font-semibold">{job.company}</p>
                  </div>
                  <div className="text-gray-500 mt-2 md:mt-0 text-right">
                    <p className="font-medium">{job.period}</p>
                    <p className="text-sm">{job.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <span className="text-purple-500 mr-2 mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-8 text-gray-900">Skills & Tools</h3>
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Design Software</h4>
              <div className="flex flex-wrap gap-3">
                {skills.design.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-200 hover:to-pink-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {skills.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
