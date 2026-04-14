import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import imgProj1 from "@/assets/images/project-1.png";
import imgProj2 from "@/assets/images/project-2.png";
import imgProj3 from "@/assets/images/project-3.png";
import imgProj4 from "@/assets/images/project-4.png";

const PROJECTS = [
  {
    id: "p1",
    title: "Nexus Analytics",
    description: "A high-density data visualization dashboard for institutional traders. Built to handle millions of rows without dropping a frame.",
    tech: ["React", "WebGL", "TypeScript"],
    image: imgProj1,
    link: "#"
  },
  {
    id: "p2",
    title: "The Observer",
    description: "An editorial platform focusing on long-form journalism. Typography-first approach with rigorous grid systems.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    image: imgProj2,
    link: "#"
  },
  {
    id: "p3",
    title: "Aura System",
    description: "Open-source component library and design system adopted by over 20 enterprise teams. Complete with full a11y support.",
    tech: ["Radix UI", "CSS Modules", "Storybook"],
    image: imgProj3,
    link: "#"
  },
  {
    id: "p4",
    title: "Kinetix Store",
    description: "A brutalist e-commerce experience for a conceptual fashion brand. Custom cart implementation and bespoke interactions.",
    tech: ["React", "Zustand", "Stripe API"],
    image: imgProj4,
    link: "#"
  }
];

export function Projects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="projects" 
      className="py-32"
      data-testid="section-projects"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 reveal-on-scroll">
          <div className="mono text-primary mb-6">02. SELECTED WORKS</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Proof of concept.
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-20 items-center group reveal-on-scroll`}
              data-testid={`project-card-${project.id}`}
            >
              
              <div className="w-full md:w-3/5 overflow-hidden relative bg-muted aspect-[16/9]">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  data-testid={`project-img-${project.id}`}
                />
              </div>

              <div className="w-full md:w-2/5">
                <div className="mono text-xs text-muted-foreground mb-6 flex gap-3">
                  {project.tech.map(t => (
                    <span key={t} className="border border-border px-2 py-1 uppercase">{t}</span>
                  ))}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-2 mono text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors"
                  data-testid={`project-link-${project.id}`}
                >
                  View Case Study <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
