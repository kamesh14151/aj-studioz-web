'use client'

import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, duration: number}>>([])

  useEffect(() => {
    // Generate particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 opacity-30">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-primary/40 to-accent/40 blur-sm animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  )
}
