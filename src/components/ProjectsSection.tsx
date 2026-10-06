import { TrendingUp, Users, Zap, Target, BarChart3, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const achievements = [
  {
    title: "CWP Platform Product Leadership",
    description: "Sole product lead for the CWP platform at National Services Group, Inc., owning strategy, discovery, roadmap prioritization, and end-to-end delivery in partnership with CEO, VP, and CTO.",
    metrics: ["Sole product lead", "Executive & CTO partnership", "End-to-end PRDs & API delivery"],
    icon: Rocket,
    color: "primary",
  },
  {
    title: "Repocket Monetization & Scaling",
    description: "Head of Product & Engineering leading 12 cross-functional members, migrating platform from GoKart to Affise with 15+ external provider integrations and EPC-based ranking logic.",
    metrics: ["30% release cycle reduction", "15+ provider integrations", "95%+ U.S. conversion efficiency"],
    icon: Zap,
    color: "accent",
  },
  {
    title: "10 Minute School Growth & Revenue",
    description: "Owned end-to-end B2B/B2C payment flows, launched live class platforms, and built IELTS mock test product within Skill Development portfolio.",
    metrics: ["23% YoY revenue growth", "40% BU revenue from new launch", "12% checkout abandonment drop"],
    icon: TrendingUp,
    color: "primary",
  },
  {
    title: "Agile & Scrum Delivery Excellence",
    description: "Led Agile delivery across 3 Scrum teams of PMs, developers, and QA, restructuring backlog grooming, release planning workflows, and blocker management.",
    metrics: ["75% → 92% sprint completion", "3 Scrum teams aligned", "Dependency management"],
    icon: Target,
    color: "accent",
  },
  {
    title: "Enterprise ERP & Workflow Automation",
    description: "Led development of internal ERP, CMS, CRM, and LMS systems used by 500+ academic staff, translating complex operational workflows into scalable internal tools.",
    metrics: ["500+ academic staff supported", "Automated operational workflows", "Scalable internal systems"],
    icon: BarChart3,
    color: "primary",
  },
  {
    title: "Multi-Vertical Marketplace Leadership",
    description: "Coordinated 30+ cross-functional team members across 7 verticals (e-commerce, logistics, recruitment), delivering technical PRDs and improving system reliability.",
    metrics: ["7 product verticals managed", "22% client satisfaction boost", "15% faster time-to-market"],
    icon: Users,
    color: "accent",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">Key Achievements</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Impact & <span className="text-gradient">Results</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Highlights from my career driving product growth, team performance, 
              and business outcomes across various industries.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={cn(
                  "group p-6 rounded-2xl border border-border bg-card hover:shadow-glow transition-all duration-500",
                  "hover:-translate-y-1"
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300",
                    achievement.color === "primary"
                      ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                      : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                  )}
                >
                  <achievement.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {achievement.description}
                </p>

                {/* Metrics */}
                <div className="space-y-2">
                  {achievement.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground font-medium">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
