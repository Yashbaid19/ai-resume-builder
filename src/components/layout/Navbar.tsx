export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-tight">
          Resume<span className="text-blue-600">AI</span>
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Features
          </a>

          <a
            href="#pricing"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Pricing
          </a>

          <a
            href="#faq"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            FAQ
          </a>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Login
          </button>

          <button className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl">
            Build Resume
          </button>
        </div>

      </div>
    </header>
  );
}