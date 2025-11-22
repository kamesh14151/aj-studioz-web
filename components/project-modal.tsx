'use client'

import { useEffect, useState } from 'react'
import { X, ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

interface ProjectModalProps {
  project: {
    title: string
    description: string
    tech: string[]
    image: string
    url: string
    category: string
  } | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-in-scale"
      onClick={onClose}
    >
      {/* Glassmorphic Backdrop */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
      
      {/* Modal Content */}
      <div 
        className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-card/95 via-card/90 to-card/85 backdrop-blur-2xl rounded-3xl border border-border/50 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-3 rounded-full bg-background/80 hover:bg-background border border-border/50 hover:border-primary/50 transition-all duration-300 hover-elevate group"
        >
          <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Project Image */}
        <div className="relative w-full aspect-video bg-gradient-to-br from-background/98 via-background/95 to-background/98 p-8 rounded-t-3xl">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-border/30">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="p-8 space-y-6">
          {/* Category Badge */}
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-xs font-bold text-primary uppercase tracking-wider">
              {project.category.replace('-', ' ')}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/30 font-medium text-sm hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              <ExternalLink size={20} />
              View Live Project
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
