"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Settings, Satellite, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Infastructure from "../assets/images/network-infrastructure-and-satellite-technology.webp"
import Business from "../assets/images/business-automation-dashboard.webp"
import Computers from "../assets/images/modern-office-with-computers-and-technology.webp"


const slides = [
  {
    title: "Transform Your Business with Cutting-Edge IT Solutions",
    subtitle: "Web Development • Business Automation • Network Solutions",
    description:
      "Empower your business with our comprehensive IT services. From custom web applications to enterprise automation, we deliver solutions that drive growth.",
    cta: "Get Started Today",
    icon: Code,
    image: Computers.src,
  },
  {
    title: "Streamline Operations with Business Automation",
    subtitle: "Odoo ERP • Process Management • Digital Transformation",
    description:
      "Automate your workflows and boost productivity with our business automation solutions. Implement Odoo ERP and custom management systems tailored to your needs.",
    cta: "Learn More",
    icon: Settings,
    image: Business.src,
  },
  {
    title: "Connect Your World with Advanced Networking",
    subtitle: "Network Installation • Starlink Setup • Infrastructure",
    description:
      "Stay connected with our professional network installation and Starlink satellite internet services. Reliable connectivity for your business success.",
    cta: "Contact Us",
    icon: Satellite,
    image: Infastructure.src,
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const currentSlideData = slides[currentSlide]
  const Icon = currentSlideData.icon

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content Side */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Icon */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                <Icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <div className="h-px bg-gradient-to-r from-accent to-transparent flex-1" />
            </div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-3xl lg:text-[40px] font-bold text-foreground text-balance leading-tight">
              {currentSlideData.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-accent font-semibold text-balance">{currentSlideData.subtitle}</p>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl">
              {currentSlideData.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">
                  {currentSlideData.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent rounded-xl transition-all duration-300"
              >
                <Link href="#services">View Services</Link>
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-4">
              <div className="flex space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === currentSlide
                        ? "w-12 bg-accent"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative order-1 lg:order-2">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-card">
                <div className="aspect-[4/3] relative">
                  <img
                    src={currentSlideData.image || "/placeholder.svg"}
                    alt={`${currentSlideData.title} - IT Services`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                </div>

                {/* Floating Service Badge */}
                <div className="absolute top-6 left-6 bg-background/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                  <p className="text-sm font-semibold text-accent">{currentSlideData.subtitle.split(" • ")[0]}</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm hover:bg-background border border-border rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl z-10"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm hover:bg-background border border-border rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl z-10"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--accent)) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, hsl(var(--secondary)) 0%, transparent 50%)`,
          }}
        />
      </div>
    </section>
  )
}
