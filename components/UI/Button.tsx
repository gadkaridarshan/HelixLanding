import type { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
}: ButtonProps) => {
  const baseClasses =
    "rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variantClasses =
    variant === "primary"
      ? "bg-indigo-600 text-white hover:bg-indigo-700"
      : "border border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700";
  const sizeClasses =
    size === "sm"
      ? "h-9 px-3 text-sm"
      : size === "lg"
        ? "h-11 px-6 text-lg"
        : "h-10 px-4 text-base";

  return (
    <button className={`${baseClasses} ${variantClasses} ${sizeClasses}`}>
      {children}
    </button>
  );
};
