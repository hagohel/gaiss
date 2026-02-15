import { clsx } from "clsx";
import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-black/20 disabled:opacity-50";
  const styles = {
    primary: "bg-black text-white hover:bg-black/90",
    secondary: "bg-white text-black border border-neutral-200 hover:bg-neutral-50",
    ghost: "bg-transparent text-black hover:bg-neutral-100"
  }[variant];

  return <button className={clsx(base, styles, className)} {...props} />;
}
