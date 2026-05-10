import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";

export const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow animation-delay-500" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-medium mb-4 opacity-0 animate-fade-up">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 opacity-0 animate-fade-up animation-delay-100">
            <span className="text-foreground">Syeda Sumaiya</span>
            <br />
            <span className="text-gradient">Tabassum Zakaria</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 opacity-0 animate-fade-up animation-delay-200">
            Senior Product Manager (Product & Engineering Lead)
          </p>
          <p className="text-lg text-primary mb-8 opacity-0 animate-fade-up animation-delay-200">
            Agile Practitioner
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up animation-delay-300">
            Strategic and data-driven Product & Engineering Leader with 9+ years of experience
            building and scaling B2B and B2C products across EdTech, SaaS, and digital consumer markets.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-12 opacity-0 animate-fade-up animation-delay-400">
            <a
              href="https://www.linkedin.com/in/sumaiyatzakaria"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:sumaiyatzakaria@gmail.com"
              className="p-3 rounded-full border border-border bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+15627726552"
              className="p-3 rounded-full border border-border bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToAbout}
            className="opacity-0 animate-fade-up animation-delay-500 group"
          >
            <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
