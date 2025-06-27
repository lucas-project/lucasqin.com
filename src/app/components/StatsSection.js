export default function StatsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                All the numbers over 
                <br />
                <span className="text-blue-600">your campaign in progress</span>
              </h2>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">$3,582</div>
                <div className="text-gray-600">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">412</div>
                <div className="text-gray-600">Active Campaigns</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">89%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Chart */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Overview</h3>
                <p className="text-gray-600">Campaign metrics and analytics</p>
              </div>
              
              {/* Mock Chart */}
              <div className="relative h-64">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  {/* Chart Background */}
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#3B82F6', stopOpacity: 0.3}} />
                      <stop offset="100%" style={{stopColor: '#3B82F6', stopOpacity: 0}} />
                    </linearGradient>
                  </defs>
                  
                  {/* Chart Line */}
                  <path
                    d="M20,150 Q100,80 180,120 T360,60"
                    stroke="#3B82F6"
                    strokeWidth="3"
                    fill="none"
                  />
                  
                  {/* Chart Area */}
                  <path
                    d="M20,150 Q100,80 180,120 T360,60 L360,180 L20,180 Z"
                    fill="url(#chartGradient)"
                  />
                  
                  {/* Data Points */}
                  <circle cx="20" cy="150" r="4" fill="#3B82F6" />
                  <circle cx="120" cy="90" r="4" fill="#3B82F6" />
                  <circle cx="220" cy="110" r="4" fill="#3B82F6" />
                  <circle cx="320" cy="70" r="4" fill="#3B82F6" />
                  <circle cx="360" cy="60" r="4" fill="#3B82F6" />
                </svg>
                
                {/* Chart Labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-sm text-gray-500 px-4">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                  <span>Sep</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 