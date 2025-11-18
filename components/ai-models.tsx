'use client'

import { CheckCircle2, Zap } from 'lucide-react'
import Link from 'next/link'

const models = [
  {
    name: 'Lynxa-mini',
    tier: 'Lightweight',
    description: 'Compact AI for edge computing and mobile apps',
    features: ['Low latency', 'Minimal footprint', 'Optimized performance', 'Real-time processing'],
    badge: 'Fast & Efficient',
  },
  {
    name: 'AJ',
    tier: 'Advanced',
    description: 'Enterprise reasoning engine for complex applications',
    features: ['Advanced reasoning', 'Multi-modal support', 'Enterprise-grade', 'Custom fine-tuning'],
    badge: 'Most Popular',
    highlighted: true,
  },
  {
    name: 'Hanuman S1',
    tier: 'Supreme',
    description: 'Flagship model for maximum intelligence',
    features: ['State-of-the-art', 'Full context awareness', 'Specialized domains', 'Ultra-low latency'],
    badge: 'Premium',
  },
]

export default function AIModels() {
  return (
    <section id="ai-models" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Nexariq AI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Proprietary Language Models</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three generations of advanced AI optimized for different scales and use cases
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {models.map((model, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl border-2 p-8 transition-all duration-300 group ${
                model.highlighted
                  ? 'border-primary/60 bg-gradient-to-br from-primary/20 to-accent/10 shadow-2xl shadow-primary/20 hover-elevate scale-105 md:scale-100'
                  : 'border-border/50 bg-card/50 hover:border-primary/40 hover:bg-card/70 hover-elevate'
              }`}
            >
              {/* Badge */}
              {model.highlighted && (
                <div className="absolute -top-3 right-6 px-4 py-1 rounded-full bg-gradient-to-r from-accent to-primary text-white text-xs font-bold shadow-lg">
                  {model.badge}
                </div>
              )}

              {!model.highlighted && (
                <div className="inline-block px-3 py-1 rounded-full bg-primary/15 mb-4">
                  <span className="text-xs font-semibold text-primary">{model.badge}</span>
                </div>
              )}

              {/* Model name and tier */}
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{model.name}</h3>
              <p className="text-sm text-accent mb-4 font-semibold uppercase tracking-wide">{model.tier}</p>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed h-12">{model.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8 pb-6 border-b border-border/30">
                {model.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="/ai-models"
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 text-base flex items-center justify-center gap-2 group ${
                  model.highlighted 
                    ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg'
                    : 'border border-primary/30 text-primary hover:bg-primary/10'
                }`}
              >
                {model.highlighted ? 'Get Started' : 'Learn More'}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center p-8 card-premium border-accent/40">
          <p className="text-muted-foreground mb-4">Dive deeper into our AI capabilities</p>
          <Link href="/ai-models" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
            <Zap size={18} />
            Explore Full AI Documentation
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

import { ArrowRight } from 'lucide-react'
