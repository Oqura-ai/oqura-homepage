"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Github, Menu, X } from "lucide-react"
import Link from "next/link"
import logo from "@/assets/logo.png"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-5 w-full z-50 transition-all duration-300`}
    >
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl ${
        isScrolled ? "bg-background/100 backdrop-blur-md border-b border-border" : "bg-background/40"
      }`}>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-none rounded-lg flex items-center justify-center">
              <Image src={logo} alt="Oqura.ai" />
            </div>
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Oqura.ai
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#community" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/Oqura-ai" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button 
              size="sm" 
              className="pulse-glow" 
              onClick={() => window.location.href = "/#community"}
            >
              Explore
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4 p-4">
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <div className="flex items-center space-x-2 pt-2">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  className="pulse-glow" 
                  onClick={() => window.location.href = "/#community"}
                >
                  Explore
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
