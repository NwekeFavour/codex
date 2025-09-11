"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin } from "lucide-react"

export default function QuickContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-green-100 border border-green-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
              <p className="text-green-700">We've received your message and will get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br md:px-10 from-indigo-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-slate-600">
              Get a free consultation and quote for your project in just 2 minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Quick Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Quick Contact</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" required className="border-slate-300" />
                  <Input type="email" placeholder="Email Address" required className="border-slate-300" />
                </div>

                <Input placeholder="Phone Number" className="border-slate-300" />

                <Select required>
                  <SelectTrigger className="border-slate-300">
                    <SelectValue placeholder="Service Needed" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="business-automation">Business Automation</SelectItem>
                    <SelectItem value="network-installation">Network Installation</SelectItem>
                    <SelectItem value="starlink-installation">Starlink Installation</SelectItem>
                    <SelectItem value="consultation">Free Consultation</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea placeholder="Brief project description (optional)" rows={3} className="border-slate-300" />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/80 text-white py-3"
                >
                  {isSubmitting ? "Sending..." : "Get Free Quote"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">Get in Touch</h3>
                <p className="text-slate-600 mb-8">
                  Prefer to talk directly? Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Call Us</div>
                    <div className="text-slate-600">+234 811 102 2909</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Email Us</div>
                    <div className="text-slate-600">hello@codextechnologies.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Visit Us</div>
                    <div className="text-slate-600">A05 Tsukunda House Central Business District</div>
                  </div>
                </div>
              </div>

              <div className="bg-accent text-white p-6 rounded-lg">
                <h4 className="font-semibold mb-2">24/7 Emergency Support</h4>
                <p className="text-indigo-100 text-sm">
                  Critical system issues? Our emergency support team is available around the clock.
                </p>
                <div className="mt-3 font-semibold">+234 811 102 2909</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
