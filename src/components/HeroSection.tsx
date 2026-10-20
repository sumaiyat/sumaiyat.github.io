import { useEffect, useState } from "react";
import { ArrowDown, Linkedin, Mail, Phone } from "lucide-react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const yearsOfExperience = new Date().getFullYear() - 2016;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Animated grid pattern (Vercel Ship style) */}
      <div className="hero-grid absolute inset-0 pointer-events-none" />

      {/* Scanline beam effect */}
      <div className="hero-scanline absolute inset-0 pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow animation-delay-500" />

      {/* Central radial glow */}
      <div className="hero-radial-glow absolute pointer-events-none" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p
            className={`text-primary font-medium mb-4 hero-reveal ${isVisible ? "hero-reveal--visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            Hello, I'm
          </p>

          {/* Name */}
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 hero-reveal ${isVisible ? "hero-reveal--visible" : ""}`}
            style={{ transitionDelay: "0.25s" }}
          >
            <span className="text-foreground">Sumaiya Zakaria</span>
          </h1>

          {/* Title */}
          <p
            className={`text-xl md:text-2xl text-foreground font-semibold mb-3 hero-reveal ${isVisible ? "hero-reveal--visible" : ""}`}
            style={{ transitionDelay: "0.45s" }}
          >
            Senior Technical Product Manager
          </p>
          <p
            className={`text-base md:text-lg text-primary font-mono mb-6 hero-reveal ${isVisible ? "hero-reveal--visible" : ""}`}
            style={{ transitionDelay: "0.6s" }}
          >
            Payments | Integrations | AI Products | B2B &amp; B2C SaaS
          </p>

          {/* Location & Authorization Badge */}
          <div
            className={`flex flex-wrap items-center justify-center gap-2 mb-8 hero-reveal ${isVisible ? "hero-reveal--visible" : ""}`}
            style={{ transitionDelay: "0.7s" }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-secondary/80 border border-border text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Irvine, CA
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 border border-primary/20 text-primary">
              Authorized to work in the US
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-accent/10 border border-accent/20 text-accent">
              Ex Google
            </span>
          </div>

          {/* Description */}
          <p
            className={`text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 hero-reveal ${isVisible ? "hero-reveal--visible" : ""}`}
            style={{ transitionDelay: "0.8s" }}
          >
            I build SaaS platforms where payments, integrations and revenue meet. Former Head of Product &amp; Engineering, ex Google, with 10+ years turning complex operations into products that ship and scale. Now building hands on with AI.
          </p>

          {/* Social Links */}
          <div
            className={`flex items-center justify-center gap-4 mb-12 hero-reveal ${isVisible ? "hero-reveal--visible" : ""}`}
            style={{ transitionDelay: "0.9s" }}
          >
            <a
              href="https://www.linkedin.com/in/sumaiyatzakaria"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link p-3 rounded-full border border-border bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:sumaiyatzakaria@gmail.com"
              className="hero-social-link p-3 rounded-full border border-border bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+15627726552"
              className="hero-social-link p-3 rounded-full border border-border bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToAbout}
            className={`group hero-reveal ${isVisible ? "hero-reveal--visible" : ""}`}
            style={{ transitionDelay: "1.05s" }}
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
