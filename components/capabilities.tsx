import { Shield, Zap, TrendingUp, Cpu } from 'lucide-react'

const capabilities = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and security protocols for sensitive data',
  },
  {
    icon: Zap,
    title: 'Lightning Speed',
    description: 'Optimized inference with sub-millisecond latency',
  },
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'Seamlessly scale from startup to enterprise volumes',
  },
  {
    icon: Cpu,
    title: 'Multi-Modal',
    description: 'Advanced understanding of text, images, and structured data',
  },
]

export default function Capabilities() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical excellence combined with exceptional service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-xl border border-border/50 bg-gradient-to-br from-background to-card/30 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
