"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle, MessageSquare, Cog, Rocket } from "lucide-react"

export default function ProcessSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate steps one by one
          ;[0, 1, 2, 3].forEach((step, index) => {
            setTimeout(() => {
              setVisibleSteps((prev) => [...prev, step])
            }, index * 300)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      icon: MessageSquare,
      title: "Consultation",
      description: "We discuss your needs and create a tailored solution plan.",
    },
    {
      icon: CheckCircle,
      title: "Planning",
      description: "Detailed project roadmap with timelines and milestones.",
    },
    {
      icon: Cog,
      title: "Implementation",
      description: "Expert development and deployment of your solution.",
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "Go live with ongoing maintenance and support.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:pb-40 md:pb-36 sm:pb-36 pb-34 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Proven Process</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From initial consultation to ongoing support, we follow a structured approach to ensure your project's
            success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isVisible = visibleSteps.includes(index)

            return (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
                }`}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="absolute -top-2 -right-1 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
