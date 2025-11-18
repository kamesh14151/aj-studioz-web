'use client'

import { useState } from 'react'
import { ExternalLink, ArrowRight, Filter } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'MVK Transports',
    category: 'Transport',
    description: 'Advanced logistics platform with real-time GPS tracking and fleet management',
    url: 'https://mvk-transports.vercel.app/',
    tech: ['Next.js', 'GPS', 'Real-time']
  },
  {
    id: 2,
    title: 'CGPA Calculator',
    category: 'Education',
    description: 'Multi-branch GPA calculator for engineering students',
    url: 'https://cgpa-calc-aj.vercel.app/',
    tech: ['React', 'Education', 'Tools']
  },
  {
    id: 3,
    title: 'MEOW',
    category: 'AI Search',
    description: 'AI-powered search engine with intelligent response generation',
    url: 'https://www.meow.ajstudioz.co.in/',
    tech: ['AI', 'Search', 'Nexariq']
  },
  {
    id: 4,
    title: 'TOMO Chat',
    category: 'AI Chat',
    description: 'Advanced chatbot with web search and real-time data',
    url: 'https://chat.tomoacademy.site',
    tech: ['AI SDK', 'Chat', 'Real-time']
  },
  {
    id: 5,
    title: 'TOMO Academy',
    category: 'Learning',
    description: 'Content creation and team management platform',
    url: 'https://dev.tomoacademy.site/',
    tech: ['Next.js', 'Analytics', 'Mgmt']
  },
  {
    id: 6,
    title: 'cURL Tester',
    category: 'Dev Tools',
    description: 'Professional API testing tool for developers',
    url: 'https://v0-aj-studioz-curl-tester-edmp.vercel.app/',
    tech: ['API', 'Tools', 'Testing']
  },
  {
    id: 7,
    title: 'Forge Hub',
    category: 'Collab',
    description: 'Project management and team collaboration hub',
    url: 'https://tomo-forge-hub.vercel.app/',
    tech: ['Collab', 'Mgmt', 'Teams']
  },
  {
    id: 8,
    title: 'IB Resource Hub',
    category: 'Learning',
    description: 'Comprehensive resource platform for IB students',
    url: 'https://ib-online-resource-hub.vercel.app/',
    tech: ['Education', 'Resources', 'Learning']
  }
]

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(projects.map(p => p.category))]
  const filtered = selectedCategory === 'All' 
    ? projects.slice(0, 6)
    : projects.filter(p => p.category === selectedCategory).slice(0, 6)

  return (
    <section id="showcase" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-card/15 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge applications built with precision, innovation, and enterprise-grade quality
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 mr-4 text-muted-foreground">
            <Filter size={18} />
            <span className="text-sm font-medium">Filter:</span>
          </div>
          {categories.slice(0, 5).map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105'
                  : 'bg-card/50 border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground hover-elevate'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filtered.map(project => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-premium p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 flex flex-col cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex-1">
                  <p className="text-xs text-accent font-bold uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-1 mt-1">
                    {project.title}
                  </h3>
                </div>
                <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" />
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30">
                {project.tech.map(tech => (
                  <span key={tech} className="px-3 py-1.5 text-xs bg-primary/15 text-primary rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center p-10 card-premium border-primary/30 hover-elevate">
          <h3 className="text-2xl font-bold mb-3">View Complete Portfolio</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Explore all 8+ projects across different industries and technologies
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all hover-elevate btn-luxury"
          >
            View All Projects <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
