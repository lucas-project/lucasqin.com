'use client';

import { useState, useRef } from 'react';
import Lightbox from './Lightbox';

export default function ProjectsSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [lightboxStartIndex, setLightboxStartIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);

  const allProjects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React, Node.js, and Stripe integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      detailedDescription: "This project is a full-featured e-commerce platform built to be scalable, secure, and user-friendly. It includes a complete administrative dashboard for managing products, orders, and customers, alongside a seamless checkout experience for users powered by Stripe.",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1599056030584-6b6a3e5a5c5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and an intuitive interface.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      detailedDescription: "A powerful task management tool designed for teams. It features real-time collaboration, allowing users to see updates instantly. The drag-and-drop interface makes organizing tasks simple and intuitive, boosting productivity for any team.",
      images: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard with interactive charts and real-time data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["Vue.js", "D3.js", "Express", "Redis"],
      detailedDescription: "This dashboard provides deep insights into data through a highly interactive and customizable interface. Using D3.js, it renders complex data into beautiful and understandable visualizations, helping businesses make data-driven decisions.",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1560419015-7c427e848625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      title: "Social Media App",
      description: "A social media application with photo sharing and real-time chat.",
      image: "https://images.unsplash.com/photo-1589793463343-e0a72b53641b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["React Native", "Firebase", "Redux"],
      detailedDescription: "A full-fledged social media app allowing users to share photos, follow other users, and engage in real-time chat conversations. Built with React Native for a seamless cross-platform experience and Firebase for backend services.",
      images: [
        "https://images.unsplash.com/photo-1589793463343-e0a72b53641b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
        title: "Recipe Finder",
        description: "A web application for discovering and saving recipes from around the world.",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17025?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        tags: ["Vue.js", "Edamam API", "Vuex"],
        detailedDescription: "A recipe finder application that helps users discover new dishes based on ingredients they have. It uses the Edamam API to fetch recipes and allows users to save their favorites for later.",
        images: [
            "https://images.unsplash.com/photo-1490645935967-10de6ba17025?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ]
    }
  ];

  const projectsToShow = isExpanded ? allProjects : allProjects.slice(0, 3);

  const handleSelectProject = (projectTitle) => {
    const projectIndex = allProjects.findIndex(p => p.title === projectTitle);
    setExpandedIndex(projectIndex);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCloseProject = () => {
    setExpandedIndex(null);
  };
  
  const openLightbox = (projectIndex, imageIndex) => {
    setExpandedIndex(projectIndex);
    setLightboxStartIndex(imageIndex);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };
  
  const toggleShowAll = () => {
    if (isExpanded) {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(!isExpanded);
  };

  const selectedProject = expandedIndex !== null ? allProjects[expandedIndex] : null;

  return (
    <section ref={sectionRef} id="projects" className="bg-white py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web technologies 
            and user-centered design principles.
          </p>
        </div>

        {selectedProject === null ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsToShow.map((project, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full font-medium">{tag}</span>
                      ))}
                    </div>
                    <button onClick={() => handleSelectProject(project.title)} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
                      Show Details
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {allProjects.length > 3 && (
              <div className="text-center mt-16">
                <button 
                  onClick={toggleShowAll}
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  {isExpanded ? 'Show Less' : 'View All Projects'}
                  <svg className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 animate-fade-in">
            {/* Main Content */}
            <div className="lg:w-3/4 bg-white rounded-xl shadow-2xl p-8 border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h3>
                    <button onClick={handleCloseProject} className="text-gray-500 hover:text-gray-800">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full font-medium">{tag}</span>
                    ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{selectedProject.detailedDescription}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedProject.images.map((img, imgIndex) => (
                        <img 
                          key={imgIndex}
                          src={img}
                          alt={`${selectedProject.title} screenshot ${imgIndex + 1}`}
                          className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                          onClick={() => openLightbox(expandedIndex, imgIndex)}
                        />
                    ))}
                </div>
            </div>
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Other Projects</h3>
              <div className="space-y-4">
                {allProjects.map((project, index) => {
                  if (index === expandedIndex) return null;
                  return (
                    <div 
                      key={index} 
                      onClick={() => handleSelectProject(project.title)} 
                      className="group cursor-pointer bg-white rounded-lg p-3 shadow-md hover:shadow-xl hover:scale-105 transition-all flex items-center gap-4 border"
                    >
                      <img src={project.image} alt={project.title} className="w-16 h-16 object-cover rounded-md flex-shrink-0" />
                      <div>
                         <h4 className="font-semibold text-gray-800 group-hover:text-blue-600">{project.title}</h4>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {lightboxIsOpen && selectedProject && (
          <Lightbox
            images={selectedProject.images}
            startIndex={lightboxStartIndex}
            onClose={closeLightbox}
          />
        )}
      </div>
    </section>
  );
}