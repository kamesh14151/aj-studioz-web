'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Users, Target, Award, Zap } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold glowing-brand">
              About AJ STUDIOZ
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building the future of web development and AI technology solutions since 2020
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  AJ STUDIOZ was founded with a vision to bridge the gap between cutting-edge technology and practical business solutions. We started as a small team of passionate developers and have grown into a premium digital solutions provider.
                </p>
                <p>
                  Our journey began with a simple belief: technology should empower businesses, not complicate them. Today, we serve clients across multiple industries, delivering exceptional web applications, AI integrations, and digital experiences.
                </p>
                <p>
                  With expertise in modern frameworks, AI/ML technologies, and a commitment to excellence, we've successfully delivered 8+ projects reaching over 125K+ users worldwide.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl p-8"
                style={{
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                }}>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">5+ Years</h3>
                      <p className="text-muted-foreground">Industry Experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">125K+</h3>
                      <p className="text-muted-foreground">Users Reached</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">99%</h3>
                      <p className="text-muted-foreground">Client Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 border-y border-border/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Innovation First',
                description: 'We embrace cutting-edge technologies and innovative solutions to stay ahead of the curve.',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                icon: Award,
                title: 'Excellence Driven',
                description: 'Quality is not an option, it\'s our standard. We deliver premium solutions that exceed expectations.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Users,
                title: 'Client Focused',
                description: 'Your success is our success. We build lasting partnerships through exceptional service.',
                color: 'from-purple-500 to-pink-500'
              }
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl p-8 group hover-elevate transition-all duration-500"
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                  }}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} p-4 mb-6 shadow-lg`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Talented professionals dedicated to delivering exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'John Doe', role: 'Founder & CEO', image: '/professional-founder.jpg' },
              { name: 'Sarah Wilson', role: 'Lead Developer', image: '/professional-woman.png' },
              { name: 'Mike Chen', role: 'AI Specialist', image: '/professional-ai-researcher.jpg' },
              { name: 'Emily Brown', role: 'UX Designer', image: '/professional-designer.jpg' }
            ].map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl hover-elevate transition-all duration-500"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                }}>
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
