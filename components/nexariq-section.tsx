export default function NexariqSection() {
  return (
    <section id="nexariq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 border border-accent/20 rounded-2xl p-12 space-y-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="text-sm font-semibold text-accent">Advanced Architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-sm font-semibold">Enterprise Security</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="text-sm font-semibold text-accent">Production Ready</span>
                </div>
              </div>

              <div className="pt-8 border-t border-border/30 space-y-3">
                <p className="text-sm text-muted-foreground">Trusted by</p>
                <div className="flex flex-wrap gap-4">
                  {['Enterprise', 'Startups', 'Research'].map((org, idx) => (
                    <div key={idx} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      <span className="text-xs font-semibold text-primary">{org}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/30 mb-4">
                <span className="text-xs font-semibold text-accent">INNOVATION</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Nexariq: The Future of <span className="text-accent">AI</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nexariq is our specialized AI technology division, representing years of research and development in advanced language models. We've created three generations of proprietary models that balance intelligence, efficiency, and real-world applicability.
            </p>

            <div className="pt-6 space-y-4">
              <div className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-primary to-accent rounded-full" />
                <div>
                  <h3 className="font-semibold mb-1">Research-Driven</h3>
                  <p className="text-sm text-muted-foreground">Built on cutting-edge AI research and best practices</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-accent to-primary rounded-full" />
                <div>
                  <h3 className="font-semibold mb-1">Production Ready</h3>
                  <p className="text-sm text-muted-foreground">Battle-tested and optimized for enterprise deployment</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-primary to-accent rounded-full" />
                <div>
                  <h3 className="font-semibold mb-1">Continuously Evolving</h3>
                  <p className="text-sm text-muted-foreground">Regular updates and improvements based on real-world usage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
