"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X, Phone, MenuIcon } from "lucide-react"
import Image from "next/image"
import Codex from "../assets/images/codex.webp"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image src={Codex.src} alt="Codex Logo" width={50} height={50} /> 
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-foreground hover:text-accent transition-colors flex items-center">
                Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <Link
                    href="/services/web-development"
                    className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/services/business-automation"
                    className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                  >
                    Business Automation
                  </Link>
                  <Link
                    href="/services/network-installation"
                    className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                  >
                    Network Installation
                  </Link>
                  <Link
                    href="/services/starlink-installation"
                    className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                  >
                    Starlink Installation
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          {/* Free Consultation Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact/#services">
                <Phone className="mr-2 h-4 w-4" />
                Free Consultation
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground">
              {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon style={{width: "30px", height: "30px"}} className="text-[30px] " width={40} height={40} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              <Link
                href="/"
                className="block px-3 py-2 text-card-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="relative">
                <button
                  className="w-full flex justify-between items-center px-3 py-2 text-card-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                  onClick={() => setShowServicesDropdown((prev) => !prev)}
                >
                  Services
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showServicesDropdown && (
                  <div className="mt-2 bg-card border border-border rounded-lg shadow-lg">
                    <Link
                      href="/services/web-development"
                      className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      onClick={() => { setIsMenuOpen(false); setShowServicesDropdown(false); }}
                    >
                      Web Development
                    </Link>
                    <Link
                      href="/services/business-automation"
                      className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      onClick={() => { setIsMenuOpen(false); setShowServicesDropdown(false); }}
                    >
                      Business Automation
                    </Link>
                    <Link
                      href="/services/network-installation"
                      className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      onClick={() => { setIsMenuOpen(false); setShowServicesDropdown(false); }}
                    >
                      Network Installation
                    </Link>
                    <Link
                      href="/services/starlink-installation"
                      className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      onClick={() => { setIsMenuOpen(false); setShowServicesDropdown(false); }}
                    >
                      Starlink Installation
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/contact"
                className="block px-3 py-2 text-card-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contact/#services">
                    <Phone className="mr-2 h-4 w-4" />
                    Free Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
