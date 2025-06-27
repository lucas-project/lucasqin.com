export default function HeroSection() {
  return (
    <section id="home" className="bg-gray-50 pt-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                👋 Available for hire
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm <span className="text-blue-600">Lucas Qin</span>
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
                  Full-Stack Developer & Designer
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I create exceptional digital experiences through innovative design and cutting-edge development. 
                  Ready to bring your vision to life.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Let's Work Together
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                View My Work
              </a>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-xl p-6">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional workspace"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 