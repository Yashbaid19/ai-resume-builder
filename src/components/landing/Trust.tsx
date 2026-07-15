import SectionHeading from "@/components/ui/SectionHeading";
import {
  GraduationCap,
  Briefcase,
  Repeat,
  Laptop,
  Search,
  User,
} from "lucide-react";

const users = [
  {
    icon: GraduationCap,
    title: "Students",
  },
  {
    icon: User,
    title: "Fresh Graduates",
  },
  {
    icon: Briefcase,
    title: "Working Professionals",
  },
  {
    icon: Repeat,
    title: "Career Switchers",
  },
  {
    icon: Laptop,
    title: "Freelancers",
  },
  {
    icon: Search,
    title: "Job Seekers",
  },
];

const technologies = [
  "OpenAI",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Supabase",
  "Vercel",
];

export default function Trust() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          title="Built For Everyone Who Wants More Interviews"
          subtitle="Whether you're applying for your first job or your next promotion, ResumeAI helps you create stronger resumes."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {users.map((user) => {
            const Icon = user.icon;

            return (
              <div
                key={user.title}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-semibold">
                  {user.title}
                </h3>
              </div>
            );
          })}

        </div>

        <div className="mt-24 text-center">

          <h3 className="text-2xl font-bold text-slate-900">
            Built With Trusted Technologies
          </h3>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            {technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium shadow-sm"
              >
                {tech}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}