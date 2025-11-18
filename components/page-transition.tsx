'use client'

import { useEffect, useState } from 'react'

export default function PageTransition() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleStop = () => setIsLoading(false)

    return () => {
      handleStop()
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-primary/20 to-background animate-pulse" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
      </div>
    </div>
  )
}
