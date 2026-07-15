export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <h1 className="text-3xl font-extrabold tracking-tight">
          Resume<span className="text-blue-600">AI</span>
        </h1>

        <nav className="hidden gap-10 text-slate-600 md:flex">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">FAQ</a>
        </nav>

        <div className="flex items-center gap-4">

          <button className="hidden text-slate-700 md:block">
            Login
          </button>

          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Build Resume
          </button>

        </div>

      </div>
    </header>
  );
}