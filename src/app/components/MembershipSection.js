export default function MembershipSection() {
  const memberships = [
    {
      logo: "/logos/acs-logo.png",
      alt: "Australian Computer Society Logo",
      text: "2025 Australian Computer Society Member"
    },
    {
      logo: "/logos/swinburne.png",
      alt: "Swinburne University Logo",
      text: "George Swinburne International Excellence Scholarship"
    }
  ];

  return (
    <section id="membership" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {memberships.map((membership, index) => (
            <div key={index} className="flex items-center justify-center space-x-6">
              <div className="flex-shrink-0">
                <img 
                  className="h-14 object-contain" 
                  src={membership.logo} 
                  alt={membership.alt}
                />
              </div>
              <p className="text-xl font-medium text-gray-800">
                {membership.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 