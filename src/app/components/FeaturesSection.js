'use client';

import { useState, useRef } from 'react';

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const allFeatures = [
    {
      title: "Design Systems",
      description: "Comprehensive design systems that scale with your business needs and maintain consistency.",
      icon: "🎨"
    },
    {
      title: "Web Development", 
      description: "Modern, responsive websites built with the latest technologies and best practices.",
      icon: "💻"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      icon: "📱"
    },
    {
      title: "Brand Identity",
      description: "Complete brand identity solutions from logo design to comprehensive style guides.",
      icon: "✨"
    },
    {
      title: "User Research",
      description: "Data-driven insights through comprehensive user research and testing methodologies.",
      icon: "🔍"
    },
    {
      title: "Prototyping",
      description: "Interactive prototypes that bring ideas to life and validate concepts early.",
      icon: "⚡"
    },
    {
      title: "Cloud Architecture",
      description: "Scalable and resilient cloud infrastructure design on AWS, Google Cloud, and Azure.",
      icon: "☁️"
    },
    {
      title: "API Development",
      description: "Robust and secure RESTful and GraphQL APIs for your applications.",
      icon: "🔗"
    },
    {
      title: "Database Management",
      description: "Efficient database design, optimization, and management for SQL and NoSQL databases.",
      icon: "🗃️"
    },
    {
      title: "CI/CD & DevOps",
      description: "Automated deployment pipelines to ensure continuous integration and delivery.",
      icon: "🚀"
    },
    {
      title: "Performance Optimization",
      description: "Improving website and application speed for a better user experience and SEO.",
      icon: "⏱️"
    },
    {
      title: "E-commerce Solutions",
      description: "Building powerful online stores with platforms like Shopify, Magento, and custom solutions.",
      icon: "🛒"
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
              className="group p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border hover:border-blue-200 animate-fade-in"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
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