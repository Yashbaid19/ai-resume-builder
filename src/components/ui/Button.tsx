type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const baseStyle =
    "rounded-xl px-8 h-14 font-semibold transition duration-200";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg",

    secondary:
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </button>
  );
}