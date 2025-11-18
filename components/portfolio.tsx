const projects = [
  {
    title: 'NextGen Commerce Platform',
    category: 'E-Commerce',
    description: 'Full-stack AI-powered commerce solution with personalized recommendations',
    tags: ['Next.js', 'Nexariq AI', 'Real-time'],
  },
  {
    title: 'Enterprise Analytics Dashboard',
    category: 'Dashboard',
    description: 'Real-time analytics and insights platform for Fortune 500 company',
    tags: ['React', 'D3.js', 'WebSockets'],
  },
  {
    title: 'AI Content Platform',
    category: 'SaaS',
    description: 'Content generation and management system powered by Hanuman S1',
    tags: ['Next.js', 'Hanuman S1', 'Streaming'],
  },
]

export default function Portfolio() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformative projects that showcase our expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="card-premium group p-8 hover:shadow-lg cursor-pointer overflow-hidden transition-all duration-300">
              <div className="mb-4 inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                {project.category}
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tidx) => (
                  <span key={tidx} className="px-2 py-1 rounded text-xs bg-border/30 text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
