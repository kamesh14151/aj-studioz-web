'use client'

import Link from 'next/link'
import { Zap, Brain, Rocket, Folder, ArrowRight } from 'lucide-react'

export default function SectionPreviews() {
  const sections = [
    {
      id: 'services',
      title: 'Our Services',
      description: 'Premium web development, AI integration, and custom solutions',
      icon: Zap,
      href: '/services',
      color: 'from-blue-500 to-cyan-500',
      bgAccent: 'bg-blue-500/10'
    },
    {
      id: 'ai-models',
      title: 'AI Models',
      description: 'Proprietary LLMs: Lynxa-mini, AJ, and Hanuman S1',
      icon: Brain,
      href: '/ai-models',
      color: 'from-purple-500 to-pink-500',
      bgAccent: 'bg-purple-500/10'
    },
    {
      id: 'nexariq',
      title: 'Nexariq Division',
      description: 'Premium AI solutions and enterprise services',
      icon: Rocket,
      href: '/nexariq',
      color: 'from-orange-500 to-red-500',
      bgAccent: 'bg-orange-500/10'
    },
    {
      id: 'projects',
      title: 'Our Projects',
      description: 'Showcase of successful projects and case studies',
      icon: Folder,
      href: '/projects',
      color: 'from-green-500 to-emerald-500',
      bgAccent: 'bg-green-500/10'
    }
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes AJ STUDIOZ the premier choice for digital excellence
          </p>
        </div>

        {/* Preview Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <Link
                key={section.id}
                href={section.href}
                className="group animate-in-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full p-6 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 hover-elevate">
                  {/* Background accent */}
                  <div className={`absolute inset-0 ${section.bgAccent} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${section.color} bg-opacity-20 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} className="text-foreground" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {section.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
