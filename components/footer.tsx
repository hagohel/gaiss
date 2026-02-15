export function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="container py-10 text-sm text-neutral-600 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} GAISS — IEEE Conference on Generative AI for Secure Systems</p>
        <p className="text-neutral-500">Built with Next.js + Sanity on Vercel</p>
      </div>
    </footer>
  );
}
