import type { Metadata } from "next"
import Header from "@/components/header"
import ContactForm from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import { Skeleton } from "@/components/ui/skeleton"
import { useState } from "react"

export const metadata: Metadata = {
  title: "Contact Us - Get Your Free IT Consultation | codex technology Solutions",
  description:
    "Contact Codex Technology Solutions for professional IT services. Get your free consultation for web development, business automation, network installation, and Starlink services.",
  keywords:
    "contact IT company, free consultation, codex contact, IT services quote, web development contact, business automation consultation",
  openGraph: {
    title: "Contact Codex Technology Solutions - Free IT Consultation",
    description:
      "Get in touch with our IT experts for a free consultation on web development, automation, and network services.",
    type: "website",
  },
}

const contactInfo = [
  {
    title: "Phone",
    value: "+234 811 102 2909",
    description: "Call us for immediate assistance",
    icon: Phone,
    href: "tel: +2348111022909",
  },
  {
    title: "Email",
    value: "Info@codex.ng",
    description: "Send us your questions anytime",
    icon: Mail,
    href: "mailto:Info@codex.ng",
  },
  {
    title: "Address",
    value: "A05 Tsukunda House, CBD, Abuja",
    description: "Visit our office for in-person consultations",
    icon: MapPin,
    href: "https://maps.app.goo.gl/t9wkvwo23xueG2W26",
  },
  {
    title: "Business Hours",
    value: "Mon-Fri: 8AM-6PM, Sat: 9AM-3PM",
    description: "We're here when you need us",
    icon: Clock,
    href: null,
  },
]

const services = [
  {
    title: "Web Development Consultation",
    description: "Discuss your website or web application project requirements and get a detailed proposal.",
    href: "/services/web-development",
  },
  {
    title: "Business Automation Assessment",
    description: "Evaluate your current processes and discover automation opportunities with Odoo ERP.",
    href: "/services/business-automation",
  },
  {
    title: "Network Infrastructure Planning",
    description: "Get a comprehensive network assessment and design plan for your business.",
    href: "/services/network-installation",
  },
  {
    title: "Starlink Installation Quote",
    description: "Site assessment and installation quote for Starlink satellite internet services.",
    href: "/services/starlink-installation",
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">Contact Us</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Ready to transform your business with professional IT solutions? Get in touch with our experts for a free
              consultation and discover how we can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#contact-form">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <Link href="tel:+2348111022909">Call Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Multiple ways to reach us for your IT service needs. We're here to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              const content = (
                <Card
                  key={index}
                  className="border-border bg-card hover:shadow-lg transition-shadow duration-300 h-full"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-lg text-card-foreground">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-semibold text-foreground mb-2 text-pretty">{info.value}</p>
                    <CardDescription className="text-muted-foreground text-sm text-pretty">
                      {info.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )

              return info.href ? (
                <Link key={index} href={info.href} className="block">
                  {content}
                </Link>
              ) : (
                <div key={index}>{content}</div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Fill out the form below and we'll get back to you within 24 hours with a detailed response.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>

              {/* Services List */}
              <div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">What Can We Help You With?</h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <Card key={index} className="border-border bg-background">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                        <p className="text-muted-foreground text-sm mb-4 text-pretty">{service.description}</p>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="text-accent border-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                        >
                          <Link href={service.href}>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Visit Our Office</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Located in the heart of the innovation district, we're easily accessible for in-person consultations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden border border-border">
              <iframe className="w-full h-full border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1882083729893!2d7.470721273996372!3d9.046590188715435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b72d7fc40b1%3A0xe2b4bc84425d0204!2sTsukunda%20House!5e0!3m2!1sen!2sng!4v1758545886037!5m2!1sen!2sng" width="600" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="text-center mt-6">
              <Button
                asChild
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <Link href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1882083729893!2d7.470721273996372!3d9.046590188715435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b72d7fc40b1%3A0xe2b4bc84425d0204!2sTsukunda%20House!5e0!3m2!1sen!2sng!4v1758545886037!5m2!1sen!2sng" target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">Need Immediate Assistance?</h2>
            <p className="text-muted-foreground mb-6 text-pretty">
              For urgent IT issues or emergency support, call our priority support line available 24/7.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="tel:+2348111022909">
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Support
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
