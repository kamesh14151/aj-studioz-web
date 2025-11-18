'use client'

import { Code2, Sparkles, Zap, Globe, ArrowRight, Gauge, Lock } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom, high-performance websites built with modern technology stack.',
    features: ['Responsive Design', 'Fast Performance'],
  },
  {
    icon: Sparkles,
    title: 'AI Integration',
    description: 'Seamless Nexariq AI integration for intelligent automation.',
    features: ['ML Models', 'Smart Automation'],
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast optimized solutions with cutting-edge frameworks.',
    features: ['Fast Loading', 'Optimized Queries'],
  },
  {
    icon: Globe,
    title: 'Digital Strategy',
    description: 'Comprehensive digital transformation for enterprise presence.',
    features: ['Strategic Planning', 'Market Analysis'],
  },
  {
    icon: Gauge,
    title: 'Analytics & Insights',
    description: 'Real-time analytics dashboard for data-driven decisions.',
    features: ['Live Metrics', 'Custom Reports'],
  },
  {
    icon: Lock,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security with full compliance standards.',
    features: ['SSL Encryption', 'GDPR Ready'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-card/20 to-transparent border-y border-border/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-4">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your vision with our cutting-edge services designed for premium experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="group card-premium p-7 border-2 hover:border-primary/50 hover:bg-card/60 transition-all duration-300 hover-elevate cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-border/30">
                  {service.features.map((feature, fidx) => (
                    <span key={fidx} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to action */}
        <div className="text-center p-8 card-premium border-primary/40">
          <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Explore our full range of services on our dedicated page with detailed specifications
          </p>
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all hover-elevate btn-luxury"
          >
            Explore All Services <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
