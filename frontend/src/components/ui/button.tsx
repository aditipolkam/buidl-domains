interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  disabled,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center";
  const variants = {
    primary: "bg-primary hover:bg-[#4989a7]/90 text-white",
    secondary: "bg-secondary hover:bg-[#ffafbd]/90 text-white",
    outline: "border-2 border-primary text-[#4989a7] hover:bg-[#4989a7]/10",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${
        sizes[size]
      } ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
