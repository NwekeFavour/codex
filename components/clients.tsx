"use client"

import { useState, useEffect } from "react"
import Microsoft from "../assets/images/micosoft.webp"
import Mitrotek from '../assets/images/MikroTik-Logo.webp'
import Spdc from '../assets/images/spdc1_1.webp'
import BUA from '../assets/images/images.webp'
import Odoo from '../assets/images/odoo-logo.webp'
import Starlink from '../assets/images/starlink.svg'
import Babalankiandco from '../assets/images/bablanki.webp'
import Arcades from '../assets/images/arcadesuites.webp'
import GrowthStack from '../assets/images/growth-stack-logo.webp'
import NUPRC from '../assets/images/nuprc.webp'
import Layer from '../assets/images/layer.svg'

const partners = [
  {
    name: "Microsoft",
    logo: Microsoft.src,
  },
  {
    name: "Mikrotik",
    logo: Mitrotek.src,
  },
  { 
    name: "Layer3",
    logo: Layer.src,
  },
  {
    name: "BUA",
    logo: BUA.src,
  },
  {
    name: "Odoo",
    logo: Odoo.src,
  },
  {
    name: "Starlink",
    logo: Starlink.src,
  },
  {
    name: "Babalankinandco",
    logo: Babalankiandco.src,
  },
  {
    name: "Spdc",
    logo: Spdc.src,
  },
  {
    name: "GrowthStack",
    logo: GrowthStack.src,
  },
  {
    name: "NUPRC",
    logo: NUPRC.src
  },
  {
    name: "ArcadeSuites",
    logo: Arcades.src,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const itemsPerView = 5

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isTransitioning) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + itemsPerView >= partners.length ? 0 : prevIndex + 1))
        setIsTransitioning(false)
      }, 50)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, itemsPerView, isTransitioning])


  const visiblePartners = partners.slice(currentIndex, currentIndex + itemsPerView)

  // Fill remaining slots if we're at the end
  if (visiblePartners.length < itemsPerView && currentIndex > 0) {
    const remaining = itemsPerView - visiblePartners.length
    visiblePartners.push(...partners.slice(0, remaining))
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Clients and Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Building success together with industry-leading companies who trust our solutions
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-8xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex gap-4  sm:gap-0 lg:gap-0  transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              style={{ transform: `translateX(-${(currentIndex / itemsPerView) * 100}%)` }}
            >
              {partners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0  w-1/5 flex items-center justify-center group"
                >
                  <div
                    className="relative overflow-hidden rounded-lg transition-all duration-500 ease-out"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={`${partner.name} logo`}
                        className="object-contain transition-all duration-500 ease-out group-hover:scale-105 max-h-14 sm:max-h-18 md:max-h-14 lg:max-h-16 mx-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(partners.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full mt-4 transition-all duration-400 ease-out hover:scale-125 ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? "bg-accent w-8 shadow-md"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2"
                }`}
                onClick={() => {
                  if (isTransitioning) return
                  setIsAutoPlaying(false)
                  setIsTransitioning(true)
                  setTimeout(() => {
                    setCurrentIndex(index * itemsPerView)
                    setIsTransitioning(false)
                  }, 50)
                }}
                disabled={isTransitioning}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
