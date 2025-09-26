"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, XCircle, CheckCircle } from "lucide-react"

export default function QuickContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [service, setService] = useState("")

  const [formData, setFormData] = useState({
    Yname: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "https://codex2-1.onrender.com"}/api/quick-contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, service }),
        }
      )

      if (!response.ok) throw new Error("Network response was not ok")

      setIsSubmitted(true)

      // ✅ reset form
      setFormData({ Yname: "", email: "", phone: "", message: "" })
      setService("")
    } catch (error) {
      setErrorMessage("There was a problem submitting your message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
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

              {errorMessage && (
                <div className="mb-4 flex items-center justify-center text-red-600 font-semibold">
                  <XCircle className="w-5 h-5 mr-2" />
                  {errorMessage}
                </div>
              )}

              {isSubmitted ? (
                <div className="bg-green-100 border border-green-300 rounded-lg p-8 text-center">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-green-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mt-6 border-green-600 text-green-700 hover:bg-green-600 hover:text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      name="Yname"
                      value={formData.Yname}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="border-slate-300"
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="border-slate-300"
                    />
                  </div>

                  <Input
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="border-slate-300"
                  />

                  <Select value={service} onValueChange={setService}>
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

                  <Textarea
                    name="message"
                    placeholder="Brief project description (optional)"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="border-slate-300"
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/80 text-white py-3"
                  >
                    {isSubmitting ? "Sending..." : "Get Free Quote"}
                  </Button>
                </form>
              )}
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
                    <div className="text-slate-600">Info@codex.ng</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Visit Us</div>
                    <div className="text-slate-600">A05 Tsukunda House, CBD, Abuja</div>
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