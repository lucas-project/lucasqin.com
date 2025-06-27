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
      title: "Workabn Website (currently offline)",
      description: "Modern e-commerce solution with React, Node.js, and Stripe integration.",
      image: "/projects/project 1_1.png",
      tags: ["PHP", "JavaScript", "Bootstrap", "MySQL", "Stripe Payment"],
      detailedDescription: "Workabn is a website providing services helping customers start their jobs using ABN, and it helps them to get their work with children checks and other basic qualifications. This is a side project fully developed by me, it included a landing page, forms for customers to  provide their information and a payment system powered by Stripe.",
      images: [
        { src: "/projects/project 1_1.png", description: "Homepage part 1" },
        { src: "/projects/project 1_2.png", description: "Homepage part 2" },
        { src: "/projects/project 1_3.png", description: "Homepage part 3" },
        { src: "/projects/project 1_4.png", description: "Homepage part 4" },
        { src: "/projects/project 1_5.png", description: "Information collecting page" }
      ]
    },
    {
      title: "Non-profit Corelia Website",
      description: "It has been a long time since people forgot the female composer’s contribution to classical music, while many of the pieces created by female composers are out there. The Corelia project aims to collect those pieces with information like composer information, recording of the piece, musical score ( if applicable), etc. Those data collected will be used to promote women composers and their works, and encourage musicians and concerts to diversify their choice of repertoire. To achieve this purpose, the Corelia project wished to build a website that served as a centralised database for classical music players to discover women composers’ works. Apart from the database, the Corelia project also wishes to provide a forum for its users to communicate with each other, including commenting, posting, sharing and collecting a post. My responsibilities included design and development of homepages, profile page, repertoire page and community function, mainly on front end and API, database and backend were handled by other team members.",
      image: "/projects/project 2_1.png",
      tags: ["MERN Stack", "Figma", "Restful API", "AWS S3"],
      detailedDescription: "A powerful task management tool designed for teams. It features real-time collaboration, allowing users to see updates instantly. The drag-and-drop interface makes organizing tasks simple and intuitive, boosting productivity for any team.",
      images: [
        { src: "/projects/project 2_1.png", description: "Corelia Homepage, Profile page and repertoire page" },
        { src: "/projects/project 2_2.png", description: "Corelia contact page, community page, topic page" },
        { src: "/projects/project 2_3.png", description: "Corelia login & register pages" }
      ]
    },
    {
      title: "City Council Asset Management System",
      description: "This project was built for a local city council responsible for maintaining public assets such as footpaths and rubbish bins. Previously, residents had to report issues via phone or email, which made it hard to track progress, caused delays, and often led to repeated or unclear reports. To improve the process, we developed a digital solution that streamlines issue reporting, reduces administrative overhead, and helps staff respond more efficiently. I contributed by designing the app’s logic, creating the report submission forms, and integrating Google’s location services to ensure accurate issue tracking.",
      image: "/projects/project 3_1.png",
      tags: ["Android Development", "Java", "Firebase", "Google Maps API"],
      detailedDescription: "This dashboard provides deep insights into data through a highly interactive and customizable interface. Using D3.js, it renders complex data into beautiful and understandable visualizations, helping businesses make data-driven decisions.",
      images: [
        { src: "/projects/project 3_1.png", description: "Login & register pages" },
        { src: "/projects/project 3_2.png", description: "Report pages" },
        { src: "/projects/project 3_3.png", description: "Process for adding reports" },
        { src: "/projects/project 3_4.png", description: "Manages reports" }
      ]
    },
    {
      title: "Custom Deep learning model for wound monitoring",
      description: "This project focuses on building a solution to help identify the borders and colours of a patient’s wound from images. It's still in the early stages, so the client is open to any practical approach. Wound images are captured using screenshots on the client’s computer, each including a reference object—like a two-dollar coin—for scale. The goal is to clearly detect the wound's border, extract it, and use it with the reference object to estimate the wound's actual size. The client also wants to break down the wound’s colour into distinct areas and track how those colours change over time by comparing images. The solution is currently planned as a web application. I was responsible for researching possible approaches, designing the TensorFlow-based deep learning model, preparing and processing the data, training the model using a custom U-Net setup, and testing it with new datasets. This included collecting training images, creating masks, loading and segmenting data, validating results, and adjusting various parameters during the training process, which was one of the most time-intensive parts.",
      image: "/projects/project 4_1.png",
      tags: ["Deep Learning", "Python", "JavaScript", "TensorFlow", "U-Net", "Model Training"],
      detailedDescription: "A full-fledged social media app allowing users to share photos, follow other users, and engage in real-time chat conversations. Built with React Native for a seamless cross-platform experience and Firebase for backend services.",
      images: [
        { src: "/projects/project 4_1.png", description: "Circle out wound areas in training images" },
        { src: "/projects/project 4_2.png", description: "Deep learning algorithms turn cycle-out areas into black & white" },
        { src: "/projects/project 4_3.png", description: "In testing images, the left is the wound, the middle is the result with defect, the right is the final result after fine tuning" },
        { src: "/projects/project 4_4.png", description: "Final result of recognition" }
      ]
    },
    {
        title: "Childcare Centre Management System",
        description: "This project was part of my internship at ITConnexion, developed for GECC, a non-profit childcare centre. They needed a system to help manage their daycare availability, which included both a mobile app and an internal website. I worked on analysing requirements, designing the frontend, meeting with the client to discuss ideas and feedback, and planning the overall workflow to make sure everything fit their day-to-day operations.",
        image: "/projects/project 5_4.png",
        tags: ["Figma", "React.js", "PHP", "MySQL", "Restful API"],
        detailedDescription: "A recipe finder application that helps users discover new dishes based on ingredients they have. It uses the Edamam API to fetch recipes and allows users to save their favorites for later.",
        images: [
            { src: "/projects/project 5_1.png", description: "Childcare centre app part 1" },
            { src: "/projects/project 5_2.png", description: "Childcare centre app part 2" },
            { src: "/projects/project 5_3.png", description: "Childcare centre internal management website part 1" },
            { src: "/projects/project 5_4.png", description: "Childcare centre internal management website part 2" },
            { src: "/projects/project 5_5.png", description: "Childcare centre internal management website part 3" }
        ]
    },
    {
        title: "MarkMyWords product",
        description: "This landing page was designed for a startup called MarkMyWords, which was building a tool to help high school teachers visualise student performance and offer tailored suggestions. The page serves to promote the tool, explain its features, and provide access to the subscription payment gateway. I was responsible for developing part of the tool’s visualisation function , and prototyping and building the UI for the entire website.",
        image: "/projects/project 6_1.png",
        tags: ["TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL", "GraphQL", "Figma"],
        detailedDescription: "Detailed description for another great project, showcasing different skills and technologies.",
        images: [
            { src: "/projects/project 6_1.png", description: "Landing page design" },
            { src: "/projects/project 6_2.png", description: "Overall data visualisation in homepage" },
            { src: "/projects/project 6_3.png", description: "Data visualisation for each exam" }
        ]
    },
    {
      title: "Motorcycle Safety Project",
      description: "This landing page was designed for a startup called MarkMyWords, which was building a tool to help high school teachers visualise student performance and offer tailored suggestions. The page serves to promote the tool, explain its features, and provide access to the subscription payment gateway. I was responsible for developing part of the tool’s visualisation function , and prototyping and building the UI for the entire website.",
      image: "/projects/project 7_11.png",
      tags: ["Android Development", "Python", "Java", "Hardware"],
      detailedDescription: "Detailed description for another great project, showcasing different skills and technologies.",
      images: [
          { src: "/projects/project 7_1.png", description: "test vehicles in garage" },
          { src: "/projects/project 7_2.png", description: "communication between team members" },
          { src: "/projects/project 7_3.png", description: "Temporary office during trail days" },
          { src: "/projects/project 7_4.png", description: "Conducting riding test to validate the product design" },
          { src: "/projects/project 7_5.png", description: "Temporary office during trail days_2" },
          { src: "/projects/project 7_6.png", description: "Data monitoring and collection" },
          { src: "/projects/project 7_7.png", description: "Team stand-up meeting" },
          { src: "/projects/project 7_8.png", description: "Team meeting" },
          { src: "/projects/project 7_9.png", description: "Preparation before the trial" },
          { src: "/projects/project 7_10.png", description: "Discussion of the plan" },
          { src: "/projects/project 7_11.png", description: "Hardware and GPS setup" },
          { src: "/projects/project 7_12.png", description: "Using simulator to test motorcycle warnings and data collection" },
          { src: "/projects/project 7_13.png", description: "Centre of Technology Infusion" },
          { src: "/projects/project 7_14.png", description: "Work station to build and fix hardware installed in motorcycles" },
          { src: "/projects/project 7_15.png", description: "Inside our lab" }
      ]
    },
    {
      title: "MarkMyWords product",
      description: "This landing page was designed for a startup called MarkMyWords, which was building a tool to help high school teachers visualise student performance and offer tailored suggestions. The page serves to promote the tool, explain its features, and provide access to the subscription payment gateway. I was responsible for developing part of the tool’s visualisation function , and prototyping and building the UI for the entire website.",
      image: "/projects/project 8_3.png",
      tags: ["PHP", "MySQL", "Zend Framework", "SVN", "Git"],
      detailedDescription: "Detailed description for another great project, showcasing different skills and technologies.",
      images: [
          { src: "/projects/project 8_1.png", description: "Landing page design" },
          { src: "/projects/project 8_2.png", description: "Overall data visualisation in homepage" },
          { src: "/projects/project 8_3.png", description: "Data visualisation for each exam" },
          { src: "/projects/project 8_4.png", description: "Data visualisation for each exam" }
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
    <section ref={sectionRef} id="projects" className="bg-slate-100 py-20 scroll-mt-16">
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
                          src={img.src}
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
                {allProjects.filter(p => p.title !== selectedProject.title).map(p => (
                  <button 
                    key={p.title}
                    onClick={() => handleSelectProject(p.title)} 
                    className="w-full text-left p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <h4 className="font-semibold text-gray-800">{p.title}</h4>
                  </button>
                ))}
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