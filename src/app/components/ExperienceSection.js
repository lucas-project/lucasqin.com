'use client';

import { useState } from 'react';

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Scouts Victoria - Mount Waverley, VIC",
      role: "Junior Full Stack Developer Intern",
      duration: "APR 2025 – CURRENT",
      brief: "Driving digital transformation by engineering and maintaining full-stack web applications from concept to deployment.",
      responsibilities: [
        "Ensured robust performance and reliability through meticulous code reviews.",
        "Delivered a seamless user experience through strategic bug fixes and comprehensive testing.",
        "Collaborated with the team to ship new features in an agile environment."
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Jest"],
      icon: "⚜️"
    },
    {
      company: "La Trobe University (Centre of Technology Infusion) - Bundoora, VIC",
      role: "Information Technology Intern",
      duration: "JAN 2025 – APR 2025",
      brief: "Pioneered a safety-critical Android application for the Queensland Department of Transport & Main Roads, processing real-time motorcycle data to deliver life-saving warnings.",
      responsibilities: [
        "Played a key role in hardware integration and real-time data monitoring.",
        "Collaborated with a cross-functional team to ensure project success.",
        "Contributed to the development of life-saving warning systems for motorcyclists."
      ],
      technologies: ["Android", "Java", "Python", "Bluetooth", "Sensor API", "Firebase"],
      icon: "🏍️"
    },
    {
      company: "MarkMyWords - Richmond, VIC",
      role: "Software Development Intern",
      duration: "NOV 2022 – FEB 2023",
      brief: "Revitalized a student performance visualization tool using React.js and Chart.js to create engaging data narratives.",
      responsibilities: [
        "Spearheaded the design and development of a new MERN stack landing page.",
        "Integrated Stripe for payment processing.",
        "Enhanced application performance by optimizing code through collaborative GitHub reviews."
      ],
      technologies: ["React.js", "Chart.js", "MERN", "Stripe API", "Figma", "GitHub"],
      icon: "📊"
    },
    {
      company: "ITConnexion - Hawthorn, VIC",
      role: "Software Development Intern",
      duration: "AUG 2022 – OCT 2022",
      brief: "Transformed client needs into tangible digital solutions, leading user requirement analysis and prototyping in Figma.",
      responsibilities: [
          "Drove the completion of a youth mental health Android app by implementing critical features.",
          "Managed database integration for the application.",
          "Brought the project from concept to 50% completion."
      ],
      technologies: ["Android", "Java", "Figma", "SQL", "Requirements Analysis"],
      icon: "📱"
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState(0); // First item expanded by default

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My journey as a developer, from my early days to my most recent role.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:items-start">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-500 ease-in-out hover:shadow-2xl">
              <button
                onClick={() => handleToggle(index)}
                className="w-full text-left p-6 flex justify-between items-start focus:outline-none"
              >
                <div className="flex items-start">
                  <div className="text-4xl mr-5 mt-1">{exp.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-blue-600 font-semibold">{exp.company}</p>
                    <p className="text-sm text-gray-500 mt-1">{exp.duration}</p>
                  </div>
                </div>
                <span className={`transform transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div className={`px-6 pb-2 transition-all duration-500 ease-in-out ${expandedIndex === index ? 'max-h-[1000px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 leading-relaxed mb-6">{exp.brief}</p>
                    
                    <h4 className="font-bold text-gray-800 mb-3 text-lg">Key Responsibilities</h4>
                    <ul className="space-y-2 list-disc list-inside text-gray-600 mb-6">
                        {exp.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                        ))}
                    </ul>

                    <h4 className="font-bold text-gray-800 mb-3 text-lg">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">{tech}</span>
                      ))}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 