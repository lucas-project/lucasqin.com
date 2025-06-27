export default function MembershipSection() {
  return (
    <section id="membership" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-6">
          <div className="flex-shrink-0">
            <img 
              className="h-14 w-14" 
              src="/logos/acs-logo.png" 
              alt="Australian Computer Society Logo"
            />
          </div>
          <p className="text-xl font-medium text-gray-800">
            2025 Australian Computer Society Member
          </p>
        </div>
      </div>
    </section>
  );
} 