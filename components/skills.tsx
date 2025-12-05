import { Sparkles, BarChart3, Users, Lightbulb, Zap, Target } from "lucide-react"

const skills = [
  {
    icon: Target,
    title: "Product Strategy",
    description: "Defining product vision, roadmaps, and go-to-market strategies aligned with business goals",
  },
  {
    icon: Users,
    title: "User Research",
    description: "Conducting user interviews, surveys, and usability testing to uncover insights",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Leveraging analytics to make informed decisions and measure product success",
  },
  {
    icon: Lightbulb,
    title: "Design Thinking",
    description: "Applying human-centered design principles to solve complex problems",
  },
  {
    icon: Zap,
    title: "Agile & Scrum",
    description: "Leading agile teams with sprint planning, standups, and retrospectives",
  },
  {
    icon: Sparkles,
    title: "Stakeholder Management",
    description: "Communicating effectively across engineering, design, sales, and leadership",
  },
]

export function Skills() {
  return (
    <section className="px-6 py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Core Competencies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.title} className="space-y-3">
              <skill.icon className="w-6 h-6 text-foreground" />
              <h3 className="text-lg font-medium">{skill.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
