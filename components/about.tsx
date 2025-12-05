export function About() {
  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-8">About</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              I'm a product manager passionate about creating digital experiences that blend user needs with business
              objectives. My approach centers on deep user research, rapid experimentation, and data-informed decision
              making.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently, I'm a Senior Product Manager at <span className="text-foreground font-medium">TechCorp</span>,
              leading product strategy for our B2B SaaS platform. I've successfully launched products used by over
              500,000 users across multiple markets.
            </p>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              In the past, I've had the opportunity to work across various industries — from fintech startups to
              enterprise software companies. I've led cross-functional teams through complete product lifecycles, from
              discovery to launch and iteration.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I hold an MBA from Stanford and regularly contribute to product management communities through writing and
              speaking engagements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
