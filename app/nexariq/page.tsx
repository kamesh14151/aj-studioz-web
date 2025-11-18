'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowRight, Zap, TrendingUp, Users, Target, Brain } from 'lucide-react'
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

      {/* AI Models Section */}
      <section id="ai-models" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center gap-3 justify-center mb-6">
              <Brain className="text-primary neon-text" size={24} />
              <span className="text-sm font-bold text-primary uppercase tracking-wider neon-text">Our AI Models</span>
              <Brain className="text-primary neon-text" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glowing-brand">Advanced Language Models</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three generations of cutting-edge AI optimized for different scales and use cases
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                name: 'Lynxa-mini',
                tagline: 'Ultra-fast inference at scale',
                description: 'Lightweight yet powerful model optimized for mobile and edge devices. Perfect for real-time applications with minimal latency.',
                specs: ['~7B parameters', '<50ms inference', 'Mobile optimized', 'Low power consumption'],
                uses: ['Mobile Apps', 'Edge Computing', 'Real-time Chat', 'IoT Devices'],
                color: 'from-cyan-500 to-blue-500'
              },
              {
                name: 'AJ',
                tagline: 'Balanced performance and intelligence',
                description: 'The flagship model offering exceptional performance across diverse tasks. Trained on comprehensive datasets for versatile applications.',
                specs: ['~13B parameters', '100ms inference', 'General purpose', 'Multi-modal support'],
                uses: ['Web Applications', 'Content Generation', 'API Services', 'Data Analysis'],
                color: 'from-purple-500 to-pink-500'
              },
              {
                name: 'Hanuman S1',
                tagline: 'Enterprise-grade intelligence',
                description: 'Advanced reasoning model designed for complex problem-solving. Delivers state-of-the-art performance for enterprise applications.',
                specs: ['~70B parameters', '500ms inference', 'Advanced reasoning', 'Specialized domains'],
                uses: ['Enterprise AI', 'Complex Analytics', 'Strategic Planning', 'Research'],
                color: 'from-amber-500 to-orange-500'
              }
            ].map((model, index) => (
              <div key={index} className="card-premium border border-primary/20 p-8 md:p-12 overflow-hidden relative group">
                <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${model.color} opacity-5 rounded-full -mr-48 -mt-48 group-hover:scale-110 transition-transform duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${model.color} p-3 mb-4`}>
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-2">{model.name}</h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${model.color} bg-clip-text text-transparent`}>
                        {model.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg mb-8">
                    {model.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest opacity-60">Specifications</h4>
                      <div className="space-y-3">
                        {model.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${model.color}`} />
                            <span className="text-sm">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest opacity-60">Use Cases</h4>
                      <div className="space-y-3">
                        {model.uses.map((use, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <Zap size={14} className="text-accent" />
                            <span className="text-sm">{use}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="px-6 py-3 bg-primary/10 text-primary hover:bg-primary/20 transition-colors rounded-lg font-medium flex items-center gap-2 text-sm">
                    Explore API <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 border-y border-border/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Model Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold">Lynxa-mini</th>
                  <th className="text-center py-4 px-4 font-semibold">AJ</th>
                  <th className="text-center py-4 px-4 font-semibold">Hanuman S1</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Speed', values: ['⚡⚡⚡', '⚡⚡', '⚡'] },
                  { feature: 'Intelligence', values: ['⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐'] },
                  { feature: 'Efficiency', values: ['⭐⭐⭐⭐', '⭐⭐⭐', '⭐⭐'] },
                  { feature: 'Cost', values: ['Low', 'Medium', 'High'] },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border/20 hover:bg-card/30 transition-colors">
                    <td className="py-4 px-4 font-medium">{row.feature}</td>
                    {row.values.map((val, i) => (
                      <td key={i} className="text-center py-4 px-4">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
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
            <Link href="/contact" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all btn-luxury inline-block">
              Get API Access
            </Link>
            <Link href="#ai-models" className="px-8 py-3 border border-primary text-primary hover:bg-primary/10 rounded-lg font-semibold transition-all inline-block">
              View Models
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
