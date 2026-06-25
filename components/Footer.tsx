export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Manav Sharma. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/60 text-center md:text-right max-w-md">
          Built with Next.js, React, Tailwind CSS, shadcn/ui, Framer Motion and Three.js.
        </p>
      </div>
    </footer>
  );
}
