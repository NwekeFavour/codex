import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Graphic */}
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl font-bold text-accent/20 mb-4">404</h1>
              <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto">
                <Search className="w-12 h-12 text-accent-foreground" />
              </div>
            </div>

            {/* Error Message */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Page Not Found</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto text-pretty leading-relaxed">
              Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you
              entered the wrong URL.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/">
                  <Home className="mr-2 h-5 w-5" />
                  Go Home
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <Link href="/contact">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Contact Support
                </Link>
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="my-12 pt-12 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-7">Popular Pages</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link
                  href="/services/web-development"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Web Development
                </Link>
                <Link
                  href="/services/business-automation"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Business Automation
                </Link>
                <Link
                  href="/services/network-installation"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Network Installation
                </Link>
                <Link
                  href="/services/starlink-installation"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Starlink Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
