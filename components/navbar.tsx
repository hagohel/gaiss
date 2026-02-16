"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

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
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-baseline gap-2 min-w-0">
          <span className="font-semibold tracking-tight">{title}</span>
          <span className="hidden md:inline text-neutral-600 truncate">
            {subtitle}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-700 hover:text-black"
            >
              {item.label}
            </Link>
          ))}

          <Link href={registerHref}>
            <Button className="rounded-full px-5">Register</Button>
          </Link>

          <Link href="/studio" className="text-sm text-neutral-700 hover:text-black">
            Admin
          </Link>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
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
        <div className="lg:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-800"
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
                className="text-sm text-neutral-700"
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
