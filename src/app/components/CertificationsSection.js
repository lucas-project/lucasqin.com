'use client';

import { useState, useRef } from 'react';

export default function CertificationsSection() {
  const sectionRef = useRef(null);
  const certifications = [
    {
      title: "IT Professional Year Certificate",
      issuer: "Monash College",
      date: "Aug 2025",
      logo: "/logos/monash college.png",
      link: "#"
    },
    {
      title: "AWS DevOps Best Practices for Beginner",
      issuer: "LinkedIn",
      date: "Sep 2024",
      logo: "/logos/linkedin.png",
      link: "#"
    },
    {
      title: "Cert Prep: Saleforce Certified Administrator",
      issuer: "LinkedIn",
      date: "Sep 2024",
      logo: "/logos/linkedin.png",
      link: "#"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Dec 2022",
      logo: "/logos/aws.png",
      link: "#"
    },
    {
      title: "IBM Backend Developer Professional Certificate",
      issuer: "Coursera",
      date: "Jun 2023",
      logo: "/logos/coursera.jpg",
      link: "#"
    },
    {
      title: "IBM DevOps and Software Engineering Professional Certificate",
      issuer: "Coursera",
      date: "JuL 2023",
      logo: "/logos/coursera.jpg",
      link: "#"
    },
    {
      title: "TypeScript Design Patterns",
      issuer: "LinkedIn",
      date: "Sep 2024",
      logo: "/logos/linkedin.png",
      link: "#"
    },
    {
      title: "DevOps Foundations",
      issuer: "LinkedIn",
      date: "Sep 2024",
      logo: "/logos/linkedin.png",
      link: "#"
    },
    {
      title: "Confluence Fundamentals",
      issuer: "Atlassian",
      date: "Mar 2023",
      logo: "/logos/atlassian.png",
      link: "#"
    },
    {
      title: "Jira Fundamentals",
      issuer: "Atlassian",
      date: "Mar 2023",
      logo: "/logos/atlassian.png",
      link: "#"
    },
    {
      title: "Diploma of Project Management",
      issuer: "Melbourne College of Business and Technology",
      date: "Nov 2018",
      logo: "/logos/MCBT.jpg",
      link: "#"
    },
    {
      title: "Master of Information Technology",
      issuer: "Swinburne University of Technology",
      date: "Jul 2023",
      logo: "/logos/swinburne.png",
      link: "#"
    },
    {
      title: "Work with Children Check",
      issuer: "Service Victoria",
      date: "Jan 2021",
      logo: "/logos/sv.png",
      link: "#"
    },
    {
      title: "Australian Open Driver's License",
      issuer: "VicRoads",
      date: "Mar 2021",
      logo: "/logos/vicroad.png",
      link: "#"
    },
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCertifications = () => {
    if (isExpanded) {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(!isExpanded);
  };

  const certificationsToShow = isExpanded ? certifications : certifications.slice(0, 6);

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

        {/* Certifications Block */}
        <div className="bg-slate-50 p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            {certificationsToShow.map((cert, index) => (
              <div
                key={index}
                className="group flex items-center p-2 rounded-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105"
              >
                <div className="w-10 h-10 mr-4 flex-shrink-0">
                  {cert.logo.startsWith('/') ? (
                    <img src={cert.logo} alt={`${cert.issuer} logo`} className="w-full h-full object-contain"/>
                  ) : (
                    <span className="text-3xl">{cert.logo}</span>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-blue-600">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-500">{cert.issuer} • {cert.date}</p>
                </div>
              </div>
            ))}
          </div>

          {certifications.length > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={toggleCertifications}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium border border-gray-200"
              >
                {isExpanded ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 