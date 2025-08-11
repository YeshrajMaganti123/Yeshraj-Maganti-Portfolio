import * as React from "react";
import { cn } from "../utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({ className, variant="primary", size="md", ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-xl font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed gap-2";
  const variants = {
    primary: "bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 shadow-[0_8px_30px_rgba(99,102,241,0.35)]",
    secondary: "bg-white/10 hover:bg-white/15 text-white px-4 py-2 border border-white/15",
    outline: "bg-transparent hover:bg-white/10 text-white px-4 py-2 border border-white/20",
    ghost: "bg-transparent hover:bg-white/10 text-white px-3 py-2",
  };
  const sizes = { sm: "text-xs h-8", md: "text-sm h-10", lg: "text-base h-12 px-5" };
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}
