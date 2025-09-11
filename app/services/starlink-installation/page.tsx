import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Satellite, MapPin, Zap, Shield, CheckCircle, ArrowRight, Globe, Signal, Wifi } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Starlink Installation Services - High-Speed Satellite Internet | codex technology Solutions",
  description:
    "Professional Starlink satellite internet installation services. High-speed connectivity for remote locations and businesses. Expert setup and configuration.",
  keywords:
    "Starlink installation, satellite internet, high-speed internet, remote connectivity, Starlink setup, satellite dish installation",
  openGraph: {
    title: "Starlink Installation Services - codex technology Solutions",
    description: "Professional Starlink satellite internet installation for reliable high-speed connectivity anywhere.",
    type: "website",
  },
}

const services = [
  {
    title: "Residential Installation",
    description: "Complete Starlink setup for homes in rural and remote areas with limited internet options.",
    icon: MapPin,
    features: ["Site assessment", "Dish positioning", "Network setup", "Performance optimization"],
  },
  {
    title: "Business Installation",
    description: "Enterprise Starlink solutions for businesses requiring reliable high-speed internet connectivity.",
    icon: Globe,
    features: ["Business-grade setup", "Redundancy planning", "Network integration", "Priority support"],
  },
  {
    title: "Mobile & Maritime",
    description: "Starlink solutions for RVs, boats, and mobile applications requiring internet on the go.",
    icon: Signal,
    features: ["Mobile dish setup", "Portable solutions", "Maritime installation", "Travel optimization"],
  },
  {
    title: "Backup Connectivity",
    description: "Starlink as a backup internet solution to ensure business continuity and redundancy.",
    icon: Shield,
    features: ["Failover setup", "Automatic switching", "Load balancing", "Continuous monitoring"],
  },
]

const benefits = [
  {
    title: "High-Speed Internet",
    description: "Download speeds up to 220 Mbps with low latency for seamless online experiences.",
    icon: Zap,
  },
  {
    title: "Global Coverage",
    description: "Available virtually anywhere with a clear view of the sky, perfect for remote locations.",
    icon: Globe,
  },
  {
    title: "Easy Installation",
    description: "Quick and professional setup with minimal infrastructure requirements.",
    icon: Satellite,
  },
  {
    title: "Reliable Connection",
    description: "Weather-resistant technology with 99%+ uptime for consistent connectivity.",
    icon: Wifi,
  },
]

const process = [
  {
    step: "1",
    title: "Site Survey",
    description:
      "We assess your location for optimal dish placement and check for any obstructions that might affect signal quality.",
  },
  {
    step: "2",
    title: "Equipment Setup",
    description:
      "Professional installation of the Starlink dish, router, and all necessary equipment with proper mounting and weatherproofing.",
  },
  {
    step: "3",
    title: "Network Configuration",
    description:
      "Complete network setup including WiFi configuration, device connections, and performance optimization.",
  },
  {
    step: "4",
    title: "Testing & Training",
    description:
      "Comprehensive testing of the connection and user training to ensure you get the most from your Starlink service.",
  },
]

const applications = [
  { name: "Remote Work", description: "Reliable internet for home offices and remote workers" },
  { name: "Rural Businesses", description: "High-speed connectivity for businesses in rural areas" },
  { name: "Emergency Services", description: "Backup connectivity for critical operations" },
  { name: "Construction Sites", description: "Temporary internet for construction and project sites" },
  { name: "Maritime Operations", description: "Internet connectivity for boats and offshore operations" },
  { name: "RV & Travel", description: "Mobile internet for recreational vehicles and travelers" },
]

export default function StarlinkInstallationPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <Satellite className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Starlink Installation Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Professional Starlink satellite internet installation services. Get high-speed internet connectivity
              anywhere with our expert setup and configuration services for residential and business applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  Schedule Installation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <Link href="#services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Starlink Installation Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Professional installation services for all types of Starlink applications, from residential to enterprise
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-4 text-pretty">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-card-foreground">
                          <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Why Choose Starlink</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover the advantages of Starlink satellite internet for your connectivity needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-pretty">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Starlink Applications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Starlink provides reliable internet connectivity for a wide range of applications and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{app.name}</h3>
                <p className="text-muted-foreground text-sm text-pretty">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Installation Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our systematic approach ensures optimal Starlink performance and reliability from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-pretty">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready for High-Speed Satellite Internet?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Contact us to schedule your professional Starlink installation and experience reliable high-speed internet
              anywhere.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">
                Get Starlink Installation
                <ArrowRight className="ml-2 h-5 w-5" />
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
