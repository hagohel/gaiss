import Link from "next/link";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/", label: "Home" },
  { href: "/committee", label: "Committee" },
  { href: "/keynotes", label: "Keynotes" },
  { href: "/cfp", label: "CFP" },
  { href: "/registration", label: "Registration" },
  { href: "/submission", label: "Submission" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          GAISS
          <span className="ml-2 hidden sm:inline text-neutral-500 font-normal">
            IEEE Conference on Generative AI for Secure Systems
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="hover:text-black">
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/registration">
            <Button className="hidden sm:inline-flex">Register</Button>
          </Link>
          <Link href="/studio" className="text-sm text-neutral-600 hover:text-black">
            Admin
          </Link>
        </div>
      </div>
    </header>
  );
}
