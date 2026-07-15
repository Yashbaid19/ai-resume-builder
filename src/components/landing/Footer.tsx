export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-28">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold">
              Resume<span className="text-blue-500">AI</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Build ATS-friendly resumes with AI.
              Improve grammar, optimize keywords and
              land more interviews.
            </p>

          </div>

          {/* Product */}

          <div>

            <h3 className="font-semibold text-lg mb-5">
              Product
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Resume Builder</li>

              <li>AI Resume Writer</li>

              <li>ATS Checker</li>

              <li>Templates</li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-semibold text-lg mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>About</li>

              <li>Pricing</li>

              <li>FAQ</li>

              <li>Contact</li>

            </ul>

          </div>

          {/* Legal */}

          <div>

            <h3 className="font-semibold text-lg mb-5">
              Legal
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Privacy Policy</li>

              <li>Terms</li>

              <li>Refund Policy</li>

            </ul>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-gray-500">

          © 2026 ResumeAI. All rights reserved.

        </div>

      </div>

    </footer>
  );
}