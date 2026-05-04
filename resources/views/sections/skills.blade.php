<section id="skills" class="py-32 relative bg-secondary/30">
  <div class="container mx-auto px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-primary font-medium mb-4">What I Do</p>
        <h2 class="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
          My <span class="text-gradient">Skills</span> & Expertise
        </h2>
        <p class="text-muted-foreground max-w-2xl mx-auto">
          A comprehensive toolkit spanning product management, data analytics,
          technical understanding, and leadership capabilities.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Skill Cards -->
        @php
          $skills = [
            ["Product & Strategy", ["Product Vision & Roadmapping", "Agile / Scrum / Kanban", "OKRs", "Product-Led Growth", "Stakeholder Management", "Monetization Strategy"], "primary"],
            ["Analytics & Data", ["GA4", "Mixpanel", "Metabase", "Looker Studio", "SQL", "A/B Testing", "Funnel Analysis", "Cohort Analysis"], "accent"],
            ["Design & Tools", ["Figma", "Jira", "Notion", "Confluence", "WebEngage", "Miro", "Slack", "Trello", "Linear"], "primary"],
            ["Technical Familiarity", ["REST APIs", "CPAPI", "Affise", "Postback Tracking", "Cloudflare", "ERP/CRM/CMS/LMS", "Firebase", "CI/CD Workflows"], "accent"],
            ["Growth & Optimization", ["Referral System Design", "Conversion Rate Optimization", "Retention Campaigns", "Tiered Rewards", "EPC Logic", "Revenue Optimization"], "primary"],
            ["Leadership & Soft Skills", ["Cross-Functional Leadership", "Analytical Thinking", "Problem Solving", "Communication & Storytelling", "Mentoring & Team Development"], "accent"],
          ];
        @endphp

        @foreach ($skills as $skill)
          <div class="group p-6 rounded-2xl border border-border bg-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 {{ $skill[2] == 'primary' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent' }}">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-display font-bold text-foreground mb-4">{{ $skill[0] }}</h3>
            <div class="flex flex-wrap gap-2">
              @foreach ($skill[1] as $item)
                <span class="px-3 py-1 text-sm rounded-full bg-secondary text-muted-foreground">
                  {{ $item }}
                </span>
              @endforeach
            </div>
          </div>
        @endforeach
      </div>

      <div class="mt-12 p-8 rounded-2xl border border-border bg-card">
        <h3 class="text-2xl font-display font-bold text-foreground mb-8 text-center">
          Languages
        </h3>
        <div class="flex flex-wrap justify-center gap-6">
          <div class="text-center">
            <p class="text-lg font-medium text-foreground mb-2">English & Bengali</p>
            <p class="text-sm text-muted-foreground">Professional proficiency</p>
          </div>
          <div class="w-px bg-border"></div>
          <div class="text-center">
            <p class="text-lg font-medium text-foreground mb-2">Urdu & Hindi</p>
            <p class="text-sm text-muted-foreground">Conversational proficiency</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
