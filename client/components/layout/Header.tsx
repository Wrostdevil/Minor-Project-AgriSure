import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-extrabold text-xl">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Leaf className="h-5 w-5" />
          </span>
          AgriSure
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/weather">Weather</NavItem>
          <NavItem to="/assistant">Assistant</NavItem>
        </nav>
        <div className="md:hidden">
          <Button variant="outline" size="icon" aria-label="Open menu" onClick={() => setOpen((v) => !v)}>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </Button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-3 flex flex-col gap-2">
            <MobileLink to="/" onClick={() => setOpen(false)}>
              Home
            </MobileLink>
            <MobileLink to="/weather" onClick={() => setOpen(false)}>
              Weather
            </MobileLink>
            <MobileLink to="/assistant" onClick={() => setOpen(false)}>
              Assistant
            </MobileLink>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `transition-colors hover:text-foreground ${isActive ? "text-foreground" : "text-muted-foreground"}`
      }
      end
    >
      {children}
    </NavLink>
  );
}

function MobileLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link to={to} onClick={onClick} className="py-2 text-base text-foreground">
      {children}
    </Link>
  );
}
