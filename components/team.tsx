const team = [
  {
    name: 'Alexander Johnson',
    role: 'Founder & Lead Architect',
    expertise: 'Full-Stack Development, System Design',
  },
  {
    name: 'Dr. Sarah Mitchell',
    role: 'AI Research Lead',
    expertise: 'Machine Learning, Natural Language Processing',
  },
  {
    name: 'James Chen',
    role: 'Design Director',
    expertise: 'UI/UX, Brand Strategy',
  },
  {
    name: 'Priya Sharma',
    role: 'DevOps & Infrastructure',
    expertise: 'Cloud Architecture, Scalability',
  },
]

export default function Team() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-4">
            <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Expert Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Leadership</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visionary minds driving innovation and excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="card-premium group p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-6 group-hover:shadow-lg" />
              
              <h3 className="text-lg font-bold mb-1">{member.name}</h3>
              <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
              <p className="text-xs text-muted-foreground">{member.expertise}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
