import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "light" | "outline-white";
  size?: "default" | "large";
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  size = "default",
  className = "",
  href,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out focus:outline-none";

  const variants = {
    primary: "bg-[#1C1C1C] text-white hover:opacity-90",
    secondary: "bg-[#B59672] text-white hover:opacity-90",
    outline: "border border-[#1C1C1C]/20 text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white",
    light: "bg-white text-[#1C1C1C] hover:bg-white/90",
    "outline-white": "border-2 border-white/90 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#1C1C1C]",
  };

  const sizes = {
    default: "px-6 py-3 text-sm",
    large: "px-8 py-4 text-base",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}