type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-5xl font-black tracking-tight text-slate-900">
        {title}
      </h2>

      <p className="mt-6 text-xl leading-8 text-slate-600">
        {subtitle}
      </p>
    </div>
  );
}