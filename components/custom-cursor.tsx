'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      )
    }

    const hideCursor = () => setIsHidden(true)
    const showCursor = () => setIsHidden(false)

    window.addEventListener('mousemove', updateCursor)
    document.addEventListener('mouseleave', hideCursor)
    document.addEventListener('mouseenter', showCursor)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      document.removeEventListener('mouseleave', hideCursor)
      document.removeEventListener('mouseenter', showCursor)
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
          opacity: isHidden ? 0 : 1,
        }}
      />
      {/* Trailing cursor */}
      <div
        className="custom-cursor-trail"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 2 : 1})`,
          opacity: isHidden ? 0 : 0.3,
        }}
      />
    </>
  )
}
