'use client'

import { Check } from 'lucide-react'

export default function EnterpriseSolutions() {
  const solutions = [
    {
      category: 'Web Development',
      items: ['Custom Web Applications', 'Progressive Web Apps', 'Real-time Systems', 'Cloud Architecture'],
    },
    {
      category: 'AI Integration',
      items: ['LLM Implementation', 'AI-powered Automation', 'Machine Learning Pipelines', 'Custom Training'],
    },
    {
      category: 'Infrastructure',
      items: ['DevOps Solutions', 'Cloud Migration', 'Microservices', 'Security Hardening'],
    },
  ]

  return (
    <section id="showcase" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Enterprise Solutions
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive digital transformation services tailored for AJ STUDIOZ partners
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {solutions.map((solution, idx) => (
          <div key={idx} className="card-premium p-8 space-y-6">
            <h3 className="text-2xl font-bold text-accent">{solution.category}</h3>
            <ul className="space-y-4">
              {solution.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-3">
                  <Check size={20} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
