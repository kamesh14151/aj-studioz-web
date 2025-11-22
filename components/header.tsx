'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import GlowingText from './glowing-text'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Detect if scrolled past threshold
      setIsScrolled(currentScrollY > 20)
      
      // Smart hide/show based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true) // Scrolling down
      } else {
        setIsHidden(false) // Scrolling up
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        isScrolled 
          ? 'border-border/50 bg-background/98 backdrop-blur-xl shadow-lg shadow-background/50' 
          : 'border-border/30 bg-background/95 backdrop-blur-md'
      } ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-3'
        }`}>
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/AJ.svg"
              alt="AJ STUDIOZ Logo"
              width={isScrolled ? 35 : 40}
              height={isScrolled ? 35 : 40}
              className="object-contain transition-all duration-300"
            />
            <span className="text-base md:text-lg font-bold rgb-flashing">
              AJ STUDIOZ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/services" className="text-xs text-muted-foreground hover:text-foreground hover:scale-110 transition-all relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/nexariq" className="text-xs text-muted-foreground hover:text-foreground hover:scale-110 transition-all relative group">
              Nexariq AI
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/projects" className="text-xs text-muted-foreground hover:text-foreground hover:scale-110 transition-all relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="#contact" className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg text-xs font-medium hover:shadow-lg hover:shadow-primary/30 transition-all btn-luxury hover:scale-105">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-3 flex flex-col gap-2 animate-in-up">
            <Link href="/services" className="text-xs text-muted-foreground hover:text-foreground transition-colors py-2">
              Services
            </Link>
            <Link href="/nexariq" className="text-xs text-muted-foreground hover:text-foreground transition-colors py-2">
              Nexariq AI
            </Link>
            <Link href="/projects" className="text-xs text-muted-foreground hover:text-foreground transition-colors py-2">
              Projects
            </Link>
            <Link href="#contact" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:bg-primary/90 transition-colors inline-block btn-luxury">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
