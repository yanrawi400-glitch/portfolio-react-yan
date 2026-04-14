import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer 
      id="footer" 
      className="bg-card border-t border-border py-20"
      data-testid="section-footer"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          
          <div>
            <div className="mono text-primary mb-6">03. CONTATO</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Vamos construir <br/> algo real.
            </h2>
            <a 
              href="mailto:contato@yanrawi.dev" 
              className="inline-flex items-center gap-2 text-xl hover:text-primary transition-colors group border-b border-border pb-2"
              data-testid="link-email"
            >
              contato@yanrawi.dev 
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="flex flex-col md:items-end space-y-4 mono text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors" data-testid="link-github">GitHub</a>
            <a href="#" className="hover:text-foreground transition-colors" data-testid="link-twitter">X</a>
            <a href="#" className="hover:text-foreground transition-colors" data-testid="link-linkedin">LinkedIn</a>
            
            <div className="mt-12 pt-8 md:text-right border-t border-border w-full md:w-auto md:min-w-[200px]">
              &copy; {new Date().getFullYear()} Yan Rawi<br/>
              TODOS OS DIREITOS RESERVADOS.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
