'use client';

import { useState, useRef } from 'react';

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const allFeatures = [
    {
      title: "Programming Languages",
      description: "Experienced in Java, JavaScript, Python, and PHP, demonstrated through academic projects, internships, and personal endeavours in developing web applications",
      icon: "🎨",
      keywords: ["Java", "JavaScript", "Python", "PHP"]
    },
    {
      title: "Database Management", 
      description: "Proficient in MySQL, Firebase and MongoDB for designing and managing databases for websites and software, gained through academic and internship projects",
      icon: "💻",
      keywords: ["MySQL", "Firebase", "MongoDB", "Database Design"]
    },
    {
      title: "Cloud Services",
      description: "Familiarity with AWS services, such as EC2, S3, and IAM, developed through the AWS Certified Cloud Practitioner certification",
      icon: "📱",
      keywords: ["AWS", "EC2", "S3", "IAM", "Cloud Computing"]
    },
    {
      title: "Version Control",
      description: "Competent in Git, GitHub, SVN and Bitbucket for version control and collaboration, gained through academic and personal projects",
      icon: "✨",
      keywords: ["Git", "GitHub", "SVN", "Bitbucket"]
    },
    {
      title: "Development Tools",
      description: "Competent in using development tools such Slack, Figma, Visual Studio Code, IntelliJ IDEA, and Postman, as well as AI development tools like ChatGPT and Cursor, ensuring efficient code management and effective API testing in software development projects",
      icon: "🔍",
      keywords: ["Figma", "VS Code", "IntelliJ", "Postman", "ChatGPT", "Cursor"]
    },
    {
      title: "Technologies",
      description: "Familiar with technologies such as React, Node.js, Express, and MongoDB, as well as frameworks such as Bootstrap, Tailwind CSS, and Material UI, ensuring efficient web development and responsive design in software development projects",
      icon: "⚡",
      keywords: ["React", "Node.js", "Express", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "Cloud Architecture",
      description: "Familiar with cloud architecture, including AWS, Google Cloud, and Azure, as well as cloud services such as EC2, S3, and IAM, ensuring efficient cloud infrastructure and scalable cloud services in software development projects",
      icon: "☁️",
      keywords: ["AWS", "Google Cloud", "Azure", "EC2", "S3", "IAM"]
    },
    {
      title: "API Development",
      description: "Experienced in developing RESTful APIs using Node.js, Express, and MongoDB, as well as GraphQL APIs using Apollo Server and GraphQL Yoga, ensuring efficient API development and effective API testing in software development projects",
      icon: "🔗",
      keywords: ["RESTful API", "GraphQL", "Node.js", "Express", "Apollo"]
    }
    
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleFeatures = () => {
    if (isExpanded) {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(!isExpanded);
  };

  const featuresToShow = isExpanded ? allFeatures : allFeatures.slice(0, 6);

  return (
    <section ref={sectionRef} className="bg-white py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful tools and intuitive design come together to create exceptional digital experiences
            that drive results and engage your audience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresToShow.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-all duration-300 border hover:border-blue-200 animate-fade-in"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              <div className="max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                <div className="mt-4 flex flex-wrap gap-2">
                  {feature.keywords.map((keyword, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button 
            onClick={toggleFeatures}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 font-medium text-lg"
          >
            {isExpanded ? 'Show Less' : 'Explore All Features'}
          </button>
        </div>
      </div>
    </section>
  );
} 