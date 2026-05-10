import { Briefcase, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    type: "work",
    title: "Senior Product Manager (Product & Engineering Lead)",
    company: "Repocket",
    location: "Remote",
    period: "February 2025 – Present",
    description: "",
    achievements: [
      "Led a cross-functional team of 12 across product, engineering, BI, operations, QA, DevOps, and design to deliver onboarding, referral, and monetization features, while driving integrations with external partners that improved DAU, retention, conversion rates, and platform revenue.",
      "Owned end-to-end product lifecycle from discovery to release, reducing release cycle time by 30% through sprint restructuring and workflow automation.",
      "Drove the quarterly product roadmap across growth and monetization initiatives, contributing to the highest revenue period in company history.",
      "Led migration from GoKart to Affise and integrated 15+ providers, implementing EPC-based ranking logic that improved offer conversion and platform stability.",
      "Redesigned onboarding and referral flows with push notifications and tiered rewards, increasing DAU by double digits and improving 30-day retention.",
      "Optimized U.S. traffic performance, achieving 95%+ conversion efficiency through offer surfacing logic and traffic quality filtering.",
      "Partnered with B2B providers to secure high-performing inventory, maintaining daily revenue targets and supporting sustained quarter-over-quarter growth.",
      "Built a data-driven prioritization framework using EPC tiers, retention curves, and traffic quality metrics to align roadmap decisions with revenue impact.",
      "Improved payout reliability and fraud controls in collaboration with Ops and Risk teams, reducing reversals and protecting net revenue."
    ],
  },
  {
    type: "work",
    title: "Senior Product Manager & Scrum Master",
    company: "10 Minute School (Online Tutoring & Learning Platform – EdTech)",
    location: "Dhaka, Bangladesh",
    period: "February 2022 – July 2024",
    description: "",
    achievements: [
      "Led and collaborated with a cross-functional team of 31 engineers, DevOps, QA, designers, and BI specialists, in collaboration with 9 PMs, to deliver impactful platform and engagement features.",
      "Owned end-to-end B2B and B2C payment flows, improving transaction success rate and building scalable checkout infrastructure across web and mobile.",
      "Led development of internal ERP, CMS, CRM, and LMS tools used by 500+ academic staff, reducing manual operational workload and enhancing learner lifecycle management.",
      "Launched live class platform, assessment engine, and instructor dashboards, increasing student engagement and course completion rates.",
      "Built and launched IELTS mock test product within the Skill Development portfolio, contributing to 40% of annual business unit revenue.",
      "Analyzed user funnel data using Mixpanel and Metabase, identifying drop-off points and implementing UX improvements that reduced checkout abandonment by 12%.",
      "Drove 23% YoY revenue growth through feature-level experimentation and product-led engagement initiatives.",
      "Mentored 8+ Product Managers, improving roadmap prioritization through KPI-driven decision frameworks.",
      "Led Agile delivery across 3 Scrum teams of PMs, developers, and QA, aligning sprint planning with quarterly business goals.",
      "Improved sprint completion rate from 75% to 92% by restructuring backlog grooming and release planning workflows.",
      "Increased team delivery consistency through proactive blocker resolution and cross-functional coordination."
    ],
  },
  {
    type: "work",
    title: "Product Manager",
    company: "B–Trac Solutions Limited (Ami Probashi)",
    location: "Dhaka, Bangladesh",
    period: "February 2021 – August 2021",
    description: "",
    achievements: [
      "Owned end-to-end product lifecycle from discovery to rollout for recruitment platform connecting migrants, employers, and agencies.",
      "Redesigned recruitment workflows in collaboration with engineering, improving process efficiency and increasing client satisfaction scores by 22%.",
      "Prioritized product opportunities aligned with business and regulatory requirements, balancing operational stability with feature delivery.",
      "Supported core platform operations impacting 80%+ of daily transactions by resolving high-priority issues and improving system reliability."
    ],
  },
  {
    type: "work",
    title: "Technical Product Manager",
    company: "Evaly.com.bd (E-commerce Platform)",
    location: "Dhaka, Bangladesh",
    period: "June 2020 – January 2021",
    description: "",
    achievements: [
      "Led product initiatives across 7 verticals including e-commerce, food delivery, logistics, finance, and internal ERP systems, coordinating 30+ cross-functional team members.",
      "Delivered cross-functional roadmap initiatives that reduced time-to-market by 15% through improved sprint planning and release coordination.",
      "Authored detailed PRDs and technical documentation to align engineering and business requirements across multiple product streams.",
      "Collaborated closely with engineering teams to define feature scope, prioritize backlog, and ensure on-time delivery across marketplace and logistics platforms."
    ],
  },
  {
    type: "work",
    title: "Software Support Engineer (APAC)",
    company: "Google (Street View – Geo Data Operations & Field Support)",
    location: "Kuala Lumpur, Malaysia",
    period: "March 2018 – March 2020",
    description: "",
    achievements: [
      "Supported geo-data platforms with 99.8% system uptime, contributing to reliability of large-scale mapping and data infrastructure.",
      "Resolved production issues and software defects across distributed systems, improving troubleshooting efficiency by 10%.",
      "Collaborated with global engineering teams to maintain mapping and data integration products.",
      "Trained new engineers and enhanced monitoring workflows to improve operational visibility."
    ],
  },
  {
    type: "work",
    title: "Network Administrator",
    company: "Brandt International (Business Consulting & Process Outsourcing – BPO)",
    location: "Kuala Lumpur, Malaysia",
    period: "March 2017 – November 2017",
    description: "",
    achievements: [
      "Administered LAN/WAN networks, storage, and authentication systems supporting multi-client enterprise operations.",
      "Reduced operational downtime through proactive network monitoring and rapid issue resolution."
    ],
  },
  {
    type: "work",
    title: "Software Engineer",
    company: "HappyGD Technology PLT (WeChat)",
    location: "Kuala Lumpur, Malaysia",
    period: "February 2016 – May 2016",
    description: "",
    achievements: [
      "Developed and maintained software integrations within the WeChat ecosystem, supporting client-facing application features."
    ],
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
              A timeline of my professional journey from Software Engineer to Senior Product Manager.
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
                    <div
                      className={cn(
                        "inline-flex p-2 rounded-lg mb-4",
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
                    <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-4">{exp.company}</p>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                      {exp.location && (
                        <span className="text-sm text-muted-foreground">• {exp.location}</span>
                      )}
                    </div>
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
