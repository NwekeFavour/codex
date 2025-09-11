"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Codex Technologies transformed our business with their automation solutions. Our efficiency increased by 300%!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Global Logistics",
      text: "Their network installation was flawless. Zero downtime and excellent support throughout the process.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      text: "The web development team delivered beyond our expectations. Professional, fast, and innovative.",
      rating: 5,
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-[#2f4f83]/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-[#0A2540]/60 p-6 rounded-lg transform transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-slate-400 text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
