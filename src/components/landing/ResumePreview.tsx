export default function ResumePreview() {
  return (
    <div className="relative hidden lg:flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-blue-500/20 blur-[120px]" />

      {/* Gradient Border */}
      <div className="rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-[1px] transition-all duration-300 hover:shadow-[0_35px_90px_rgba(37,99,235,0.25)] hover:scale-[1.02] hover:-translate-y-2">

        {/* Card */}
        <div className="w-[430px] rounded-3xl bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">

          {/* Header */}
          <div className="flex items-center justify-between">

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Alex Johnson
              </h3>

              <p className="text-slate-500">
                Software Engineer
              </p>
            </div>

            <div className="rounded-xl bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              ATS 96%
            </div>

          </div>

          {/* Progress Bars */}
          <div className="mt-8 space-y-4">

            <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
              <div className="h-full w-[85%] rounded-full bg-blue-600 transition-all duration-1000"></div>
            </div>

            <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
              <div className="h-full w-[82%] rounded-full bg-purple-600 transition-all duration-1000"></div>
            </div>

            <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
              <div className="h-full w-[78%] rounded-full bg-cyan-500 transition-all duration-1000"></div>
            </div>

            <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
              <div className="h-full w-[70%] rounded-full bg-green-500 transition-all duration-1000"></div>
            </div>

          </div>

          {/* AI Improvements */}
          <div className="mt-10 rounded-2xl bg-slate-50 p-6">

            <h4 className="font-semibold text-slate-900">
              AI Improvements
            </h4>

            <div className="mt-5 space-y-4 text-sm">

              <div className="flex items-center justify-between">
                <span>✅ Grammar Improved</span>
                <span className="font-medium text-green-600">Fixed</span>
              </div>

              <div className="flex items-center justify-between">
                <span>✅ ATS Score</span>
                <span className="font-medium text-blue-600">
                  72 → 96
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>✅ Keywords Added</span>
                <span className="font-medium text-purple-600">
                  +18
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>✅ Professional Tone</span>
                <span className="font-medium text-cyan-600">
                  Enhanced
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}