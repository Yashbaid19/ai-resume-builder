import SectionHeading from "@/components/ui/SectionHeading";
import { Upload, Sparkles, Download, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Resume",
    description:
      "Upload your existing resume in PDF or DOCX format securely. Your data stays private and encrypted.",
  },
  {
    icon: Sparkles,
    title: "AI Optimizes Everything",
    description:
      "Our AI rewrites your content, improves grammar, boosts ATS compatibility and enhances impact.",
  },
  {
    icon: Download,
    title: "Download & Apply",
    description:
      "Export a polished ATS-friendly PDF and start applying to jobs with confidence.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-32">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          title="How ResumeAI Works"
          subtitle="Three simple steps to create a professional resume in just a few minutes."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* Step Number */}
                <div className="absolute right-8 top-8 text-5xl font-black text-slate-100">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">

                  <Icon size={30} />

                </div>

                {/* Content */}
                <div className="mt-8">

                  <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                    Step {index + 1}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {step.description}
                  </p>

                </div>

                {/* Hover Arrow */}
                <div className="mt-10 flex justify-end">

                  <ArrowRight
                    size={22}
                    className="text-slate-400 transition-all duration-300 group-hover:translate-x-2 group-hover:text-blue-600"
                  />

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}