import SectionHeading from "@/components/ui/SectionHeading";
import {
  Sparkles,
  ScanSearch,
  FileText,
  Download,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Resume Writing",
    description:
      "Rewrite your resume with AI that improves clarity, grammar, impact and professional tone in seconds.",
  },
  {
    icon: ScanSearch,
    title: "ATS Optimization",
    description:
      "Boost your ATS score with smart keyword suggestions and recruiter-friendly formatting.",
  },
  {
    icon: FileText,
    title: "Modern Templates",
    description:
      "Choose from beautiful, ATS-friendly templates designed to impress recruiters.",
  },
  {
    icon: Download,
    title: "One-Click PDF Export",
    description:
      "Export your resume instantly as a clean, professional PDF ready for job applications.",
  },
];

export default function Features() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-32">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          title="Everything You Need To Get Hired"
          subtitle="Powerful AI tools combined with professional resume building to help you stand out from thousands of applicants."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-8 inline-flex rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-4 text-white shadow-lg">

                  <Icon size={30} />

                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-5 leading-8 text-slate-600">
                  {feature.description}
                </p>

                {/* Arrow */}
                <div className="mt-8 flex justify-end">

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