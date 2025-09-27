import Footer from "@/components/footer"
import Header from "@/components/header"
import { Computer, Globe, SatelliteIcon, Settings } from "lucide-react"
import Link from "next/link"
import About from "../../assets/images/team-engineers-2.jpg"
import SocialMediaToggle from "@/components/socialsToggle"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header  />
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src={About.src}
              alt="Professional IT team collaborating in a modern office environment"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="flex-1 space-y-6">
            <h2 className="text-4xl sm:text-[40px] font-bold text-balance text-black">
              About <span className="text-black">Our Company</span>
            </h2>
            <p className="text-lg text-black/80 leading-relaxed md:text-start text-justify text-pretty">
              We are a dedicated IT solutions company specializing in comprehensive technology services that drive
              business growth. Our expert team delivers cutting-edge web development, streamlined business automation
              through management systems and Odoo ERP, professional network installations, and reliable Starlink
              satellite internet setup.
            </p>
            <p className="text-lg text-black/80 leading-relaxed md:text-start text-justify text-pretty">
              With years of experience and a commitment to excellence, we transform complex technical challenges into
              simple, effective solutions. Whether you're looking to enhance your digital presence, automate your
              operations, or upgrade your connectivity, we provide the expertise and support you need to succeed in
              today's digital landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">Our Story</h2>
          <div className="w-24 h-1 bg-accent/30 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-black/80 leading-relaxed md:text-start text-justify">
              Founded with a vision to bridge the gap between complex technology and practical business solutions, our
              company has grown from a small team of passionate developers to a comprehensive IT service provider. We
              started by helping local businesses establish their online presence and quickly expanded our expertise to
              cover the full spectrum of modern IT needs.
            </p>
            <p className="text-lg text-black/80 leading-relaxed md:text-start text-justify" >
              Our journey began when we recognized that many businesses were struggling with fragmented IT solutions.
              They had one vendor for web development, another for network setup, and yet another for business
              automation. We decided to become the single, trusted partner that could handle all these needs under one
              roof.
            </p>
          </div>
          <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-black mb-4">Key Milestones</h3>
            <ul className="space-y-3 text-black/80">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>2018: Company founded with focus on web development</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>2019: Expanded into business automation and ERP solutions</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>2021: Added network installation services</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>2023: Became certified Starlink installation partner</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>2024: Serving 500+ satisfied clients nationwide</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-black mb-6">Our Mission</h3>
            <p className="text-black/80 leading-relaxed">
              To empower businesses of all sizes with innovative, reliable, and scalable IT solutions that drive growth,
              improve efficiency, and create competitive advantages. We believe that technology should be an enabler,
              not a barrier, and we're committed to making advanced IT solutions accessible and manageable for every
              organization.
            </p>
          </div>
          <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-black mb-6">Our Vision</h3>
            <p className="text-black/80 leading-relaxed md:text-start text-justify">
              To be the leading comprehensive IT solutions provider, recognized for our technical excellence,
              customer-centric approach, and ability to transform businesses through technology. We envision a future
              where every business, regardless of size, has access to enterprise-level IT capabilities that fuel their
              success.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">Our Expertise</h2>
          <div className="w-24 h-1 bg-accent/30 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">
                <Computer className="text-accent"  />
              </span>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Web Development</h3>
            <p className="text-black/80 text-sm">
              Custom websites, web applications, e-commerce platforms, and responsive designs that engage your audience
              and drive results.
            </p>
          </div>
          <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">
                <Settings className="text-accent"  />
              </span>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Business Automation</h3>
            <p className="text-black/80 text-sm">
              Streamline operations with custom management systems, Odoo ERP implementation, and workflow automation
              solutions.
            </p>
          </div>
          <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">
                <Globe className="text-accent" />
              </span>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Network Installation</h3>
            <p className="text-black/80 text-sm">
              Professional network setup, security configuration, and infrastructure management for reliable
              connectivity.
            </p>
          </div>
          <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">
                <SatelliteIcon className="text-accent" />
              </span>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Starlink Installation</h3>
            <p className="text-black/80 text-sm">
              Certified Starlink satellite internet installation and setup for high-speed connectivity anywhere.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">Our Team</h2>
          <div className="w-24 h-1 bg-accent/30 mx-auto mb-6"></div>
          <p className="text-lg text-black/80 max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of combined experience in software development, network
            engineering, business process optimization, and project management.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-20 h-20 bg-accent/20 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold text-black mb-2">Development Team</h3>
            <p className="text-black/80 text-sm mb-3">Full-stack developers, UI/UX designers</p>
            <p className="text-black/70 text-sm">
              Specialized in modern web technologies, responsive design, and user experience optimization.
            </p>
          </div>
          <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-20 h-20 bg-accent/20 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold text-black mb-2">Infrastructure Team</h3>
            <p className="text-black/80 text-sm mb-3">Network engineers, system administrators</p>
            <p className="text-black/70 text-sm">
              Expert in network design, security implementation, and satellite communication systems.
            </p>
          </div>
          <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-20 h-20 bg-accent/20 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold text-black mb-2">Business Solutions Team</h3>
            <p className="text-black/80 text-sm mb-3">ERP consultants, process analysts</p>
            <p className="text-black/70 text-sm">
              Focused on business process optimization, ERP implementation, and automation strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">Our Values</h2>
          <div className="w-24 h-1 bg-accent/30 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-black mb-3">Excellence</h3>
            <p className="text-black/80">
              We strive for perfection in every project, delivering solutions that exceed expectations and stand the
              test of time.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-black mb-3">Innovation</h3>
            <p className="text-black/80">
              We stay ahead of technology trends, continuously learning and adapting to provide cutting-edge solutions.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-black mb-3">Reliability</h3>
            <p className="text-black/80">
              Our clients trust us to deliver on time, within budget, and with the highest quality standards.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-black mb-3">Partnership</h3>
            <p className="text-black/80">
              We build long-term relationships with our clients, becoming their trusted technology partner for growth.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-black mb-3">Transparency</h3>
            <p className="text-black/80">
              Clear communication, honest pricing, and open project management ensure our clients are always informed.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-black mb-3">Support</h3>
            <p className="text-black/80">
              Our commitment doesn't end at delivery. We provide ongoing support to ensure your success.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive IT solutions can help your business grow, improve efficiency, and stay
            competitive in today's digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-white text-[#5178d0] px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/"
              className="border border-white/30 text-black px-8 py-3 rounded-lg font-semibold hover:bg-accent/10 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
      <SocialMediaToggle  />
      {/* Footer */}
      <Footer   />
    </div>
  )
}
