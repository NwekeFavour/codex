import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, Shield, Server, Monitor, CheckCircle, ArrowRight, Network, Cable, Router } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Network Installation Services - Professional IT Infrastructure | codex technology Solutions",
  description:
    "Professional network installation and infrastructure services. Secure, scalable, and reliable networking solutions for businesses of all sizes.",
  keywords:
    "network installation, IT infrastructure, network security, server setup, wireless networks, network maintenance",
  openGraph: {
    title: "Network Installation Services - codex technology Solutions",
    description:
      "Professional network infrastructure setup and maintenance services for secure and reliable business connectivity.",
    type: "website",
  },
}

const services = [
  {
    title: "Network Infrastructure Setup",
    description: "Complete network infrastructure design and installation for optimal performance and reliability.",
    icon: Network,
    features: ["Network design", "Cable installation", "Switch configuration", "Router setup"],
  },
  {
    title: "Wireless Network Solutions",
    description: "Secure and high-performance wireless networks with enterprise-grade access points.",
    icon: Wifi,
    features: ["WiFi 6 technology", "Coverage optimization", "Guest networks", "Mobile device management"],
  },
  {
    title: "Network Security",
    description: "Comprehensive security solutions to protect your network from threats and unauthorized access.",
    icon: Shield,
    features: ["Firewall configuration", "VPN setup", "Access control", "Security monitoring"],
  },
  {
    title: "Server Installation",
    description: "Professional server setup and configuration for your business applications and data storage.",
    icon: Server,
    features: ["Server hardware setup", "Operating system installation", "Application deployment", "Backup solutions"],
  },
]

const networkTypes = [
  { name: "Small Office Networks", description: "Perfect for businesses with 5-25 employees" },
  { name: "Enterprise Networks", description: "Scalable solutions for large organizations" },
  { name: "Wireless Networks", description: "High-performance WiFi for mobile connectivity" },
  { name: "Hybrid Networks", description: "Combination of wired and wireless infrastructure" },
  { name: "Cloud Networks", description: "Integration with cloud services and remote access" },
  { name: "Secure Networks", description: "Enhanced security for sensitive business data" },
]

const process = [
  {
    step: "1",
    title: "Site Assessment",
    description:
      "We evaluate your space, requirements, and existing infrastructure to design the optimal network solution.",
  },
  {
    step: "2",
    title: "Network Design",
    description: "Our engineers create a detailed network plan including equipment specifications and layout diagrams.",
  },
  {
    step: "3",
    title: "Installation & Configuration",
    description: "Professional installation of all network components with proper configuration and testing.",
  },
  {
    step: "4",
    title: "Testing & Support",
    description: "Comprehensive testing and ongoing support to ensure optimal network performance and reliability.",
  },
]

const features = [
  {
    title: "High-Speed Connectivity",
    description: "Gigabit ethernet and WiFi 6 technology for maximum performance and speed.",
    icon: Cable,
  },
  {
    title: "Scalable Architecture",
    description: "Network designs that can easily expand as your business grows and evolves.",
    icon: Router,
  },
  {
    title: "24/7 Monitoring",
    description: "Continuous network monitoring and proactive maintenance to prevent issues.",
    icon: Monitor,
  },
  {
    title: "Enterprise Security",
    description: "Advanced security features to protect your business data and network resources.",
    icon: Shield,
  },
]

export default function NetworkInstallationPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <Wifi className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Network Installation Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Professional network infrastructure setup and maintenance services. We design, install, and maintain
              secure, scalable, and reliable networking solutions for businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  Get Network Assessment
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Network Installation Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive networking solutions designed to meet your business connectivity and security requirements.
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

      {/* Network Types */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Network Solutions We Provide</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              From small office networks to enterprise-grade infrastructure, we have the expertise to handle any
              networking requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {networkTypes.map((type, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{type.name}</h3>
                <p className="text-muted-foreground text-sm text-pretty">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Network Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Professional installation with enterprise-grade equipment and ongoing support for optimal performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-pretty">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Our Installation Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A systematic approach to ensure your network is installed correctly and performs optimally from day one.
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Upgrade Your Network?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Contact us for a free network assessment and discover how we can improve your business connectivity and
              security.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">
                Schedule Assessment
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
