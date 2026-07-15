import SectionHeading from "@/components/ui/SectionHeading";
import { Upload, Sparkles, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Resume",
    description:
      "Upload your existing resume in PDF or DOCX format securely.",
  },
  {
    icon: Sparkles,
    title: "AI Improves Everything",
    description:
      "ResumeAI rewrites content, fixes grammar, improves ATS score and adds missing keywords.",
  },
  {
    icon: Download,
    title: "Download Instantly",
    description:
      "Export a beautiful ATS-friendly PDF ready for job applications.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          title="How ResumeAI Works"
          subtitle="Three simple steps to build a stronger resume."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <Icon size={28} />
                </div>

                <div className="mt-8">

                  <span className="text-sm font-semibold text-blue-600">
                    Step {index + 1}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-7">
                    {step.description}
                  </p>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}