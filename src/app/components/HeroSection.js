'use client';

import { useState, useEffect } from 'react';

const AnimatedCodeBlock = () => {
  const [code, setCode] = useState('');
  const fullCode = `// Building a profile for the modern developer...
const profile = {
  name: "Lucas",
  features: [
    "Software Development",
    "Customer Mindset", 
    "Agile Methodologies",
    "Team Player"
  ],
  isSeekingSoftwareDevelopmentWork: true,
};

function createDigitalExperience(profile) {
  if (profile.isSeekingSoftwareDevelopmentWork) {
    return "Let's build something great together!";
  }
}`;

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setCode(fullCode.substring(0, i));
      i++;
      if (i > fullCode.length) {
        clearInterval(typing);
      }
    }, 50);
    return () => clearInterval(typing);
  }, [fullCode]);

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/50">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
      <pre className="p-4 text-sm">
        <code className="language-javascript">{code}</code>
        <span className="animate-ping">_</span>
      </pre>
    </div>
  );
};


export default function HeroSection() {
  return (
    <section id="home" className="relative bg-gray-900 text-white pt-24 md:pt-32 overflow-hidden">
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-300 rounded-full text-sm font-medium border border-blue-500/20">
                👋 Available for hire
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Hi, I'm <span className="text-blue-400">Lucas Qin</span>
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
                  Full-Stack Developer & Designer
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  I create exceptional digital experiences through innovative design and cutting-edge development. 
                  Ready to bring your vision to life.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Let's Work Together
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center border border-gray-700 text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
          
          {/* Right Content - Animated Code Block */}
          <div className="relative animate-fade-in" style={{animationDelay: '0.4s'}}>
            <AnimatedCodeBlock />
          </div>
        </div>
      </div>
    </section>
  );
} 