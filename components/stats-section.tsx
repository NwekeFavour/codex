"use client"

import { useEffect, useRef, useState } from "react"

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: "500+", label: "Projects Completed", delay: "0ms" },
    { number: "150+", label: "Happy Clients", delay: "200ms" },
    { number: "24/7", label: "Support Available", delay: "400ms" },
    { number: "99%", label: "Uptime Guarantee", delay: "600ms" },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-[#2f4f83]/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Trusted by Businesses Worldwide</h2>
          <p className="text-xl text-slate-900 font-semibold max-w-2xl mx-auto">
            Our track record speaks for itself. Here's what we've achieved together with our clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: stat.delay }}
            >
              <div className="text-4xl md:text-5xl font-bold !text-white mb-2">{stat.number}</div>
              <div className="text-slate-900 font-semibold ">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
