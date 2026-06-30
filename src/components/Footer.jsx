export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              SBI Sarthi AI
            </h2>

            <p className="text-gray-400">
              Your intelligent financial companion powered by AI to
              help you achieve your goals.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">
              Product
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Dashboard</li>
              <li>Goal Planner</li>
              <li>Learning Hub</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">
              Company
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">
              Legal
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-500">
          © 2026 SBI Sarthi AI. Built for SBI Hackathon.
        </p>

      </div>
    </footer>
  );
}