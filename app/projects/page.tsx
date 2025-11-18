'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: 'MVK Transports',
      category: 'business',
      description: 'Professional multi-page business website for transport company with service details and contact information.',
      tech: ['Next.js', 'React', 'Tailwind CSS'],
      image: '/project-mvk.jpg',
      url: 'https://mvk-transports.vercel.app/'
    },
    {
      title: 'CGPA Calculator',
      category: 'education',
      description: 'Smart GPA calculation tool with real-time tracking and academic performance analytics.',
      tech: ['React', 'JavaScript', 'Tailwind CSS'],
      image: '/project-cgpa.jpg',
      url: 'https://cgpa-calc-aj.vercel.app/'
    },
    {
      title: 'Meow Store',
      category: 'ecommerce',
      description: 'Modern e-commerce platform with product catalog, shopping cart, and secure checkout.',
      tech: ['Next.js', 'Stripe', 'MongoDB'],
      image: '/project-meow.jpg',
      url: 'https://www.meow.ajstudioz.co.in/'
    },
    {
      title: 'Tomo Academy Chat',
      category: 'education',
      description: 'Real-time chat platform for educational collaboration and peer learning.',
      tech: ['Next.js', 'Socket.io', 'Firebase'],
      image: '/project-tomo-chat.jpg',
      url: 'https://chat.tm.tomoacademy.site'
    },
    {
      title: 'Tomo Academy Platform',
      category: 'education',
      description: 'Comprehensive learning management system with courses, assessments, and progress tracking.',
      tech: ['Next.js', 'PostgreSQL', 'React'],
      image: '/project-tomo-academy.jpg',
      url: 'https://dev.tomoacademy.site/'
    },
    {
      title: 'cURL Tester',
      category: 'developer-tools',
      description: 'Advanced API testing tool for developers with request history and response formatting.',
      tech: ['React', 'TypeScript', 'Fetch API'],
      image: '/project-curl.jpg',
      url: 'https://v0-aj-studioz-curl-tester-edmp.vercel.app/'
    },
    {
      title: 'Tomo Forge Hub',
      category: 'developer-tools',
      description: 'Development toolkit and resource hub for collaborative project management.',
      tech: ['Next.js', 'Node.js', 'MongoDB'],
      image: '/project-forge.jpg',
      url: 'https://tomo-forge-hub.vercel.app/'
    },
    {
      title: 'IB Resource Hub',
      category: 'education',
      description: 'Centralized repository of IB study materials and learning resources.',
      tech: ['Next.js', 'Firebase', 'React'],
      image: '/project-ib.jpg',
      url: 'https://ib-online-resource-hub.vercel.app/'
    },
  ]

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'business', label: 'Business' },
    { value: 'education', label: 'Education' },
    { value: 'ecommerce', label: 'E-Commerce' },
    { value: 'developer-tools', label: 'Developer Tools' },
  ]

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold glowing-brand">
              Our Portfolio
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcase of successful projects delivered to diverse clients across multiple industries
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === cat.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card/50 text-muted-foreground hover:bg-card border border-border/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((project, index) => (
              <div
                key={index}
                className="card-premium border border-border/30 overflow-hidden group hover:border-primary/40 flex flex-col"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                      {project.category.replace('-', ' ')}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm group/link"
                  >
                    View Project <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 border-y border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { number: '8+', label: 'Projects Delivered' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '5+', label: 'Industries Served' },
              { number: '0', label: 'Missed Deadlines' },
            ].map((stat, idx) => (
              <div key={idx} className="card-premium p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto card-premium p-8 md:p-12 text-center border border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Let's create something amazing together
          </p>
          <Link href="/" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all btn-luxury">
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
