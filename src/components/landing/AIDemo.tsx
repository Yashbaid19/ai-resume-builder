import SectionHeading from "@/components/ui/SectionHeading";
export default function AIDemo() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">

        <SectionHeading
        title="See AI Improve Your Resume"
        subtitle="Upload your resume and watch AI analyze, improve and optimize every section in just a few seconds."
        />

        <div className="mx-auto mt-20 max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 shadow-2xl">

          <div className="flex items-center justify-between">

            <h3 className="text-xl font-bold">
             Resume.pdf
            </h3>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Uploaded
            </span>

          </div>

          <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-200">

            <div className="h-full w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />

          </div>

          <div className="mt-12 space-y-5">

            <div className="flex justify-between">
              <span> Grammar</span>
              <span>✅ Improved</span>
            </div>

            <div className="flex justify-between">
              <span>ATS Compatibility</span>
              <span>✅ Optimized</span>
            </div>

            <div className="flex justify-between">
              <span>Missing Keywords</span>
              <span>✅ 12 Missing Keywords Added</span>
            </div>

            <div className="flex justify-between">
              <span>Professional Tone</span>
              <span>✅ Rewritten</span>
            </div>

          </div>

          <div className="mt-14 rounded-2xl bg-slate-100 p-8 text-center">

            <p className="text-lg text-slate-600">
              Resume Score
            </p>

            <h2 className="mt-3 text-6xl font-black text-blue-600">
              91%
            </h2>

          </div>

        </div>

      </div>
    </section>
  );
}