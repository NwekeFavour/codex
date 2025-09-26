"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, CheckCircle, XCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    timeline: "",
    message: "",
    consent: false,
    newsletter: false,
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage("")

    try {
      const response = await fetch("https://codex2-rttd.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // ✅ send state directly
      })

      console.log("Submitted Data:", formData)

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error(error)
      setErrorMessage("There was a problem submitting your message. Please try again later.")
    }

    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <Card className="border-border bg-background">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Message Sent Successfully!</h3>
          <p className="text-muted-foreground mb-6 text-pretty">
            Thank you for contacting us. We'll review your message and get back to you within 24 hours with a detailed
            response.
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false)
              setErrorMessage("")
              setFormData({
                fname: "",
                lname: "",
                email: "",
                phone: "",
                company: "",
                service: "",
                timeline: "",
                message: "",
                consent: false,
                newsletter: false,
              }) // reset form
            }}
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border bg-background">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">Get Your Free Consultation</CardTitle>
        <CardDescription className="text-muted-foreground">
          Tell us about your project and we'll provide a detailed proposal and timeline.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {errorMessage && (
          <div className="mb-4 flex items-center justify-center text-red-600 font-semibold">
            <XCircle className="w-5 h-5 mr-2" />
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fname" className="text-foreground">
                First Name *
              </Label>
              <Input
                id="fname"
                name="fname"
                value={formData.fname}
                onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
                required
                placeholder="John"
                className="bg-input border-border text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lname" className="text-foreground">
                Last Name *
              </Label>
              <Input
                id="lname"
                name="lname"
                value={formData.lname}
                onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
                required
                placeholder="Doe"
                className="bg-input border-border text-foreground"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              type="email"
              required
              placeholder="john@company.com"
              className="bg-input border-border text-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              value={formData.phone}
              type="tel"
              placeholder="+234 802 453 8970"
              className="bg-input border-border text-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-foreground">
              Company Name
            </Label>
            <Input
              id="company"
              name="company"
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              value={formData.company}
              placeholder="Your Company Inc."
              className="bg-input border-border text-foreground"
            />
          </div>

          {/* Service Selection */}
          <div className="space-y-2">
            <Label htmlFor="service" className="text-foreground">
              Service Interested In *
            </Label>
            <Select
              name="service"
              value={formData.service}
              onValueChange={(value) => setFormData({ ...formData, service: value })}
              required
            >
              <SelectTrigger className="bg-input border-border text-foreground">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="business-automation">Business Automation & Odoo ERP</SelectItem>
                <SelectItem value="network-installation">Network Installation</SelectItem>
                <SelectItem value="starlink-installation">Starlink Installation</SelectItem>
                <SelectItem value="multiple">Multiple Services</SelectItem>
                <SelectItem value="consultation">General Consultation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Project Timeline */}
          <div className="space-y-2">
            <Label htmlFor="timeline" className="text-foreground">
              Project Timeline
            </Label>
            <Select
              name="timeline"
              value={formData.timeline}
              onValueChange={(value) => setFormData({ ...formData, timeline: value })}
            >
              <SelectTrigger className="bg-input border-border text-foreground">
                <SelectValue placeholder="When do you need this completed?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">As soon as possible</SelectItem>
                <SelectItem value="1-month">Within 1 month</SelectItem>
                <SelectItem value="3-months">Within 3 months</SelectItem>
                <SelectItem value="6-months">Within 6 months</SelectItem>
                <SelectItem value="flexible">Timeline is flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">
              Project Details *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              placeholder="Please describe your project requirements, current challenges, and what you hope to achieve..."
              rows={5}
              className="bg-input border-border text-foreground resize-none"
            />
          </div>

          {/* Consent */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData({ ...formData, consent: Boolean(checked) })}
              name="consent"
              required
              className="mt-1"
            />
            <Label htmlFor="consent" className="text-sm text-muted-foreground text-pretty leading-relaxed">
              I agree to receive communications from Codex Technology Solutions regarding my inquiry. I understand I can
              unsubscribe at any time. *
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => setFormData({ ...formData, newsletter: Boolean(checked) })}
              name="newsletter"
            />
            <Label htmlFor="newsletter" className="text-sm text-muted-foreground text-pretty leading-relaxed">
              I'd like to receive updates about new services and IT industry insights.
            </Label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            disabled={isLoading}
            className="w-full bg-accent sm:flex hidden hover:bg-accent/90 text-accent-foreground"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent-foreground mr-2"></div>
                Sending Message...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message & Get Free Consultation
              </>
            )}
          </Button>

          <Button
            type="submit"
            size="lg"
            disabled={isLoading}
            className="w-full bg-accent sm:hidden flex hover:bg-accent/90 text-accent-foreground"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent-foreground mr-2"></div>
                Sending Message...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Get Free Consultation
              </>
            )}
          </Button>
          <p className="text-xs text-muted-foreground text-center text-pretty">
            By submitting this form, you agree to our privacy policy. We'll never share your information with third
            parties.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
