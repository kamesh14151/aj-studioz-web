'use client'

interface GlowingTextProps {
  text: string
  className?: string
}

export default function GlowingText({ text, className = '' }: GlowingTextProps) {
  return (
    <span
      className={`${className} relative inline-block`}
      style={{
        animation: 'glowing-pulse 3s ease-in-out infinite',
        textShadow: '0 0 20px rgba(0, 200, 255, 0.6), 0 0 40px rgba(255, 100, 0, 0.3)',
      }}
    >
      {text}
    </span>
  )
}
