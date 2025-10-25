import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings, BarChart3, Users, FileText, CheckCircle, ArrowRight, Workflow, Database } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Business Automation & Odoo ERP Services | codex technology Solutions",
  description:
    "Streamline your business operations with our automation solutions and Odoo ERP implementation. Boost productivity and efficiency with custom workflow management.",
  keywords:
    "business automation, Odoo ERP, workflow management, process automation, digital transformation, business efficiency",
  openGraph: {
    title: "Business Automation & Odoo ERP - codex technology Solutions",
    description:
      "Transform your business operations with our comprehensive automation solutions and Odoo ERP implementation services.",
    type: "website",
  },
}

const services = [
  {
    title: "Odoo ERP Implementation",
    description: "Complete Odoo ERP setup and customization to manage all aspects of your business operations.",
    icon: Database,
    features: ["Full ERP setup", "Custom modules", "Data migration", "User training"],
  },
  {
    title: "Process Automation",
    description: "Automate repetitive tasks and workflows to increase efficiency and reduce human error.",
    icon: Workflow,
    features: ["Workflow automation", "Task scheduling", "Document processing", "Integration setup"],
  },
  {
    title: "Business Intelligence",
    description: "Advanced reporting and analytics to make data-driven decisions for your business.",
    icon: BarChart3,
    features: ["Custom dashboards", "Real-time reporting", "Data visualization", "Performance metrics"],
  },
  {
    title: "Digital Transformation",
    description: "Comprehensive digitization of your business processes and operations.",
    icon: Settings,
    features: ["Process digitization", "System integration", "Change management", "Staff training"],
  },
]

const odooModules = [
  { name: "Sales & CRM", description: "Manage leads, opportunities, and customer relationships" },
  { name: "Inventory Management", description: "Track stock levels, manage warehouses, and optimize supply chain" },
  { name: "Accounting & Finance", description: "Complete financial management with invoicing and reporting" },
  { name: "Human Resources", description: "Employee management, payroll, and performance tracking" },
  { name: "Manufacturing", description: "Production planning, quality control, and shop floor management" },
  { name: "Project Management", description: "Task tracking, time management, and project collaboration" },
]

const benefits = [
  {
    title: "Increased Efficiency",
    description: "Automate repetitive tasks and streamline workflows to boost productivity by up to 40%.",
    icon: Workflow,
  },
  {
    title: "Cost Reduction",
    description: "Reduce operational costs through process optimization and resource management.",
    icon: BarChart3,
  },
  {
    title: "Better Decision Making",
    description: "Access real-time data and analytics to make informed business decisions.",
    icon: FileText,
  },
  {
    title: "Scalable Solutions",
    description: "Systems that grow with your business and adapt to changing requirements.",
    icon: Users,
  },
]

export default function BusinessAutomationPage() {
  return (    
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <Settings className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Business Automation & Odoo ERP
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Transform your business operations with comprehensive automation solutions and Odoo ERP implementation.
              Streamline processes, boost productivity, and drive growth through digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  Start Automation Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <Link href="#services">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Automation Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive business automation services designed to optimize your operations and drive efficiency.
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

      {/* Odoo Modules */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Odoo ERP Modules</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive ERP modules to manage every aspect of your business operations in one integrated platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {odooModules.map((module, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{module.name}</h3>
                <p className="text-muted-foreground text-sm text-pretty">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Benefits of Business Automation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover how automation can transform your business operations and drive sustainable growth.
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
                    <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-pretty">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Let's discuss how our automation solutions and Odoo ERP can streamline your operations and boost
              productivity.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">
                Schedule Consultation
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
