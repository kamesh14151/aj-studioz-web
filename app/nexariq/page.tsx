'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowRight, Zap, TrendingUp, Users, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function NexariqPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-6">
            <Image
              src="/nexariq-logo.png"
              alt="Nexariq Logo"
              width={100}
              height={100}
              className="w-24 h-24 object-contain"
            />
          </div>
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold">
              Nexariq AI Division
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pioneering next-generation artificial intelligence solutions designed for enterprise excellence
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="card-premium p-8 border border-primary/20 group hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-3 mb-4 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To revolutionize how enterprises interact with artificial intelligence, making advanced AI accessible, affordable, and impactful for businesses of all sizes worldwide.
            </p>
          </div>

          <div className="card-premium p-8 border border-accent/20 group hover:border-accent/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 p-3 mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Develop cutting-edge language models and AI infrastructure that empower organizations to unlock new possibilities and drive innovation at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 border-y border-border/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Innovation', desc: 'Constantly pushing boundaries of what AI can achieve' },
              { title: 'Reliability', desc: 'Enterprise-grade systems you can depend on' },
              { title: 'Transparency', desc: 'Open communication about capabilities and limitations' },
              { title: 'Accessibility', desc: 'Making advanced AI available to all' },
              { title: 'Security', desc: 'Protecting data with highest standards' },
              { title: 'Excellence', desc: 'Uncompromising quality in everything we do' },
            ].map((value, idx) => (
              <div key={idx} className="card-premium p-6 text-center group hover:scale-105 transition-transform">
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Advanced Technology Stack</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Model Architecture',
                items: ['Transformer-based designs', 'Attention mechanisms', 'Multi-head neural networks', 'Optimized parameter efficiency']
              },
              {
                title: 'Infrastructure',
                items: ['Distributed computing', 'GPU acceleration', 'Scalable cloud architecture', 'Real-time processing']
              },
              {
                title: 'Training Pipeline',
                items: ['Advanced data processing', 'Automated quality assurance', 'Continuous improvement', 'Feedback systems']
              },
              {
                title: 'Deployment',
                items: ['API-first approach', 'Edge computing support', 'Multi-cloud deployment', 'Zero-downtime updates']
              },
            ].map((tech, idx) => (
              <div key={idx} className="card-premium p-8 border border-border/30">
                <h3 className="text-xl font-bold mb-4">{tech.title}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Nexariq */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 border-y border-border/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Nexariq</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: TrendingUp, title: 'Performance', desc: 'Industry-leading inference speed and accuracy' },
              { icon: Users, title: 'Support', desc: '24/7 dedicated technical support team' },
              { icon: Zap, title: 'Integration', desc: 'Seamless API integration with your systems' },
              { icon: Target, title: 'Customization', desc: 'Models tailored to your specific needs' },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="card-premium p-6 flex gap-4 group hover:scale-105 transition-transform">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent p-3 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto card-premium p-8 md:p-12 text-center border border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Enterprise with Nexariq</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Experience the future of AI-powered business solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all btn-luxury inline-block">
              Schedule Demo
            </Link>
            <Link href="/ai-models" className="px-8 py-3 border border-primary text-primary hover:bg-primary/10 rounded-lg font-semibold transition-all inline-block">
              Explore Models
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
