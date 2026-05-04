import { Briefcase, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    type: "work",
    title: "Head of Product & Engineering",
    company: "Repocket",
    location: "Remote",
    period: "February 2025 – Present",
    description: "Structured Repocket from the ground up, establishing product, engineering, and growth processes that enabled the platform to scale efficiently across multiple global markets.",
    achievements: [
      "Cut release cycles by ~30% through agile transformation and workflow automation",
      "Defined and executed product vision driving the highest revenue in company history",
      "Led migration from legacy GoKart to Affise, integrating 15+ providers",
      "Achieved 95%+ conversion performance from the U.S.",
      "Introduced and scaled OKRs across product, engineering, and growth teams",
    ],
  },
  {
    type: "work",
    title: "Senior Product Manager & Scrum Master",
    company: "10 Minute School",
    location: "Dhaka, Bangladesh",
    period: "February 2022 – July 2024",
    description: "Led product strategy for Platform, K-12 & Skill Development at Bangladesh's leading EdTech company.",
    achievements: [
      "Drove 23% YoY revenue growth through product-led strategies",
      "Reduced user abandonment by 12% and improved NPS by 20%",
      "Boosted sprint completion rates from 75% to 92%",
      "Launched IELTS mock test services generating 40% of fiscal-year revenue",
      "Spearheaded SaaS tool development (ERP, CMS, CRM, LMS)",
    ],
  },
  {
    type: "work",
    title: "Product Manager",
    company: "B–Trac Solutions Limited (Ami Probashi)",
    location: "Dhaka, Bangladesh",
    period: "February 2021 – August 2021",
    description: "Managed full product lifecycle for a network serving migrants, foreign employers, and recruiting agencies.",
    achievements: [
      "Increased client satisfaction scores by 22%",
      "Supported 80%+ of daily operations through rapid issue resolution",
      "Streamlined recruitment workflows driving user adoption",
    ],
  },
  {
    type: "work",
    title: "Product Manager",
    company: "Evaly.com.bd",
    location: "Dhaka, Bangladesh",
    period: "June 2020 – January 2021",
    description: "Managed 7 product streams including E-commerce, Food Delivery, Logistics, and Finance with 30+ team members.",
    achievements: [
      "Reduced time-to-market by 15%",
      "Created PRDs, BRDs, and ERDs for development clarity",
      "Coordinated cross-functional delivery across all initiatives",
    ],
  },
  {
    type: "work",
    title: "Software Support Engineer (APAC)",
    company: "Google (Street View – Geo Data Operations)",
    location: "Kuala Lumpur, Malaysia",
    period: "March 2018 – March 2020",
    description: "Supported Geo Data Operations for Google Street View across the APAC region.",
    achievements: [
      "Maintained 99.8% system uptime",
      "Improved troubleshooting efficiency by 10%",
      "Trained new technical support engineers",
    ],
  },
  {
    type: "work",
    title: "Network Administrator",
    company: "Brandt International (BPO)",
    location: "Kuala Lumpur, Malaysia",
    period: "March 2017 – November 2017",
    description: "Administered LAN/WAN networks, storage, and authentication systems for a multi-client BPO environment.",
    achievements: [
      "Reduced operational downtime through timely issue resolution",
    ],
  },
  {
    type: "work",
    title: "Software Engineer",
    company: "HappyGD Technology PLT (WeChat)",
    location: "Kuala Lumpur, Malaysia",
    period: "February 2016 – May 2016",
    description: "Developed and maintained software applications for client integrations with WeChat ecosystem.",
    achievements: [],
  },
  {
    type: "education",
    title: "Bachelor of Science (Hons) in Software Engineering",
    company: "University of East London",
    location: "",
    period: "June 2016",
    description: "",
    achievements: [],
  },
  {
    type: "education",
    title: "Diploma in Computer Science",
    company: "FTMS College",
    location: "Kuala Lumpur, Malaysia",
    period: "March 2015",
    description: "",
    achievements: [],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">My Journey</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Experience & <span className="text-gradient">Education</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A timeline of my professional journey from Software Engineer to Head of Product & Engineering.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex gap-6 md:gap-10 mb-8 last:mb-0"
              >
                {/* Icon */}
                <div className="absolute left-4 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-glow z-10 mt-6" />

                {/* Content */}
                <div className="ml-10 md:ml-16 flex-1">
                  <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-card transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <div
                        className={cn(
                          "p-2 rounded-lg",
                          exp.type === "work"
                            ? "bg-primary/10 text-primary"
                            : "bg-accent/10 text-accent"
                        )}
                      >
                        {exp.type === "work" ? (
                          <Briefcase className="w-4 h-4" />
                        ) : (
                          <GraduationCap className="w-4 h-4" />
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                      {exp.location && (
                        <span className="text-sm text-muted-foreground">• {exp.location}</span>
                      )}
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    {exp.description && (
                      <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                    )}
                    {exp.achievements.length > 0 && (
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
