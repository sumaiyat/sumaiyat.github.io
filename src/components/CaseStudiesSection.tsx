import { Zap, TrendingUp, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const caseStudies = [
  {
    tag: "Repocket · Head of Product & Engineering",
    title: "Scaling a 2M+ user marketplace through integrations",
    icon: Zap,
    color: "accent",
    context:
      "Repocket is a bandwidth sharing marketplace that pays users for unused internet bandwidth. Revenue depended on offer inventory from external providers and on matching the right offers to the right traffic.",
    approach: [
      "Led the migration from GoKart to Affise and integrated 15+ external providers",
      "Implemented EPC based ranking logic and traffic quality filtering to surface higher converting offers",
      "Built a prioritization framework from EPC tiers, retention curves and traffic quality metrics",
      "Strengthened payout reliability and fraud controls with Ops and Risk to protect net revenue",
    ],
    impact: [
      { value: "Record", label: "Highest revenue period in company history" },
      { value: "95%+", label: "US traffic conversion efficiency" },
      { value: "30%", label: "Faster release cycles" },
    ],
  },
  {
    tag: "10 Minute School · Senior Product Manager",
    title: "Fixing checkout and launching a new revenue line",
    icon: TrendingUp,
    color: "primary",
    context:
      "10 Minute School is Bangladesh's largest EdTech platform, with 3.2M monthly active learners. I owned B2B and B2C payment flows across web and mobile, plus the Skill Development portfolio.",
    approach: [
      "Analyzed the purchase funnel in Mixpanel and Metabase to find where learners dropped off",
      "Shipped checkout UX improvements and more scalable payment infrastructure",
      "Built and launched an IELTS mock test product within Skill Development",
      "Ran feature experiments with a 31 person cross functional team",
    ],
    impact: [
      { value: "12%", label: "Lower checkout abandonment" },
      { value: "40%", label: "Of business unit revenue from the IELTS product" },
      { value: "23%", label: "YoY revenue growth" },
    ],
  },
  {
    tag: "National Services Group · Technical Product Manager",
    title: "Turning field operations into platform requirements",
    icon: Rocket,
    color: "primary",
    context:
      "College Works Painting operates in 12 states and hires 2,000+ students each year. As sole product lead for its platform, I translate complex operational workflows into requirements engineers can build.",
    approach: [
      "Defined requirements for eCheck payments and Direct Deposit with Paychex export",
      "Scoped RentCast and Datafiniti property data integrations, recommending fuzzy address matching to reduce false negatives",
      "Rescoped a stalled compliance penalty initiative into automation on the existing safety inspection workflow",
      "Partner with the CEO and VP on direction; report delivery and risks to the CTO",
    ],
    impact: [
      { value: "Sole", label: "Product lead for the platform" },
      { value: "12", label: "States supported" },
      { value: "Ongoing", label: "Current role, results to come" },
    ],
  },
];

export const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">Case Studies</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              How I <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three problems I owned end to end: the context, what I did, and what changed.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((cs) => (
              <article
                key={cs.title}
                className="group p-6 md:p-8 rounded-2xl border border-border bg-card hover:shadow-glow transition-all duration-500"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={cn(
                      "w-12 h-12 shrink-0 rounded-xl flex items-center justify-center",
                      cs.color === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                    )}
                  >
                    <cs.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground mb-1">{cs.tag}</p>
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">{cs.title}</h3>
                  </div>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">
                  <div className="lg:col-span-3 space-y-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Context</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cs.context}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">What I did</p>
                      <ul className="space-y-2">
                        {cs.approach.map((a) => (
                          <li key={a} className="flex gap-2 text-sm text-foreground">
                            <span className="w-1.5 h-1.5 mt-2 shrink-0 rounded-full bg-primary" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Impact</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                      {cs.impact.map((m) => (
                        <div key={m.label} className="p-4 rounded-xl bg-secondary/50 border border-border">
                          <p className="text-2xl font-display font-bold text-gradient">{m.value}</p>
                          <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
