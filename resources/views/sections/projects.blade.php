<section id="projects" class="py-32 relative bg-secondary/30">
  <div class="container mx-auto px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-primary font-medium mb-4">Key Achievements</p>
        <h2 class="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
          Impact & <span class="text-gradient">Results</span>
        </h2>
        <p class="text-muted-foreground max-w-2xl mx-auto">
          Highlights from my career driving product growth, team performance,
          and business outcomes across various industries.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        @php
          $achievements = [
            ["Repocket Global Scaling", "Structured product, engineering, and growth processes from the ground up, enabling the platform to scale efficiently across multiple global markets with 95%+ U.S. conversion.", ["~30% faster release cycles", "15+ provider integrations", "Highest revenue in company history"], "primary"],
            ["10 Minute School Growth", "Drove product-led strategies at Bangladesh's leading EdTech platform, launching live class services, assessment engines, and IELTS mock test services.", ["23% YoY revenue growth", "40% fiscal revenue from new launches", "20% NPS improvement"], "accent"],
            ["Agile Transformation", "Optimized Agile practices across 3+ Scrum teams, facilitating cross-functional collaboration among PMs, QAs, and Developers.", ["75% → 92% sprint completion", "Improved team velocity", "Enhanced delivery consistency"], "primary"],
            ["User Retention Optimization", "Used Metabase and Mixpanel analytics to identify user drop-offs and implement targeted improvements across the user journey.", ["12% abandonment reduction", "Double-digit DAU growth", "Stronger regional retention"], "accent"],
            ["SaaS Platform Development", "Spearheaded development of internal SaaS tools including ERP, CMS, CRM, and LMS systems optimizing academic operations and learner lifecycle.", ["End-to-end B2B/B2C flows", "Scalable payment systems", "Streamlined operations"], "primary"],
            ["Cross-functional Leadership", "Led and mentored teams of 30+ members across 7 product streams, bridging engineering, operations, partnerships, and community insights.", ["7 product streams managed", "30+ team members", "15% faster time-to-market"], "accent"],
          ];
        @endphp

        @foreach ($achievements as $achievement)
          <div class="group p-6 rounded-2xl border border-border bg-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 {{ $achievement[3] == 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent' }}">
              <span class="text-sm font-bold">{{ strtoupper(substr($achievement[0], 0, 1)) }}</span>
            </div>
            <h3 class="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {{ $achievement[0] }}
            </h3>
            <p class="text-muted-foreground text-sm mb-4">
              {{ $achievement[1] }}
            </p>

            <div class="space-y-2">
              @foreach ($achievement[2] as $metric)
                <div class="flex items-center gap-2 text-sm">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  <span class="text-foreground font-medium">{{ $metric }}</span>
                </div>
              @endforeach
            </div>
          </div>
        @endforeach
      </div>
    </div>
  </div>
</section>
