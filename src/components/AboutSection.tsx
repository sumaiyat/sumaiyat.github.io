export const AboutSection = () => {
  const yearsOfExperience = new Date().getFullYear() - 2016;

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">About Me</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              SaaS Platforms &amp; Growth <span className="text-gradient">Leader</span>
            </h2>
          </div>

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
                  src="/profile.jpg?v=3"
                  alt="Sumaiya Tabassum Zakaria"
                  className="absolute inset-0 w-full h-full object-cover object-center z-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-card z-50">
                <p className="text-sm text-muted-foreground">Years of Experience</p>
                <p className="text-3xl font-display font-bold text-gradient">{yearsOfExperience}+</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Senior Product Manager with {yearsOfExperience}+ years of experience building and scaling B2B and B2C SaaS products across EdTech, marketplaces, and digital consumer platforms.
                </p>
                <p>
                  Strong in growth experimentation, monetization strategy, and cross-functional execution. Recently relocated to California with proven US revenue ownership experience (95%+ US conversion performance). Authorized to work in the US.
                </p>
                <p>
                  Proven track record leading cross-functional teams of up to 30+ engineers, designers, BI, and operations partners—partnering directly with C-level executives (CEO, VP, CTO) to translate complex business and operational problems into clear product roadmaps and scalable solutions.
                </p>
              </div>

              {/* Certifications & Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                  Certified Scrum Master (CSM)
                </span>
                <span className="px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium">
                  Certified Scrum Product Owner (CSPO)
                </span>
                <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                  ITIL v3 Foundation Certificate - AXELOS
                </span>
                <span className="px-3 py-1.5 rounded-full bg-secondary border border-border text-foreground text-xs font-medium">
                  Authorized to work in the US
                </span>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                <div>
                  <p className="text-2xl font-display font-bold text-gradient">{yearsOfExperience}+</p>
                  <p className="text-xs text-muted-foreground mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-gradient-accent">30+</p>
                  <p className="text-xs text-muted-foreground mt-1">Team Members Led</p>
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-gradient">23%</p>
                  <p className="text-xs text-muted-foreground mt-1">YoY Revenue Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
