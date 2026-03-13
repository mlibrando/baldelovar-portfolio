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
    <section id="about" className="bg-white rounded-t-[2.5rem] -mt-10 relative z-10">

      {/* About intro */}
      <div className="max-w-6xl mx-auto px-8 pt-16 pb-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Left: icon + label */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-black text-gray-900 leading-tight">
              ABOUT<br />ME
            </h2>
          </div>

          {/* Right: description */}
          <div className="pt-1">
            <p className="text-lg leading-relaxed font-medium max-w-2xl">
              Creative and highly skilled designer with extensive experience in product design, branding,
              multimedia design, and digital marketing. Passionate about creating high-impact designs
              that resonate the target audiences and drive business growth.
            </p>
          </div>
        </div>
      </div>

      {/* Core Philosophy */}
      <div className="max-w-6xl mx-auto px-8 py-4 pb-12">

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

            {/* Left: icon + label */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">⌘</span>
              </div>
              <h2 className="text-3xl font-medium font-black text-gray-900 leading-tight">
                CORE<br />PHILOSOPHY
              </h2>
            </div>

            {/* Right: quote + feature items stacked */}
            <div className="max-w-xl">
              <h3 className="text-4xl md:text-5xl font-black italic leading-tight text-gray-900 mb-10">
                I DON'T JUST DESIGN{' '}
                <span className="text-indigo-500">PRODUCTS</span>
                , I DESIGN THE{' '}
                <span className="text-indigo-500">EXPERIENCE</span>
                {' '}BEHIND THEM.
              </h3>

              <div className="grid grid-cols-2 gap-8">
                {[
                  {
                    title: 'Identity First',
                    desc: "Every brand has a fingerprint. My job is to make it visible in every pixel and every frame.",
                    icon: (
                      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" />
                      </svg>
                    )
                  },
                  {
                    title: 'Strategic Scale',
                    desc: "Whether it's an Amazon, Shopify listing or a local SME prototype, design must solve a business problem first.",
                    icon: (
                      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    )
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <div className="flex items-center gap-2 mb-2">
                      {item.icon}
                      <h4 className="font-bold text-indigo-500 text-sm">{item.title}</h4>
                    </div>
                    <p className="text-black text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
      </div>

      <hr className="border-gray-100 max-w-6xl mx-auto" />

      {/* Experience */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-8">Experience</p>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{job.title}</h4>
                  <p className="text-indigo-600 font-medium">{job.company}</p>
                </div>
                <div className="text-gray-400 text-sm mt-2 md:mt-0 md:text-right">
                  <p>{job.period}</p>
                  <p>{job.location}</p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {job.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start text-gray-500 text-sm">
                    <span className="text-indigo-400 mr-2 mt-0.5">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-100 max-w-6xl mx-auto" />

      {/* Skills */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-8">Skills & Tools</p>
        <div className="space-y-8">
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">Design Software</p>
            <div className="flex flex-wrap gap-2">
              {skills.design.map((skill) => (
                <span
                  key={skill}
                  className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">Areas of Expertise</p>
            <div className="flex flex-wrap gap-2">
              {skills.expertise.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About
