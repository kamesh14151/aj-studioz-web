'use client'

import Link from 'next/link'
import { ArrowRight, Mail, Phone, Zap } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl border border-primary/40 bg-gradient-to-br from-card/60 via-background/40 to-card/40 backdrop-blur-xl p-12 md:p-20 overflow-hidden group hover-elevate">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 rounded-3xl" />
          
          <div className="relative space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <Zap size={24} className="text-accent animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Ready to Elevate?</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Vision Into <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Reality Today</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Let AJ STUDIOZ power your digital transformation with AI-driven solutions, enterprise architecture, and uncompromising excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="mailto:hello@ajstudioz.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold text-base hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 group btn-luxury"
              >
                <Mail size={20} />
                Start Your Project
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link 
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary/50 text-foreground rounded-xl font-semibold hover:bg-primary/10 hover:border-primary/70 transition-all duration-300 hover-elevate"
              >
                <Phone size={20} />
                Schedule Call
              </Link>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center border-t border-border/40">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Response within 24 hours
              </p>
              <p className="text-sm text-muted-foreground">•</p>
              <p className="text-sm text-muted-foreground">Free consultation included</p>
              <p className="text-sm text-muted-foreground">•</p>
              <p className="text-sm text-muted-foreground">No strings attached</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
