'use client';

import { useState, useRef } from 'react';

export default function TestimonialsSection() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      quote: `Lucas QIN was an excellent team member who collaborated with all our team members during his internship. He willingly undertook many different and varied tasks to support the team with the main project everyone was working on. Some tasks were menial, but important, while others required desktop research. There were tasks which required him to be physically present at various testing sites for trial rehearsals, to test the hardware developed by the team and the cloud-based data systems necessary for the project to record the data from the trials. As a rider of motorcycles, his ability to support the team by riding our demonstration bikes (the project was looking at motorcycle rider safety) was very much needed!

              During his time with us, he presented as an excellent worker with a very good work ethic. His communication with team members was clear and his positive attitude was very much appreciated. His attendance was punctual, not missing a day and he did not complain, which he may have been entitled to do as some days during the field trials were incredibly long. He was utterly reliable and needed little instruction once he understood what was needed, he used his initiative to undertake routine tasks.

              To summarise, Lucas Qin was involved in the following tasks:
              • Developed an Android app using Java and Android Studio that connects with the server to display warnings as required.
              • Assembled electronic components for customised project hardware.
              • Supported Field Trials (multiple days) by assisting with traffic control, monitoring CAN bus data and system warnings. He assisted with recording (photo and video) the trials and took part in motorcycle test rides to verify warning displays. He supported daily setup for each trial day.
              • Desktop research and communication with potential suppliers as needed by team members to help gather information about pricing and availability for ad hoc project requirements. 
              • Reviewed, and organised data from field trial days into Excel spreadsheets for easier analysis and reporting.
              • Assisted in operating and testing the motorcycle simulator, helping ensure proper functionality and a smooth user experience.

              I have no hesitation in recommending him and would be very happy to work with him again.`,
      name: "Diana Heatherich",
      title: "Manager of Centre of Technology Infusion, La Trobe University",
      avatar: "/avatars/Diana.jpg"
    },
    {
      quote: `I highly recommend Lucas Qin who has consistently demonstrated a positive attitude, strong eagerness to learn, and the ability to work effectively as part of a team. Throughout his time with us, he showed a proactive approach to taking on new challenges, contributed meaningfully to group efforts, and always completed tasks promptly and reliably. His professionalism, enthusiasm, and commitment to delivering quality work make him a valuable addition to any team or organisation.`,
      name: "Stanley Ding Shuo",
      title: "Team Leader of Intelligent Transport Systems at La Trobe University",
      avatar: "/avatars/Ding.jpg"
    },
    {
      quote: `Lucas is diligent, quick learner and technically resourceful. He displayed a strong interest in software development lifecyle and gained coding/development skills with React Native. Through the project work and UX design exercises, Lucas has appreciated the importance of customer communication and requirements analysis, and observed how these early stage tasks can shape and direct the project. He works very well with other students as well as our team members and we greatly appreciate his contribution to the projects.`,
      name: "Vincent Peng",
      title: "Director of ITConnexion",
      avatar: "/avatars/Vincent.jpg"
    }
  ];

  const handleSelect = (index) => {
    setSelectedIndex(index);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const getShortQuote = (quote) => {
    const words = quote.split(' ');
    if (words.length > 30) {
      return words.slice(0, 30).join(' ') + '...';
    }
    return quote;
  };

  const selectedTestimonial = selectedIndex !== null ? testimonials[selectedIndex] : null;

  return (
    <section ref={sectionRef} id="testimonials" className="bg-slate-100 py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What My Colleagues Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Feedback from people I've worked with.
          </p>
        </div>

        {selectedTestimonial === null ? (
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                onClick={() => handleSelect(index)}
                className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 flex flex-col"
              >
                <div className="flex-grow mb-6">
                  <p className="text-gray-700 text-lg relative">
                    <span className="absolute -top-4 -left-4 text-6xl text-blue-100 font-serif">“</span>
                    {getShortQuote(testimonial.quote)}
                  </p>
                </div>
                <div className="flex items-center mt-auto">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-blue-600">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 animate-fade-in">
            {/* Main Content */}
            <div className="lg:w-3/4 bg-white rounded-xl shadow-2xl p-8 border border-gray-100">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <img src={selectedTestimonial.avatar} alt={selectedTestimonial.name} className="w-16 h-16 rounded-full mr-5" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedTestimonial.name}</h3>
                    <p className="text-gray-600">{selectedTestimonial.title}</p>
                  </div>
                </div>
                <button onClick={handleClose} className="text-gray-500 hover:text-gray-800">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
              <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                <span className="text-6xl text-blue-100 font-serif float-left mr-2 -mt-2">“</span>
                {selectedTestimonial.quote}
              </div>
            </div>
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Others</h3>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => {
                  if (index === selectedIndex) return null;
                  return (
                    <div 
                      key={index} 
                      onClick={() => handleSelect(index)} 
                      className="group cursor-pointer bg-white rounded-lg p-3 shadow-md hover:shadow-xl hover:scale-105 transition-all flex items-center gap-4 border"
                    >
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 object-cover rounded-full flex-shrink-0" />
                      <div>
                         <h4 className="font-semibold text-gray-800 group-hover:text-blue-600">{testimonial.name}</h4>
                         <p className="text-sm text-gray-500">{testimonial.title}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 