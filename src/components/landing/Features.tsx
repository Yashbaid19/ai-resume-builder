import SectionHeading from "@/components/ui/SectionHeading";
import {
  Sparkles,
  ScanSearch,
  FileText,
  Download,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Resume Writing",
    description:
      "Rewrite your resume with professional, impactful language.",
  },
  {
    icon: ScanSearch,
    title: "ATS Optimization",
    description:
      "Improve compatibility with Applicant Tracking Systems.",
  },
  {
    icon: FileText,
    title: "Modern Templates",
    description:
      "Choose from clean, recruiter-friendly resume designs.",
  },
  {
    icon: Download,
    title: "One-Click PDF Export",
    description:
      "Download your resume instantly in a professional PDF format.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          title="Everything You Need To Get Hired"
          subtitle="Powerful AI tools combined with professional resume building to help you stand out."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 text-blue-600">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}