import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ThemeProvider } from "../components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "GAISS — IEEE Conference on Generative AI for Secure Systems",
    template: "%s — GAISS"
  },
  description: "IEEE Conference on Generative AI for Secure Systems (GAISS)"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
