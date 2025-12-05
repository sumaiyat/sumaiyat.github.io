export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-background">
      <div className="max-w-5xl w-full">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Alex Morgan</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">Product Manager</p>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
          I build user-centric products that solve real problems and drive business growth through data-driven decisions
          and cross-functional collaboration.
        </p>
      </div>
    </section>
  )
}
