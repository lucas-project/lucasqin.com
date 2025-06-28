'use client';

import { useState } from 'react';

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Scouts Victoria",
      location: "Mount Waverley, VIC",
      role: "Junior Full Stack Developer Intern",
      duration: "APR 2025 – CURRENT",
      description: "Driving digital transformation by engineering and maintaining full-stack web applications from concept to deployment. I ensure robust performance and reliability through meticulous code reviews, strategic bug fixes, and comprehensive testing, delivering a seamless user experience.",
      logo: "/logos/scoutsVictoria.png"
    },
    {
      company: "La Trobe University",
      location: "Bundoora, VIC",
      role: "Information Technology Intern",
      duration: "JAN 2025 – APR 2025",
      description: "Pioneered a safety-critical Android application for the Queensland Department of Transport & Main Roads, processing real-time motorcycle data to deliver life-saving warnings. Played a key role in hardware integration, data monitoring, and cross-functional team collaboration to ensure project success.",
      logo: "/logos/LaTrobe.png"
    },
    {
      company: "MarkMyWords",
      location: "Richmond, VIC",
      role: "Software Development Intern",
      duration: "NOV 2022 – FEB 2023",
      description: "Revitalized a student performance visualization tool using React.js and Chart.js to create engaging data narratives. I spearheaded the design and development of a new MERN stack landing page with Stripe integration and enhanced application performance by optimizing code through collaborative GitHub reviews.",
      logo: "/logos/MMW.jpg"
    },
    {
      company: "ITConnexion",
      location: "Hawthorn, VIC",
      role: "Software Development Intern",
      duration: "AUG 2022 – OCT 2022",
      description: "Transformed client needs into tangible digital solutions, leading user requirement analysis and prototyping in Figma. I drove the completion of a youth mental health Android app by implementing critical features and database integration, bringing the project to 50% completion.",
      logo: "/logos/ITConnexion.png"
    }
  ];

  const otherExperiences = [
    {
      company: "Bio-E Australia",
      role: "Mechanical Engineer",
      years: "2017-2021",
      logo: "/logos/bioe.jpg"
    },
    {
      company: "Uber",
      role: "Uber Eat Driver",
      years: "2021-2023",
      logo: "/logos/uber.jpg"
    },
    {
      company: "Boroondara City Council",
      role: "School Crossing Supervisor",
      years: "2022-2023",
      logo: "/logos/boroondara.png"
    },
    {
      company: "Expoconti",
      role: "Metro Tunnel Project Technician",
      years: "2024-2025",
      logo: "/logos/expoconti.jpg"
    },
    {
      company: "MDHOME-Midea",
      role: "Warehouse Manager",
      years: "2024-2025",
      logo: "/logos/midea.png"
    }
    
  ];

  const [expandedIndex, setExpandedIndex] = useState(0); // First item expanded by default
  const [isOtherExperienceExpanded, setIsOtherExperienceExpanded] = useState(false);

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
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:border-blue-500">
              <button
                onClick={() => handleToggle(index)}
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
              >
                <div className="flex items-center">
                  <img src={exp.logo} alt={`${exp.company} logo`} className="w-12 h-12 mr-4 object-contain"/>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-blue-600">{exp.company}</p>
                  </div>
                </div>
                <span className={`transform transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out ${expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-gray-700 mb-2">{exp.duration}</p>
                    <p className="text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Experience Section */}
        <div className="mt-20">
          <div className="text-center">
            <button 
              onClick={() => setIsOtherExperienceExpanded(!isOtherExperienceExpanded)}
              className="inline-flex items-center justify-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Other Experience</h3>
              <span className={`transform transition-transform duration-300 ml-2 ${isOtherExperienceExpanded ? 'rotate-180' : ''}`}>
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </div>

          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOtherExperienceExpanded ? 'max-h-screen mt-12 pt-4' : 'max-h-0'}`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                {otherExperiences.map((exp, index) => (
                    <div key={index} className="text-center flex flex-col items-center">
                        <div className="w-16 h-16 mb-4">
                          <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full rounded-full object-cover shadow-md transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-xl"/>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800">{exp.company}</h4>
                        <p className="text-gray-600 text-center px-2">{exp.role}</p>
                        <p className="text-sm text-gray-500">{exp.years}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 