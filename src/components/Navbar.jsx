import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold">
            S
          </div>

          <div>
            <h2 className="font-bold text-xl">
              SBI Sarthi AI
            </h2>

            <p className="text-sm text-gray-500">
              Smart Banking Companion
            </p>
          </div>

        </Link>

        {/* Navigation */}

        <ul className="hidden md:flex gap-8 font-medium">

          <li>
            <Link
              to="/"
              className="hover:text-blue-700 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard"
              className="hover:text-blue-700 transition"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/goal-planner"
              className="hover:text-blue-700 transition"
            >
              Goal Planner
            </Link>
          </li>

          <li>
            <Link
              to="/learning-hub"
              className="hover:text-blue-700 transition"
            >
              Learning Hub
            </Link>
          </li>

        </ul>

        <Link
          to="/dashboard"
          className="hidden md:block bg-blue-700 hover:bg-blue-800 transition text-white px-6 py-3 rounded-xl font-semibold"
        >
          Get Started
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;