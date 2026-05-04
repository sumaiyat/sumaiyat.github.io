import { TrendingUp, Users, Zap, Target, BarChart3, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const achievements = [
  {
    title: "Repocket Global Scaling",
    description: "Structured product, engineering, and growth processes from the ground up, enabling the platform to scale efficiently across multiple global markets with 95%+ U.S. conversion.",
    metrics: ["~30% faster release cycles", "15+ provider integrations", "Highest revenue in company history"],
    icon: Rocket,
    color: "primary",
  },
  {
    title: "10 Minute School Growth",
    description: "Drove product-led strategies at Bangladesh's leading EdTech platform, launching live class services, assessment engines, and IELTS mock test services.",
    metrics: ["23% YoY revenue growth", "40% fiscal revenue from new launches", "20% NPS improvement"],
    icon: TrendingUp,
    color: "accent",
  },
  {
    title: "Agile Transformation",
    description: "Optimized Agile practices across 3+ Scrum teams, facilitating cross-functional collaboration among PMs, QAs, and Developers.",
    metrics: ["75% → 92% sprint completion", "Improved team velocity", "Enhanced delivery consistency"],
    icon: Zap,
    color: "primary",
  },
  {
    title: "User Retention Optimization",
    description: "Used Metabase and Mixpanel analytics to identify user drop-offs and implement targeted improvements across the user journey.",
    metrics: ["12% abandonment reduction", "Double-digit DAU growth", "Stronger regional retention"],
    icon: Target,
    color: "accent",
  },
  {
    title: "SaaS Platform Development",
    description: "Spearheaded development of internal SaaS tools including ERP, CMS, CRM, and LMS systems optimizing academic operations and learner lifecycle.",
    metrics: ["End-to-end B2B/B2C flows", "Scalable payment systems", "Streamlined operations"],
    icon: BarChart3,
    color: "primary",
  },
  {
    title: "Cross-functional Leadership",
    description: "Led and mentored teams of 30+ members across 7 product streams, bridging engineering, operations, partnerships, and community insights.",
    metrics: ["7 product streams managed", "30+ team members", "15% faster time-to-market"],
    icon: Users,
    color: "accent",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 relative bg-secondary/30">
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
