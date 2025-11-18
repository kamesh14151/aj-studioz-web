'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react'
import TypingEffect from './typing-effect'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8">
          {/* Premium badge */}
          <div className="inline-block px-4 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/40 backdrop-blur-sm hover-elevate">
            <div className="flex items-center gap-2.5">
              <Sparkles size={16} className="text-accent animate-pulse" />
              <span className="text-xs font-semibold text-foreground uppercase tracking-widest">AI-Powered Excellence</span>
            </div>
          </div>
          
          {/* Main heading with typing effect */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
            <TypingEffect 
              text="Elevate Your Digital Presence" 
              speed={40}
              className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
            />
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
            AJ STUDIOZ transforms visions into market-leading digital products powered by cutting-edge AI innovation and enterprise-grade solutions.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 group btn-luxury text-base">
              Start Your Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link href="/projects" className="inline-flex items-center justify-center px-8 py-4 border border-primary/40 text-foreground rounded-xl font-semibold hover:bg-primary/5 hover:border-primary/60 transition-all duration-300 hover-elevate">
              View Our Work
            </Link>
          </div>

          {/* Trust indicator */}
          <div className="pt-4 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background hover-elevate transition-transform" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-sm font-semibold">
                <TrendingUp size={16} className="text-accent" />
                <strong>500+</strong> Enterprises
              </div>
              <p className="text-xs text-muted-foreground">Trust our platform daily</p>
            </div>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl blur-3xl animate-float" />
          <div className="relative card-premium p-8 space-y-8 border-2">
            {/* Stat items */}
            <div className="space-y-4">
              <div className="h-4 bg-gradient-to-r from-primary/30 to-accent/20 rounded-full w-5/6 animate-pulse" />
              <div className="h-4 bg-gradient-to-r from-primary/20 to-accent/10 rounded-full w-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="h-4 bg-gradient-to-r from-primary/10 to-accent/5 rounded-full w-4/5 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/30">
              {['99% Uptime', 'Real-time', 'Scalable'].map((metric, idx) => (
                <div key={idx} className="text-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <p className="text-2xl font-bold text-accent">{['99%', 'Real', 'HS'][idx]}</p>
                  <p className="text-xs text-muted-foreground mt-1">{metric}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
