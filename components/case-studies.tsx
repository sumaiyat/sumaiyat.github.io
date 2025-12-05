import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const caseStudies = [
  {
    year: "2024",
    title: "Enterprise Dashboard Redesign",
    description:
      "Led the complete redesign of our analytics dashboard, resulting in 45% increase in user engagement and 30% reduction in support tickets.",
    metrics: ["45% ↑ Engagement", "30% ↓ Support", "4.8/5 Satisfaction"],
    tags: ["B2B SaaS", "Analytics", "Enterprise"],
  },
  {
    year: "2023",
    title: "Mobile App Launch",
    description:
      "Launched iOS and Android apps from 0 to 1, achieving 100K+ downloads in first 3 months and 4.6 star rating.",
    metrics: ["100K+ Downloads", "4.6★ Rating", "60% MAU"],
    tags: ["Mobile", "0-1 Product", "Consumer"],
  },
  {
    year: "2023",
    title: "AI-Powered Recommendations",
    description:
      "Introduced ML-based recommendation engine that increased conversion rate by 25% and average order value by 18%.",
    metrics: ["25% ↑ Conversion", "18% ↑ AOV", "$2M ARR"],
    tags: ["AI/ML", "Growth", "Personalization"],
  },
  {
    year: "2022",
    title: "Onboarding Optimization",
    description: "Redesigned user onboarding flow using behavioral data, reducing time-to-value from 7 days to 2 days.",
    metrics: ["70% Faster TTV", "35% ↑ Activation", "20% ↑ Retention"],
    tags: ["UX", "Growth", "Retention"],
  },
]

export function CaseStudies() {
  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Selected Work</h2>
        <div className="space-y-6">
          {caseStudies.map((study) => (
            <Card key={study.title} className="group hover:border-foreground/20 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm text-muted-foreground">{study.year}</span>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-balance">{study.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{study.description}</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {study.metrics.map((metric) => (
                    <div key={metric} className="px-3 py-1.5 bg-muted rounded-md text-sm font-medium">
                      {metric}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span key={tag} className="text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
