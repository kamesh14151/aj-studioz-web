'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowRight, Zap, Globe, Cpu, Shield, Sparkles, Palette } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Enterprise-grade web applications with modern architecture, scalability, and performance.',
      features: ['React/Next.js', 'Full-Stack Solutions', 'Real-time Integration', 'Progressive Enhancement'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cpu,
      title: 'AI Integration',
      description: 'Seamless integration of advanced AI models into your existing infrastructure.',
      features: ['LLM Integration', 'Custom Models', 'API Development', 'Real-time Processing'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast applications optimized for conversion and user engagement.',
      features: ['CDN Optimization', 'Caching Strategies', 'Load Balancing', 'Analytics'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-level security with compliance standards and data protection.',
      features: ['Encryption', 'GDPR Compliance', 'Audit Trails', 'Zero Trust Security'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Sparkles,
      title: 'UX/UI Design',
      description: 'Beautiful, intuitive interfaces that delight users and drive conversions.',
      features: ['Design Systems', 'Responsive Design', 'Accessibility', 'Brand Strategy'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Palette,
      title: 'Brand Development',
      description: 'Comprehensive branding solutions that establish market presence.',
      features: ['Identity Design', 'Visual Systems', 'Marketing Collateral', 'Digital Strategy'],
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold glowing-brand">
              Our Premium Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions crafted to elevate your digital presence and drive sustainable growth
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 hover-elevate"
                  style={{
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                  }}
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`} />
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative p-8">
                    {/* Gradient Icon Background with enhanced styling */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 blur-2xl rounded-full group-hover:opacity-40 transition-opacity duration-500`} />
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features with enhanced styling */}
                    <div className="space-y-3 mb-8 pb-6 border-b border-border/30">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 group/item">
                          <div className={`relative w-2 h-2 rounded-full bg-gradient-to-r ${service.color} shadow-lg`}>
                            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.color} blur-sm animate-pulse`} />
                          </div>
                          <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button with luxury styling */}
                    <button className="relative w-full py-3 px-4 rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 text-primary hover:from-primary hover:via-accent hover:to-primary hover:text-primary-foreground transition-all duration-500 text-sm font-semibold flex items-center justify-center gap-2 overflow-hidden group/btn border border-primary/20 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20">
                      <span className="relative z-10">Learn More</span>
                      <ArrowRight size={16} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/20 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Process</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {['Discovery', 'Strategy', 'Development', 'Deploy'].map((step, index) => (
              <div key={index} className="relative group/step">
                <div className="relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl p-6 text-center hover-elevate transition-all duration-500 hover:border-primary/50"
                  style={{
                    boxShadow: '0 2px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                  }}>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0 group-hover/step:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center mx-auto mb-4 shadow-lg group-hover/step:scale-110 transition-transform duration-500">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur-lg opacity-50 animate-pulse" />
                      <span className="relative font-bold text-primary-foreground text-lg">{index + 1}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover/step:text-primary transition-colors">{step}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {['Understanding your needs and goals', 'Planning the optimal approach', 'Building with excellence', 'Launching with support'][index]}
                    </p>
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="relative">
                      <ArrowRight className="text-primary/60 group-hover/step:text-primary group-hover/step:scale-125 transition-all duration-300" size={24} />
                      <div className="absolute inset-0 blur-sm">
                        <ArrowRight className="text-primary/20" size={24} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card/90 via-card/70 to-card/50 backdrop-blur-xl p-8 md:p-16 text-center group"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}>
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 animate-bg-shift" />
          
          {/* Glow effect */}
          <div className="absolute -inset-[2px] bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 glowing-brand">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-muted-foreground mb-10 text-lg md:text-xl max-w-2xl mx-auto">
              Let's work together to build something extraordinary that drives real results
            </p>
            <Link href="/" className="relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground rounded-xl font-bold text-lg overflow-hidden group/btn shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-500 hover:scale-105">
              <span className="relative z-10">Get Started Today</span>
              <ArrowRight className="relative z-10 ml-2 group-hover/btn:translate-x-2 transition-transform" size={20} />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
