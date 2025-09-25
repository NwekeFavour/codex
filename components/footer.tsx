import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"
import Codex from "../assets/images/codex.webp"
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Input } from "./ui/input"

const services = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Business Automation", href: "/services/business-automation" },
  { name: "Network Installation", href: "/services/network-installation" },
  { name: "Starlink Installation", href: "/services/starlink-installation" },
]

const company = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Blog", href: "/blog" },
]


export default function Footer() {
  const Year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="rounded-lg flex items-center justify-center">
                <Image  src={Codex.src} className="w-[50px] h-[60px]" width={50} height={70} alt="codex-technologies-logo"/>
              </div>
              <span className="font-bold text-xl">Codex Technology Solutions</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 text-pretty leading-relaxed">
              Professional IT services company providing web development, business automation, network installation, and
              Starlink services to help businesses thrive in the digital age.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <Link
                  href="tel:+2348111022909"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +234 811 102 2909
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <Link
                  href="mailto:Info@codex.ng"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Info@codex.ng
                </Link>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-pretty">
                  A05 Tsukunda House CBD, Abuja
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-pretty"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Newsletter */}
          <div>
            {/* Newsletter Signup */}
            <div className="bg-primary-foreground/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-sm text-primary-foreground/80 mb-4 text-pretty">
                Get the latest IT insights and updates delivered to your inbox.
              </p>
              <form >
                <div>
                  <Input placeholder="Enter your email" className="mb-3 outline-none focus:border-none focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0 focus-visible:ring-none placeholder:text-white border-none" type="email" required/>
                </div>
                <Button type="submit" size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-primary-foreground/80 text-sm">© {Year} Codex Technology Solutions. All rights reserved.</div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-primary-foreground/80 text-sm">Follow us:</span>
              <div className="flex space-x-3">
                <Link
                  href="https://www.facebook.com/Codextechng"
                  className="text-primary-foreground/60 hover:text-accent transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="https://x.com/codextechng"
                  className="text-primary-foreground/60 hover:text-accent transition-colors"
                  aria-label="Twitter"
                >
                  <XIcon className="w-5 h-5"  />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/codextechng/"
                  className="text-primary-foreground/60 hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="https://wa.me/+2349094337227"
                  className="text-primary-foreground/60 hover:text-accent transition-colors flex justify-center"
                  aria-label="Whatsapp"
                >
                  {/* <Linkedin className="w-5 h-5" /> */}
                  <WhatsAppIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="text-primary-foreground/60 hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
