import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
export default function Hero() {
  return (
    <section className="bg-slate-50">

      <div className="mx-auto flex py-24 md:py-32 max-w-5xl flex-col items-center justify-center px-6 text-center">

        <Badge>
            ✨ AI Powered Resume Builder
        </Badge>

        <h1 className="mt-8 text-6xl font-black tracking-tight text-slate-900 md:text-7xl">

          Land Interviews.

          <br />

          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Not Rejections.
          </span>

        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
          Create ATS-friendly resumes, rewrite your experience with AI,
          and export professional resumes in minutes.
        </p>

        <div className="mt-12 flex gap-5">

          <Button>
            Build My Resume
          </Button>

          <Button variant="secondary">
            Live Demo
          </Button>

        </div>

      </div>

    </section>
  );
}