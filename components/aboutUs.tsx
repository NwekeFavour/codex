import Link from "next/link"
import Prof from "../assets/images/prof.webp"

export function AboutUs() {
  return (
    <section className="py-30 lg:pb-40 md:pb-38 sm:pb-36 pb-34 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <img
            src={Prof.src}
            alt="Professional IT team collaborating in a modern office environment"
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="flex-1 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">
            About <span className="text-primary">Our Company</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            We are a dedicated IT solutions company specializing in comprehensive technology services that drive
            business growth. Our expert team delivers cutting-edge web development, streamlined business automation
            through management systems and Odoo ERP, professional network installations, and reliable Starlink satellite
            internet setup.
          </p>
          <p className="text-lg text-justify  md:text-start text-muted-foreground leading-relaxed text-pretty">
            With years of experience and a commitment to excellence, we transform complex technical challenges into
            simple, effective solutions. Whether you're looking to enhance your digital presence, automate your
            operations, or upgrade your connectivity, we provide the expertise and support you need to succeed in
            today's digital landscape.
          </p>
          <div className="flex justify-end items-center">
            <Link className="underline text-accent capitalize" href={"/about"}>read more</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
