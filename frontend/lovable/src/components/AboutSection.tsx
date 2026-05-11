export const AboutSection = () => {
  const yearsOfExperience = new Date().getFullYear() - 2016;

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image/Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-card border border-border overflow-hidden relative shadow-card">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl font-display font-bold text-gradient opacity-30">
                    STZ
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-24 h-24 border border-primary/30 rounded-lg rotate-12" />
                <div className="absolute bottom-8 left-8 w-32 h-32 border border-accent/30 rounded-full" />

                {/* Profile Image */}
                <img 
                  src="/profile.jpg" 
                  alt="Sumaiya Tabassum Zakaria" 
                  className="absolute inset-0 w-full h-full object-cover z-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              {/* Floating card */}
              <div className="absolute bottom-6 right-6 bg-card border border-border rounded-xl p-4 shadow-card z-30">
                <p className="text-sm text-muted-foreground">Years of Experience</p>
                <p className="text-3xl font-display font-bold text-gradient">{yearsOfExperience}+</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-primary font-medium mb-4">About Me</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Product & Engineering
                <span className="text-gradient"> Leader</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I’m a Senior Product Manager with {yearsOfExperience}+ years of experience building and scaling B2B and B2C SaaS products across growth, platform, and marketplace environments.
                </p>
                <p>
                  I’ve led cross-functional teams of up to 30+ engineers, designers, BI, and operations partners to ship onboarding, monetization, payments, and engagement initiatives that drive measurable impact. My work has contributed to 23% YoY revenue growth, 40% portfolio-level revenue contribution from new product launches, improved funnel conversion, and accelerated release cycles by 30%.
                </p>
                <p>
                  I operate at the intersection of growth and execution, defining roadmaps, prioritizing with data, running experimentation frameworks, and aligning engineering delivery with business outcomes. My experience spans EdTech, consumer marketplaces, and digital platforms with a strong focus on retention, monetization, and scalable infrastructure.
                </p>
                <p>
                  With a technical foundation in software engineering and systems reliability, I’m comfortable working closely with engineering teams on APIs, mobile release management, analytics tooling, and platform migrations.
                </p>
                <p>
                  Currently based in Irvine, California, and open to Senior Product Manager opportunities in growth, marketplace, platform, or consumer SaaS environments.
                </p>
              </div>

              {/* Certifications */}
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Certified Scrum Master (CSM)
                </span>
                <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  Certified Scrum Product Owner (CSPO)
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  ITIL v3 Foundation Certificate – AXELOS Global Best Practice
                </span>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
                <div>
                  <p className="text-3xl font-display font-bold text-gradient">{yearsOfExperience}+</p>
                  <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-gradient-accent">30+</p>
                  <p className="text-sm text-muted-foreground mt-1">Team Members Led</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-gradient">23%</p>
                  <p className="text-sm text-muted-foreground mt-1">YoY Revenue Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
