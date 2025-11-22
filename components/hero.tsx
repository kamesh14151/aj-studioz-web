'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react'
import TypingEffect from './typing-effect'
import ParticleBackground from './particle-background'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8 animate-in-left">
          {/* Premium badge with pulse */}
          <div className="inline-block px-4 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/40 backdrop-blur-sm hover-elevate animate-pulse">
            <div className="flex items-center gap-2.5">
              <Sparkles size={16} className="text-accent" />
              <span className="text-xs font-semibold text-foreground uppercase tracking-widest">AI-Powered Excellence</span>
              <Zap size={14} className="text-primary animate-pulse" />
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
          
          {/* CTA Buttons with enhanced effects */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link href="#contact" className="relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 group btn-luxury text-base overflow-hidden">
              <span className="relative z-10">Start Your Journey</span>
              <ArrowRight className="relative z-10 ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />
            </Link>
            <Link href="/projects" className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary/40 text-foreground rounded-xl font-semibold hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 hover-elevate relative overflow-hidden group">
              <span className="relative z-10">View Our Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </Link>
          </div>

          {/* Trust indicator with animation */}
          <div className="pt-4 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background hover-elevate transition-transform hover:scale-125 animate-in-scale"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-sm font-semibold">
                <TrendingUp size={16} className="text-accent" />
                <strong className="text-primary">500+</strong> Enterprises
              </div>
              <p className="text-xs text-muted-foreground">Trust our platform daily</p>
            </div>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl blur-3xl animate-float" />
          <div className="relative card-premium p-8 space-y-8 border-2 hover:border-primary/50 transition-all duration-500">
            {/* Stat items with shimmer */}
            <div className="space-y-4">
              <div className="h-4 bg-gradient-to-r from-primary/30 to-accent/20 rounded-full w-5/6 shimmer" />
              <div className="h-4 bg-gradient-to-r from-primary/20 to-accent/10 rounded-full w-full shimmer" style={{ animationDelay: '0.2s' }} />
              <div className="h-4 bg-gradient-to-r from-primary/10 to-accent/5 rounded-full w-4/5 shimmer" style={{ animationDelay: '0.4s' }} />
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/30">
              {['99% Uptime', 'Real-time', 'Scalable'].map((metric, idx) => (
                <div key={idx} className="text-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 hover-elevate cursor-pointer">
                  <p className="text-2xl font-bold text-accent neon-text">{['99%', 'RT', 'HS'][idx]}</p>
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
