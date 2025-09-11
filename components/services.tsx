import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Settings, Wifi, Satellite, ArrowRight } from "lucide-react"
import Link from "next/link"
import Coding from "../assets/images/web-development-coding-screen.webp"
import Business from "../assets/images/business-automation-dashboard.webp"
import Network from "../assets/images/network-cables-and-infrastructure.webp"
import Starlink from "../assets/images/starlink-satellite-dish-installation.webp"

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies. Responsive design, e-commerce solutions, and progressive web apps.",
    icon: Code,
    features: ["Custom Web Applications", "E-commerce Solutions", "Responsive Design", "Progressive Web Apps"],
    href: "/services/web-development",
    image: Coding.src,
  },
  {
    title: "Business Automation",
    description:
      "Streamline your operations with Odoo ERP implementation and custom business process automation solutions.",
    icon: Settings,
    features: ["Odoo ERP Implementation", "Process Automation", "Workflow Management", "Digital Transformation"],
    href: "/services/business-automation",
    image: Business.src,
  },
  {
    title: "Network Installation",
    description:
      "Professional network infrastructure setup and maintenance. Secure, scalable, and reliable networking solutions.",
    icon: Wifi,
    features: ["Network Infrastructure", "Security Setup", "Maintenance & Support", "Scalable Solutions"],
    href: "/services/network-installation",
    image: Network.src,
  },
  {
    title: "Starlink Installation",
    description:
      "High-speed satellite internet installation and setup. Perfect for remote locations and businesses needing reliable connectivity.",
    icon: Satellite,
    features: ["Satellite Internet Setup", "Remote Connectivity", "High-Speed Access", "Professional Installation"],
    href: "/services/starlink-installation",
    image: Starlink.src,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl lg:text-[40px] font-bold text-card-foreground mb-4 text-balance">
            Our IT Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Comprehensive technology solutions designed to transform your business operations and drive growth through
            innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border bg-background"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
                  </div>
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 text-pretty leading-relaxed">
                    {service.description}
                  </CardDescription>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-card-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-background border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h3>
            <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">
              Get a free consultation to discuss your IT needs and discover how our solutions can help your business
              grow.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
