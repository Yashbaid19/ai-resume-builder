import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ResumePreview from "@/components/landing/ResumePreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">

      {/* Premium Background */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_60%)]" />

      {/* Floating Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[180px]" />

        <div className="absolute right-10 top-32 h-80 w-80 rounded-full bg-purple-500/15 blur-[170px]" />

        <div className="absolute left-10 top-56 h-72 w-72 rounded-full bg-cyan-400/15 blur-[170px]" />

      </div>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-24 px-6 pt-32 pb-24 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">

          <Badge>
            ✨ AI Powered Resume Builder
          </Badge>

          <h1 className="mt-8 text-6xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-7xl">

            Land Interviews.

            <br />

            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Not Rejections.
            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-[620px] text-xl leading-9 text-slate-600 lg:mx-0">

            Create ATS-friendly resumes, rewrite your experience with AI,
            optimize every section, and export beautiful professional resumes
            in just a few minutes.

          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-5 lg:justify-start">

            <Button>
              Build My Resume
            </Button>

            <Button variant="secondary">
              Live Demo
            </Button>

          </div>

          {/* Premium Stats */}
          <div className="mt-16 flex flex-wrap justify-center gap-5 lg:justify-start">

            <div className="rounded-2xl bg-white px-8 py-5 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <h3 className="text-3xl font-bold text-slate-900">
                25K+
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Resumes Created
              </p>

            </div>

            <div className="rounded-2xl bg-white px-8 py-5 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <h3 className="text-3xl font-bold text-slate-900">
                92%
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                ATS Success Rate
              </p>

            </div>

            <div className="rounded-2xl bg-white px-8 py-5 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <h3 className="text-3xl font-bold text-slate-900">
                ★ 4.9
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                User Rating
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center lg:justify-end">

          <ResumePreview />

        </div>

      </div>

    </section>
  );
}