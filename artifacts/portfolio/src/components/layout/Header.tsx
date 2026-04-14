import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-border py-4" 
          : "bg-transparent border-transparent py-6"
      )}
      data-testid="header"
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div 
          className="text-xl font-bold mono cursor-pointer tracking-tighter"
          onClick={() => scrollTo("hero")}
          data-testid="logo"
        >
          [WKSHP]
        </div>
        
        <nav className="hidden md:flex items-center gap-8 mono text-sm" data-testid="nav-links">
          <button onClick={() => scrollTo("about")} className="nav-link text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-about">
            01. ABOUT
          </button>
          <button onClick={() => scrollTo("projects")} className="nav-link text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-projects">
            02. WORK
          </button>
          <button onClick={() => scrollTo("footer")} className="nav-link text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-contact">
            03. CONTACT
          </button>
        </nav>
      </div>
    </header>
  );
}
