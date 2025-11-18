'use client'

import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$4,999',
    description: 'Perfect for small projects and MVPs',
    features: [
      'Custom website design',
      'Mobile responsive',
      'Basic SEO optimization',
      '3 months support',
      'Analytics integration',
      'Email support',
    ],
    cta: 'Start Project',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations',
    features: [
      'Full digital transformation',
      'AI model integration',
      'Custom API development',
      '12 months dedicated support',
      'Performance optimization',
      'Priority 24/7 support',
      'Regular training & consulting',
      'Advanced security protocols',
    ],
    cta: 'Schedule Consultation',
    highlighted: true,
  },
  {
    name: 'Pro',
    price: '$12,999',
    description: 'Comprehensive web & AI solutions',
    features: [
      'Everything in Starter',
      'Nexariq AI integration',
      'Advanced features',
      '6 months support',
      'Priority support',
      'Custom training',
      'Dedicated manager',
      'Quarterly strategy reviews',
    ],
    cta: 'Get Started',
  },
]

export default function Pricing() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/20 border-y border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Pricing Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Investment in Excellence</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Flexible pricing for every scale of ambition
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'md:scale-105 border-primary/50 bg-gradient-to-br from-primary/20 to-accent/10 shadow-lg'
                  : 'border-border/40 bg-card/40 hover:border-primary/30 hover:bg-card/60 hover:shadow-md'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-muted-foreground ml-2">/project</span>}
              </div>

              <button className={`w-full px-6 py-3 rounded-lg font-semibold mb-8 transition-all ${
                plan.highlighted
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'border border-primary/30 text-primary hover:bg-primary/5'
              }`}>
                {plan.cta}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Custom requirements? We build tailored solutions.</p>
          <a href="mailto:hello@ajstudioz.com" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80">
            Request Custom Quote →
          </a>
        </div>
      </div>
    </section>
  )
}
