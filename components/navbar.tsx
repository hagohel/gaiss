"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/committee", label: "Committee" },
  { href: "/keynotes", label: "Keynotes" },
  { href: "/cfp", label: "CFP" },
  { href: "/registration", label: "Registration" },
  { href: "/submission", label: "Submission" },
  { href: "/contact", label: "Contact" },
];

export function Navbar({
  title = "GAISS",
  subtitle = "IEEE Conference on Generative AI for Secure Systems",
  registerHref = "/registration",
}: {
  title?: string;
  subtitle?: string;
  registerHref?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-baseline gap-2 min-w-0">
          <span className="font-semibold tracking-tight">{title}</span>
          <span className="hidden md:inline text-sm text-[rgb(var(--muted))] truncate">
            {subtitle}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[rgb(var(--fg))] hover:text-[rgb(var(--primary))]"
            >
              {item.label}
            </Link>
          ))}

          <Link href={registerHref}>
            <Button className="rounded-full px-5 bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] hover:opacity-90">
  Register
</Button>
          </Link>
          <Link href="/studio" className="text-sm text-[rgb(var(--fg))] hover:text-[rgb(var(--primary))]">
            Admin
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
         <ThemeToggle />
         <Link href={registerHref} className="hidden sm:inline-flex">
            <Button className="rounded-full px-4">Register</Button>
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="lg:hidden border-t border-[rgb(var(--border))] bg-[rgb(var(--bg))]">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[rgb(var(--fg))]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center gap-3 pt-2">
              <Link href={registerHref} onClick={() => setOpen(false)}>
                <Button className="rounded-full px-5">Register</Button>
              </Link>
              <Link
                href="/studio"
                className="text-sm text-[rgb(var(--fg))]"
                onClick={() => setOpen(false)}
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
