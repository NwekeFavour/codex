"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Codex from "../assets/images/codex.webp"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [pathname])

  if (!isLoading) return null

  return (
    <div className={`preloader ${!isLoading ? "fade-out" : ""}`}>
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="preloader-content">
        <div className="logo-container">
          <div className="rotating-ring">
            <div className="inner-ring bg-[#F5F7FA]">
              <Image
                src={Codex.src}
                alt="Our Team"
                width={60}
                height={60}
                className="company-logo"
                priority
              />
            </div>
          </div>
        </div>

        <div className="loading-bar">
          <div className="progress-fill"></div>
        </div>

        <div className="company-name">
          <span className="typewriter">Codex Technology Solutions</span>
        </div>
      </div>
    </div>
  )
}
