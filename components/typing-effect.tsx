'use client'

import { useState, useEffect } from 'react'

interface TypingEffectProps {
  text: string
  speed?: number
  className?: string
}

export default function TypingEffect({ text, speed = 50, className = '' }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1))
      }, speed)
      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [displayedText, text, speed])

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  )
}
