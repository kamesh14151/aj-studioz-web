'use client'

import Image from 'next/image'
import { Brain, Zap, Code, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function NexariqShowcase() {
  return (
    <section id="nexariq" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-4">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">AI Division</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Nexariq AI Platform
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Proprietary AI platform powering next-generation language models with enterprise capabilities
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          { 
            icon: Brain, 
            title: 'Lynxa-mini', 
            desc: 'Lightweight AI for edge computing',
            specs: ['Low Latency', 'Mobile Ready'],
            color: 'from-blue-500/30 to-cyan-500/20' 
          },
          { 
            icon: Zap, 
            title: 'AJ Model', 
            desc: 'Enterprise-grade reasoning engine',
            specs: ['Advanced Reasoning', 'Multi-modal'],
            color: 'from-purple-500/30 to-pink-500/20',
            featured: true 
          },
          { 
            icon: Code, 
            title: 'Hanuman S1', 
            desc: 'Advanced code generation model',
            specs: ['Code Excellence', 'Domain Expert'],
            color: 'from-orange-500/30 to-red-500/20' 
          },
        ].map((model, idx) => (
          <div 
            key={idx} 
            className={`card-premium p-8 group hover:shadow-lg transition-all duration-300 border-2 cursor-pointer ${
              model.featured ? 'border-primary/50 bg-gradient-to-br from-primary/20 to-card/40 hover-elevate' : 'border-border/50 hover:border-primary/40'
            }`}
          >
            <div className={`bg-gradient-to-br ${model.color} p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform`}>
              <model.icon size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{model.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{model.desc}</p>
            <div className="flex flex-wrap gap-2">
              {model.specs.map((spec, sidx) => (
                <span key={sidx} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {spec}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Nexariq logo showcase */}
      <div className="flex flex-col items-center mb-12">
        <p className="text-muted-foreground mb-6">Powered by</p>
        <div className="w-32 h-32 relative glow-box rounded-2xl overflow-hidden bg-card/40 border-2 border-border/30 hover-elevate">
          <Image
            src="/nexariq-logo.png"
            alt="Nexariq AI Logo"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="text-center p-8 card-premium border-accent/40">
        <h3 className="text-2xl font-bold mb-3">Explore Our AI Capabilities</h3>
        <p className="text-muted-foreground mb-6">Discover how Nexariq models can transform your business</p>
        <Link 
          href="/nexariq"
          className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all hover-elevate btn-luxury"
        >
          Learn About Nexariq <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  )
}
