'use client';

import { useState, useRef } from 'react';

export default function CertificationsSection() {
  const sectionRef = useRef(null);
  const certifications = [
    {
      title: "IT Professional Year Certificate",
      issuer: "Monash College",
      date: "Issued: Aug 2025",
      icon: "🎓",
      link: "#"
    },
    {
      title: "AWS DevOps Best Practices for Beginner",
      issuer: "LinkedIn",
      date: "Issued: Sep 2024",
      icon: "🎓",
      link: "#"
    },

    {
      title: "Cert Prep: Saleforce Certified Administrator",
      issuer: "LinkedIn",
      date: "Issued: Sep 2024",
      icon: "🎓",
      link: "#"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Issued: Dec 2022",
      icon: "🎓",
      link: "#"
    },
    {
      title: "IBM Backend Developer Professional Certificate",
      issuer: "Coursera",
      date: "Issued: Jun 2023",
      icon: "🎓",
      link: "#"
    },
    {
      title: "IBM DevOps and Software Engineering Professional Certificate",
      issuer: "Coursera",
      date: "Issued: JuL 2023",
      icon: "🎓",
      link: "#"
    },
    {
      title: "TypeScript Design Patterns",
      issuer: "LinkedIn",
      date: "Issued: Sep 2024",
      icon: "🎓",
      link: "#"
    },
    {
      title: "DevOps Foundations",
      issuer: "LinkedIn",
      date: "Issued: Sep 2024",
      icon: "🎓",
      link: "#"
    },
    {
      title: "Confluence Fundamentals",
      issuer: "Atlassian",
      date: "Issued: Mar 2023",
      icon: "🎓",
      link: "#"
    },
    {
      title: "Jira Fundamentals",
      issuer: "Atlassian",
      date: "Issued: Mar 2023",
      icon: "🎓",
      link: "#"
    },
    {
      title: "Diploma of Project Management",
      issuer: "Melbourne College of Business and Technology",
      date: "Issued: Nov 2018",
      icon: "🎓",
      link: "#"
    },
    {
      title: "Master of Information Technology",
      issuer: "Swinburne University of Technology",
      date: "Issued: Jul 2023",
      icon: "🎓",
      link: "#"
    },
    {
      title: "Work with Children Check",
      issuer: "Service Victoria",
      date: "Issued: Jan 2021",
      icon: "🎓",
      link: "#"
    }
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCertifications = () => {
    if (isExpanded) {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(!isExpanded);
  };

  const certificationsToShow = isExpanded ? certifications : certifications.slice(0, 2);

  return (
    <section ref={sectionRef} id="certifications" className="bg-white py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications & Awards
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my professional certifications and recognitions.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certificationsToShow.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-slate-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border hover:border-blue-500 animate-fade-in"
            >
              <div className="flex items-start">
                <div className="text-3xl mr-4 mt-1">{cert.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 font-semibold mt-1">{cert.issuer}</p>
                  <p className="text-gray-500 mt-2">{cert.date}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button
            onClick={toggleCertifications}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 font-medium text-lg"
          >
            {isExpanded ? 'Show Less' : 'Show More Certifications'}
          </button>
        </div>
      </div>
    </section>
  );
} 