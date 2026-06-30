function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Left Side */}
        <div className="w-full lg:w-1/2">

          <p className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium mb-6">
            SBI Hackathon 2026 — AI Innovation
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Achieve Your
            <span className="text-blue-700"> Financial Goals </span>
            with AI-Powered Banking Guidance
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            SBI Sarthi AI helps customers plan financial goals,
            improve financial health, adopt digital banking,
            and receive personalized AI recommendations.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">

            <button className="bg-blue-700 text-white px-7 py-4 rounded-xl font-semibold hover:bg-blue-800 hover:scale-105 transition-all duration-300">
              Start Your Journey
            </button>

            <button className="border border-gray-300 px-7 py-4 rounded-xl font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300">
              Watch Demo
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex justify-center">

          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">

            <h2 className="text-xl font-bold mb-6">
              Welcome Back 👋
            </h2>

            {/* Financial Health */}
            <div className="mb-6">

              <div className="flex justify-between mb-2">
                <p className="font-semibold">
                  Financial Health Score
                </p>

                <p className="text-blue-700 font-bold">
                  82/100
                </p>
              </div>

              <div className="bg-gray-200 rounded-full h-3">

                <div className="bg-blue-600 h-3 rounded-full w-4/5"></div>

              </div>

            </div>

            {/* Goals */}

            <div className="space-y-5">

              <div>

                <div className="flex justify-between">

                  <p>🏠 Home Loan</p>

                  <p className="text-sm text-gray-500">
                    75%
                  </p>

                </div>

                <div className="bg-gray-200 rounded-full h-2 mt-2">

                  <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between">

                  <p>🚗 Car Fund</p>

                  <p className="text-sm text-gray-500">
                    50%
                  </p>

                </div>

                <div className="bg-gray-200 rounded-full h-2 mt-2">

                  <div className="bg-green-500 h-2 rounded-full w-1/2"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between">

                  <p>✈ Vacation</p>

                  <p className="text-sm text-gray-500">
                    35%
                  </p>

                </div>

                <div className="bg-gray-200 rounded-full h-2 mt-2">

                  <div className="bg-purple-500 h-2 rounded-full w-1/3"></div>

                </div>

              </div>

            </div>

            {/* AI Tip */}

            <div className="mt-8 bg-blue-50 rounded-2xl p-4">

              <p className="text-sm text-blue-700 font-semibold">
                🤖 AI Suggestion
              </p>

              <p className="text-sm text-gray-600 mt-2">
                Increase your monthly savings by ₹2,000 to achieve your Home Loan goal 6 months earlier.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;