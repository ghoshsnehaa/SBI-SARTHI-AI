function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">

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

        </div>

        {/* Navigation */}

       <ul className="hidden md:flex gap-8 font-medium">

          <li className="hover:text-blue-700 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-blue-700 cursor-pointer transition">
            Features
          </li>

          <li className="hover:text-blue-700 cursor-pointer transition">
            About
          </li>

          <li className="hover:text-blue-700 cursor-pointer transition">
            Contact
          </li>

        </ul>

        <button className="hidden md:block bg-blue-700 hover:bg-blue-800 transition text-white px-6 py-3 rounded-xl font-semibold">
          Get Started
        </button>

      </div>
    </nav>
  );
}

export default Navbar;