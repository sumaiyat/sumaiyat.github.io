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
              Product Leader Who <span className="text-gradient">Builds</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image/Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-card border border-border overflow-hidden relative shadow-card">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl font-display font-bold text-gradient opacity-30">
                    SZ
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-24 h-24 border border-primary/30 rounded-lg rotate-12" />
                <div className="absolute bottom-8 left-8 w-32 h-32 border border-accent/30 rounded-full" />

                {/* Profile Image */}
                <img
                  src="/profile.jpg?v=3"
                  alt="Syeda Sumaiya Tabassum Zakaria (Sumaiya Zakaria)"
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
                  I'm a technical product manager who has spent {yearsOfExperience}+ years building SaaS platforms where payments, integrations and revenue meet.
                </p>
                <p>
                  I started on the engineering side: a software engineering degree, network administration, and two years as a Software Support Engineer at Google resolving production issues across distributed systems. That foundation shapes how I lead product. I write API and system requirements engineers can build from, and I can go deep on architecture tradeoffs.
                </p>
                <p>
                  Most recently I was Head of Product &amp; Engineering at Repocket (2M+ users), and today I'm the sole product lead for the College Works Painting platform in Irvine, CA, owning payments, payroll and data integrations. I'm now building hands on with AI: LLM applications, RAG and agents.
                </p>
              </div>

              {/* Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                  Payments &amp; Checkout
                </span>
                <span className="px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium">
                  Third Party Integrations
                </span>
                <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                  AI Products
                </span>
                <span className="px-3 py-1.5 rounded-full bg-secondary border border-border text-foreground text-xs font-medium">
                  CSM · CSPO · ITIL v3
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
                  <p className="text-2xl font-display font-bold text-gradient-accent">15+</p>
                  <p className="text-xs text-muted-foreground mt-1">Provider Integrations</p>
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
