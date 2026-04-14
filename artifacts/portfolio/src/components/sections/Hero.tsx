import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrolled = window.scrollY;
      containerRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      containerRef.current.style.opacity = `${1 - scrolled / 700}`;
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-[100dvh] relative flex items-center pt-20 overflow-hidden"
      data-testid="section-hero"
    >
      {/* Background grain/noise overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-10 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div ref={containerRef} className="max-w-4xl">
          <div className="mono text-primary mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            SYSTEM INITIALIZED //
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Building digital <br/>
            <span className="text-muted-foreground italic font-serif font-normal">tools</span> with precision.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Senior Design Engineer. Crafting interfaces that respect the user's time and attention. No fluff, just functional elegance.
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <button 
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center gap-4 mono text-sm uppercase tracking-widest hover:text-primary transition-colors"
              data-testid="button-view-work"
            >
              <span>View the work</span>
              <span className="w-10 h-[1px] bg-foreground group-hover:bg-primary transition-colors group-hover:w-16"></span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
