"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    // Show preloader on route change
    setIsLoading(true)

    // Hide preloader after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [pathname])

  if (!isLoading) return null

  return (
    <div className={`preloader ${!isLoading ? "fade-out" : ""}`}>
      <div className="spinner"></div>
    </div>
  )
}
