import type { ReactNode } from "react";
import { clsx } from "clsx";

export function Section({
  title,
  subtitle,
  children,
  className
}: {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={clsx("py-14", className)}>
      <div className="container">
        {(title || subtitle) && (
          <div className="mb-8">
            {title && <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>}
            {subtitle && <p className="mt-2 text-neutral-600 max-w-2xl">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
