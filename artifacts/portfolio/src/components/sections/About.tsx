import { useEffect, useRef } from "react";
import profileImg from "@/assets/images/profile.png";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-32 bg-secondary/50"
      data-testid="section-about"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          
          <div className="w-full md:w-5/12 reveal-on-scroll">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4"></div>
              <img 
                src={profileImg} 
                alt="Portrait" 
                className="w-full h-full object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                data-testid="img-profile"
              />
              <div className="absolute -left-8 top-12 mono text-xs rotate-[-90deg] origin-left text-muted-foreground tracking-widest hidden lg:block">
                EST. 2018 //
              </div>
            </div>
          </div>

          <div className="w-full md:w-7/12">
            <div className="mono text-primary mb-6 reveal-on-scroll">01. THE CRAFT</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight reveal-on-scroll delay-100">
              Obsessed with the details others ignore.
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground reveal-on-scroll delay-200">
              <p>
                A great tool should feel invisible. When the interface gets out of the way, the user can focus entirely on their work. That's the bar I set for every project.
              </p>
              <p>
                I specialize in bridging the gap between rigorous engineering and refined design. Whether it's a complex data dashboard or an immersive editorial piece, I build systems that scale without losing their soul.
              </p>
              
              <div className="pt-8 border-t border-border mt-8">
                <div className="mono text-sm text-foreground mb-4 font-bold">CORE CAPABILITIES</div>
                <div className="grid grid-cols-2 gap-4 mono text-sm">
                  <div>- TypeScript / React</div>
                  <div>- UI Architecture</div>
                  <div>- Performance Tuning</div>
                  <div>- Motion & Interaction</div>
                  <div>- Design Systems</div>
                  <div>- WebGL / Canvas</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
