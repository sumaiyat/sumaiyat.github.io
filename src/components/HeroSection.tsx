import { useEffect, useState } from "react";
import { ArrowDown, Linkedin, Mail, Phone } from "lucide-react";

// Pixel browser-bot: browser window body + eyes + arms + legs, like Vercel Ship
const PixelBot = ({ size = 40, style }: { size?: number; style?: React.CSSProperties }) => {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 40 56"
      fill="none"
      style={style}
    >
      {/* Body - browser window */}
      <rect x="4" y="0" width="32" height="28" rx="3" fill="#2a2a2a" />
      {/* Top bar */}
      <rect x="4" y="0" width="32" height="7" rx="3" fill="#3a3a3a" />
      <rect x="4" y="4" width="32" height="3" fill="#3a3a3a" />
      {/* Traffic dots */}
      <rect x="8" y="2" width="3" height="3" rx="1" fill="#555" />
      <rect x="13" y="2" width="3" height="3" rx="1" fill="#555" />
      <rect x="18" y="2" width="3" height="3" rx="1" fill="#555" />
      {/* Screen area */}
      <rect x="6" y="8" width="28" height="18" rx="1" fill="#111" />
      {/* Eyes - two vertical bars like || */}
      <rect x="12" y="13" width="5" height="8" rx="1" fill="#e0e0e0" />
      <rect x="23" y="13" width="5" height="8" rx="1" fill="#e0e0e0" />
      {/* Left arm */}
      <rect x="0" y="10" width="4" height="10" rx="2" fill="#3a3a3a" className="pixel-bot-arm-l" />
      {/* Right arm */}
      <rect x="36" y="10" width="4" height="10" rx="2" fill="#3a3a3a" className="pixel-bot-arm-r" />
      {/* Left leg */}
      <rect x="10" y="28" width="7" height="12" rx="2" fill="#3a3a3a" className="pixel-bot-leg-l" />
      {/* Right leg */}
      <rect x="23" y="28" width="7" height="12" rx="2" fill="#3a3a3a" className="pixel-bot-leg-r" />
      {/* Feet */}
      <rect x="8" y="37" width="11" height="5" rx="2" fill="#2a2a2a" className="pixel-bot-leg-l" />
      <rect x="21" y="37" width="11" height="5" rx="2" fill="#2a2a2a" className="pixel-bot-leg-r" />
    </svg>
  );
};

const BOT_COUNT = 8;
const BOTS = Array.from({ length: BOT_COUNT }, (_, i) => ({
  id: i,
  x: 5 + (i / BOT_COUNT) * 90 + (Math.random() * 8 - 4),
  y: 10 + Math.random() * 75,
  size: 28 + Math.random() * 20,
  opacity: 0.18 + Math.random() * 0.22,
  duration: 3.5 + Math.random() * 2,
  delay: -(Math.random() * 3.5),
  driftDuration: 20 + Math.random() * 20,
  driftDelay: -(Math.random() * 20),
}));



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

      {/* Floating pixel bots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {BOTS.map((bot) => (
          <div
            key={bot.id}
            className="absolute"
            style={{
              left: `${bot.x}%`,
              top: `${bot.y}%`,
              animation: `bot-drift ${bot.driftDuration}s ease-in-out infinite`,
              animationDelay: `${bot.driftDelay}s`,
            }}
          >
            <PixelBot
              size={bot.size}
              style={{
                opacity: bot.opacity,
                animation: `bot-waddle ${bot.duration}s ease-in-out infinite`,
                animationDelay: `${bot.delay}s`,
              }}
            />
          </div>
        ))}
      </div>

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
            <span className="text-foreground">Syeda Sumaiya</span>
            <br />
            <span className="text-gradient">Tabassum Zakaria</span>
          </h1>

          {/* Title */}
          <p
            className={`text-xl md:text-2xl text-muted-foreground mb-4 hero-reveal ${isVisible ? "hero-reveal--visible" : ""}`}
            style={{ transitionDelay: "0.45s" }}
          >
            Senior Product Manager (Product & Engineering Lead)
          </p>
          <p
            className={`text-lg text-primary mb-8 hero-reveal ${isVisible ? "hero-reveal--visible" : ""}`}
            style={{ transitionDelay: "0.6s" }}
          >
            SaaS Platforms & Growth | B2B & B2C Products | Monetization, Retention & Integrations
          </p>

          {/* Description */}
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto mb-12 hero-reveal ${isVisible ? "hero-reveal--visible" : ""}`}
            style={{ transitionDelay: "0.75s" }}
          >
            Senior Product Manager & Engineering Lead with {yearsOfExperience}+ years of experience building scalable B2B and B2C SaaS platforms. I specialize in bridging growth strategy with technical execution to drive user retention, optimize monetization, and accelerate revenue.
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
