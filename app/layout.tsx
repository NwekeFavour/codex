import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import Codex from "./codex.ico"
import SocialMediaToggle from "@/components/socialsToggle"
import { Preloader } from "@/components/preloader"
import GoogleAnalytics from "@/components/googleAnalytics"

export const metadata: Metadata = {
  title: "CODEX TECHNOLOGY SOLUTIONS | IT Solutions & Consulting",
  description:
    "Codex Technologies helps businesses scale with IT consulting, cloud services, web development, ERP systems, Starlink installations, and enterprise networking.",
  keywords:
    "Codex, Codex Tech, codex tech, Codex Technologies, IT solutions, IT consulting, software development, cloud services, web development, tech firm, codex firm",
  authors: [{ name: "Codex Technologies" }],
  creator: "Codex Technologies",
  publisher: "Codex Technologies",
  robots: "index, follow",
  metadataBase: new URL("https://www.codex.ng"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Codex Technologies | IT Solutions & Consulting",
    description:
      "Codex Technologies helps businesses scale with IT consulting, cloud services, web development, ERP systems, Starlink installations, and enterprise networking.",
    type: "website",
    locale: "en_US",
    url: "https://codex.ng",
    siteName: "Codex Technologies",
    images: [
      {
        url: Codex.src,
        width: 1200,
        height: 630,
        alt: "Codex Technologies | IT Solutions & Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codex Technologies | IT Solutions & Consulting",
    description:
      "Codex Technologies helps businesses scale with IT consulting, cloud services, web development, ERP systems, Starlink installations, and enterprise networking.",
    images: [Codex.src],
  },
  verification: {
    google: "your-google-verification-code",
  },
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="loading" lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href={Codex.src}/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Codex Technologies",
              description:
                "Codex Technologies helps businesses scale with IT consulting, cloud services, web development, ERP systems, Starlink installations, and enterprise networking.",
              url: "https://www.codex.ng",
              logo: "https://www.codex.ng/codex.ico",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+234 811 102 2909",
                contactType: "customer service",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "A05 Tsukunda House",
                addressLocality: "CBD, Abuja",
                addressRegion: "State",
                postalCode: "900001",
                addressCountry: "NIG",
              },
              sameAs: [
                "https://facebook.com/codexNg",
                "https://twitter.com/codexNg",
                "https://linkedin.com/company/codexNg",
              ],
              service: [
                {
                  "@type": "Service",
                  name: "Web Development",
                  description: "Custom websites and web applications",
                },
                {
                  "@type": "Service",
                  name: "Business Automation",
                  description: "Odoo ERP implementation and process automation",
                },
                {
                  "@type": "Service",
                  name: "Network Installation",
                  description: "Professional network infrastructure setup",
                },
                {
                  "@type": "Service",
                  name: "Starlink Installation",
                  description: "Satellite internet installation services",
                },
              ],
            }),
          }}
        />
        
      </head>
      <body className={`font-sans  ${GeistSans.variable} ${GeistMono.variable}`}>
        <Preloader/>
        <Suspense fallback={null}>{children}</Suspense>
        <SocialMediaToggle  />
        <GoogleAnalytics/>
        <Analytics />
      </body>
    </html>
  )
}
