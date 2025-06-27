'use client';

import { useState } from 'react';

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Scouts Victoria",
      role: "Junior Full Stack Developer Intern",
      duration: "APR 2025 – CURRENT",
      description: "Driving digital transformation by engineering and maintaining full-stack web applications from concept to deployment. I ensure robust performance and reliability through meticulous code reviews, strategic bug fixes, and comprehensive testing, delivering a seamless user experience.",
      icon: "⚜️"
    },
    {
      company: "La Trobe University (Centre of Technology Infusion)",
      role: "Information Technology Intern",
      duration: "JAN 2025 – APR 2025",
      description: "Pioneered a safety-critical Android application for the Queensland Department of Transport & Main Roads, processing real-time motorcycle data to deliver life-saving warnings. Played a key role in hardware integration, data monitoring, and cross-functional team collaboration to ensure project success.",
      icon: "🏍️"
    },
    {
      company: "MarkMyWords",
      role: "Software Development Intern",
      duration: "NOV 2022 – FEB 2023",
      description: "Revitalized a student performance visualization tool using React.js and Chart.js to create engaging data narratives. I spearheaded the design and development of a new MERN stack landing page with Stripe integration and enhanced application performance by optimizing code through collaborative GitHub reviews.",
      icon: "📊"
    },
    {
      company: "ITConnexion",
      role: "Software Development Intern",
      duration: "AUG 2022 – OCT 2022",
      description: "Transformed client needs into tangible digital solutions, leading user requirement analysis and prototyping in Figma. I drove the completion of a youth mental health Android app by implementing critical features and database integration, bringing the project to 50% completion.",
      icon: "📱"
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState(0); // First item expanded by default

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My journey as a developer, from my early days to my most recent role.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden transition-all duration-300 hover:border-blue-500">
              <button
                onClick={() => handleToggle(index)}
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
              >
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{exp.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                </div>
                <span className={`transform transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out ${expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0">
                  <div className="border-t border-gray-700 pt-4">
                    <p className="font-semibold text-gray-300 mb-2">{exp.duration}</p>
                    <p className="text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
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