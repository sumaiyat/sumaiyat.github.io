import { BarChart3, Briefcase, Layout, Settings, TrendingUp, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
  {
    category: "Product & Strategy",
    icon: Briefcase,
    items: ["Product Vision & Roadmapping", "Agile / Scrum / Kanban", "OKRs", "Product-Led Growth", "Stakeholder Management", "Monetization Strategy"],
    color: "primary",
  },
  {
    category: "Analytics & Data",
    icon: BarChart3,
    items: ["GA4", "Mixpanel", "Metabase", "Looker Studio", "SQL", "A/B Testing", "Funnel Analysis", "Cohort Analysis"],
    color: "accent",
  },
  {
    category: "Design & Tools",
    icon: Layout,
    items: ["Figma", "Jira", "Notion", "Confluence", "WebEngage", "Miro", "Slack", "Trello", "Linear"],
    color: "primary",
  },
  {
    category: "Technical Familiarity",
    icon: Settings,
    items: ["REST APIs", "CPAPI", "Affise", "Postback Tracking", "Cloudflare", "ERP/CRM/CMS/LMS", "Firebase", "CI/CD Workflows"],
    color: "accent",
  },
  {
    category: "Growth & Optimization",
    icon: TrendingUp,
    items: ["Referral System Design", "Conversion Rate Optimization", "Retention Campaigns", "Tiered Rewards", "EPC Logic", "Revenue Optimization"],
    color: "primary",
  },
  {
    category: "Leadership & Soft Skills",
    icon: Users,
    items: ["Cross-Functional Leadership", "Analytical Thinking", "Problem Solving", "Communication & Storytelling", "Mentoring & Team Development"],
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
              A comprehensive toolkit spanning product management, data analytics, 
              technical understanding, and leadership capabilities.
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
            <div className="flex flex-wrap justify-center gap-6">
              <div className="text-center">
                <p className="text-lg font-medium text-foreground">English & Bengali</p>
                <p className="text-sm text-muted-foreground">Professional proficiency</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="text-lg font-medium text-foreground">Urdu & Hindi</p>
                <p className="text-sm text-muted-foreground">Conversational proficiency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
