'use client'

import { Star } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CEO, TechVentures Inc',
    content: 'AJ STUDIOZ transformed our vision into a stunning digital product. Their attention to detail and innovative approach exceeded all expectations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    title: 'CTO, InnovateLabs',
    content: 'The Nexariq AI models have become integral to our platform. The performance and reliability are unmatched in the industry.',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    title: 'Product Lead, FutureScale',
    content: 'Working with AJ STUDIOZ was a game-changer. Their team\'s expertise in both web development and AI integration is truly exceptional.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoPlay])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-4">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our partners and clients have to say about their transformation
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div 
            className="card-premium p-12 md:p-16 min-h-96 flex flex-col justify-between"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-xl leading-relaxed mb-8 text-foreground">
                "{testimonials[activeIndex].content}"
              </p>
            </div>

            <div className="flex items-center justify-between pt-8 border-t border-border/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent" />
                <div>
                  <p className="font-semibold">{testimonials[activeIndex].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[activeIndex].title}</p>
                </div>
              </div>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveIndex(idx)
                      setAutoPlay(false)
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === activeIndex ? 'bg-primary w-8' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
