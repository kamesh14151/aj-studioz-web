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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group card-premium hover:shadow-2xl"
                >
                  {/* Gradient Icon Background */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-full py-2 px-4 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium flex items-center justify-center gap-2">
                    Learn More <ArrowRight size={16} />
                  </button>
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
              <div key={index} className="relative">
                <div className="card-premium p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-primary-foreground">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{step}</h3>
                  <p className="text-xs text-muted-foreground">
                    {['Understanding your needs and goals', 'Planning the optimal approach', 'Building with excellence', 'Launching with support'][index]}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="text-primary/40" size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto card-premium p-8 md:p-12 text-center border border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Let's work together to build something extraordinary
          </p>
          <Link href="/" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all btn-luxury">
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
