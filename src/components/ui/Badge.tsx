type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700 animate-[float_5s_ease-in-out_infinite]">
      {children}
    </div>
  );
}