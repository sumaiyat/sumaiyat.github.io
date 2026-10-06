import { BarChart3, Award, Layout, Cpu, TrendingUp, Server } from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
  {
    category: "Core Product & Growth",
    icon: TrendingUp,
    items: [
      "Product Strategy",
      "Roadmapping",
      "OKRs",
      "Agile (Scrum, Kanban)",
      "Product-Led Growth",
      "Monetization Strategy",
      "Retention & Funnel Optimization",
      "Stakeholder Management",
    ],
    color: "primary",
  },
  {
    category: "Analytics & Experimentation",
    icon: BarChart3,
    items: [
      "Mixpanel",
      "GA4",
      "Metabase",
      "Looker Studio",
      "SQL (Basic)",
      "A/B Testing",
      "Funnel Analysis",
      "Cohort Analysis",
      "KPI Dashboards",
    ],
    color: "accent",
  },
  {
    category: "Platform & Technical",
    icon: Server,
    items: [
      "REST APIs",
      "ERP / CRM / CMS / LMS Systems",
      "Mobile Release Management (Flutter, iOS, Android)",
      "CI/CD",
      "Cloudflare",
      "Firebase",
      "Postback Tracking",
      "Affise",
    ],
    color: "primary",
  },
  {
    category: "Tools",
    icon: Layout,
    items: [
      "Jira",
      "Confluence",
      "Notion",
      "Figma",
      "Linear",
      "Slack",
      "Miro",
      "WebEngage",
    ],
    color: "accent",
  },
  {
    category: "Growth & Monetization Execution",
    icon: Cpu,
    items: [
      "95%+ US Traffic Efficiency",
      "EPC Ranking Logic",
      "External Provider Integrations",
      "Referral & Tiered Rewards",
      "Fraud & Risk Controls",
      "Feasibility & Lifecycle Transitions",
    ],
    color: "primary",
  },
  {
    category: "Certifications & Agile Delivery",
    icon: Award,
    items: [
      "Certified Scrum Master (CSM)",
      "Certified Scrum Product Owner (CSPO)",
      "ITIL v3 Foundation Certificate - AXELOS",
      "Sprint Planning & Velocity",
      "Backlog Grooming",
      "Cross-Functional Coordination",
    ],
    color: "accent",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">What I Do</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              My <span className="text-gradient">Skills</span> & Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning technical product management, data analytics, 
              scalable systems architecture, and Agile delivery.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className={cn(
                  "group p-6 rounded-2xl border border-border bg-card hover:shadow-glow transition-all duration-500",
                  "hover:-translate-y-1"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300",
                    skill.color === "primary"
                      ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                      : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                  )}
                >
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm rounded-full bg-secondary text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="mt-12 p-8 rounded-2xl border border-border bg-card">
            <h3 className="text-xl font-display font-semibold text-foreground mb-6 text-center">
              Languages
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
              <div className="text-center">
                <p className="text-lg font-medium text-foreground">English</p>
                <p className="text-sm text-primary font-mono">Professional</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <p className="text-lg font-medium text-foreground">Bengali</p>
                <p className="text-sm text-primary font-mono">Native</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <p className="text-lg font-medium text-foreground">Urdu &amp; Hindi</p>
                <p className="text-sm text-muted-foreground font-mono">Conversational</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

