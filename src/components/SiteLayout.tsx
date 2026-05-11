import { Link, Outlet } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function SiteLayout() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () =>
      setTime(new Intl.DateTimeFormat("en-US", {
        hour: "2-digit", minute: "2-digit",
        timeZone: "America/Indiana/Indianapolis", hour12: false,
      }).format(new Date()));
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="font-serif text-xl">AK</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {nav.map((n) => (
              <a key={n.href} href={n.href}
                 className="px-3 py-1.5 rounded-full transition-colors hover:bg-secondary">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground tabular-nums">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Bloomington — {time}
          </div>
        </div>
      </header>

      <main className="flex-1"><Outlet /></main>

      <footer className="border-t border-border/60 mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-wrap justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Aishwarya Kore.</div>
          <div>Built with intention.</div>
        </div>
      </footer>
    </div>
  );
}
