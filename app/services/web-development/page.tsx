import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, ShoppingCart, Zap, CheckCircle, ArrowRight } from "lucide-react"
import WebIcon from '@mui/icons-material/Web';
import Link from "next/link"

export const metadata: Metadata = {
  title: "Web Development Services - Custom Websites & Applications | codex technology Solutions",
  description:
    "Professional web development services including custom websites, e-commerce solutions, and web applications. Modern, responsive designs built with cutting-edge technologies.",
  keywords:
    "web development, custom websites, e-commerce, web applications, responsive design, React, Next.js, progressive web apps",
  openGraph: {
    title: "Web Development Services - codex technology Solutions",
    description:
      "Transform your online presence with our custom web development services. From simple websites to complex applications.",
    type: "website",
  },
}

const services = [
  {
    title: "Custom Web Applications",
    description: "Tailored web applications built to meet your specific business requirements and workflows.",
    icon: Code,
    features: ["Custom functionality", "Scalable architecture", "API integrations", "Real-time features"],
  },
  {
    title: "E-commerce Solutions",
    description: "Complete online stores with payment processing, inventory management, and customer analytics.",
    icon: ShoppingCart,
    features: ["Payment gateways", "Inventory management", "Customer accounts", "Analytics dashboard"],
  },
  {
    title: "Responsive Design",
    description: "Mobile-first designs that work perfectly across all devices and screen sizes.",
    icon: WebIcon,
    features: ["Mobile optimization", "Cross-browser compatibility", "Fast loading times", "SEO optimized"],
  },
  {
    title: "Progressive Web Apps",
    description: "Modern web applications that work offline and provide native app-like experiences.",
    icon: Zap,
    features: ["Offline functionality", "Push notifications", "App-like interface", "Fast performance"],
  },
  {
  title: "Mobile Applications",
  description: "Interactive apps designed for smartphones and tablets, offering seamless user experiences on the go.",
  icon: Smartphone,
  features: [
    "Cross-platform support",
    "Native-like performance",
    "User-friendly interface",
    "Real-time accessibility"
  ],
},

]

const technologies = [
  { name: "React & Next.js", description: "Modern JavaScript frameworks for fast, interactive websites" },
  { name: "TypeScript", description: "Type-safe development for more reliable applications" },
  { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development" },
  { name: "Node.js", description: "Server-side JavaScript for full-stack applications" },
  { name: "PostgreSQL", description: "Robust database solutions for data management" },
  { name: "AWS/Vercel", description: "Cloud hosting and deployment for scalable applications" },
  { name: "Stripe / Shopify API", description: "Secure payment processing and e-commerce integrations" },
  { name: "React Native / Expo", description: "Cross-platform mobile app development" },
  { name: "Service Workers / Workbox", description: "Offline support and PWA features" },
  { name: "REST & GraphQL APIs", description: "Flexible API integrations for third-party services" },
  { name: "Google Analytics", description: "Website and e-commerce analytics" },
  { name: "Netlify / Firebase", description: "Alternative cloud hosting and deployment options" },
  { name: "SSL / OAuth / JWT", description: "Security, authentication, and data protection" },
]

const process = [
  {
    step: "1",
    title: "Discovery & Planning",
    description:
      "We analyze your requirements, target audience, and business goals to create a comprehensive project plan.",
  },
  {
    step: "2",
    title: "Design & Prototyping",
    description: "Our team creates wireframes and interactive prototypes to visualize your web application.",
  },
  {
    step: "3",
    title: "Development & Testing",
    description: "We build your application using modern technologies with rigorous testing throughout the process.",
  },
  {
    step: "4",
    title: "Launch & Support",
    description:
      "We deploy your application and provide ongoing maintenance and support to ensure optimal performance.",
  },
]

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Web Development Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Transform your digital presence with custom websites and web applications built using modern technologies.
              From simple business websites to complex e-commerce platforms, we deliver solutions that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  Start Your Project
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Web Development Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive web solutions tailored to your business needs and objectives.
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

      {/* Technologies */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Technologies We Use</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We leverage cutting-edge technologies to build fast, secure, and scalable web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{tech.name}</h3>
                <p className="text-muted-foreground text-sm text-pretty">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A proven methodology that ensures your project is delivered on time, within budget, and exceeds
              expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-pretty">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">
              Ready to Build Your Web Application?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Let's discuss your project requirements and create a custom solution that drives your business forward.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">
                Get Free Consultation
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
