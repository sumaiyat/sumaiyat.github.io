import { Linkedin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo/Name */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display font-bold text-gradient">STZ</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-sm text-muted-foreground">Sumaiya Tabassum Zakaria</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/sumaiyatzakaria"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:sumaiyatzakaria@gmail.com"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+15627726552"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};
