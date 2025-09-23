"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Codex from "../assets/images/codex.webp"

type Fragment = {
  x: number
  y: number
  rotation: number
  delay: string
  bgPosX: number
  bgPosY: number
}

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [isDecomposed, setIsDecomposed] = useState(true)
  const [fragments, setFragments] = useState<Fragment[]>([])
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)
    setIsDecomposed(true)

    const gridSize = 6
    const fragmentSize = 18
    const newFragments: Fragment[] = []

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const angle = Math.random() * 2 * Math.PI
        const distance = 90 + Math.random() * 60
        const x = Math.cos(angle) * distance
        const y = Math.sin(angle) * distance
        const rotation = Math.random() * 720 - 360 // spin more
        const delay = `${(row + col) * 25}ms` // wave effect

        newFragments.push({
          x,
          y,
          rotation,
          delay,
          bgPosX: -(col * fragmentSize),
          bgPosY: -(row * fragmentSize),
        })
      }
    }

    setFragments(newFragments)

    // reconstruction starts after 1.2s
    const recomposeTimer = setTimeout(() => {
      setIsDecomposed(false)
    }, 1200)

    // hide preloader after 2.6s
    const hideTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2600)

    return () => {
      clearTimeout(recomposeTimer)
      clearTimeout(hideTimer)
    }
  }, [pathname])

  if (!isLoading) return null

  const gridSize = 6
  const fragmentSize = 18

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="relative w-[110px] h-[110px]">
        {/* Full Logo (fades in/out smoothly with blur) */}
        <div
          className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
            isDecomposed
              ? "opacity-0 scale-75 blur-md"
              : "opacity-100 scale-100 blur-0"
          }`}
          style={{
            backgroundImage: `url(${Codex.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />

        {/* Fragments */}
        <div className="absolute top-0 left-0 w-full h-full">
          {fragments.map((f, index) => {
            const col = index % gridSize
            const row = Math.floor(index / gridSize)
            return (
              <div
                key={index}
                className="absolute transition-all  duration-[1000ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
                style={{
                  width: `${fragmentSize}px`,
                  height: `${fragmentSize}px`,
                  transform: `translate(${
                    isDecomposed ? f.x : col * fragmentSize
                  }px, ${isDecomposed ? f.y : row * fragmentSize}px) rotate(${
                    isDecomposed ? f.rotation : 0
                  }deg) scale(${isDecomposed ? 0.6 : 1})`,
                  transitionDelay: f.delay,
                  backgroundImage: `url(${Codex.src})`,
                  backgroundSize: `${fragmentSize * gridSize}px ${
                    fragmentSize * gridSize
                  }px`,
                  backgroundPosition: `${f.bgPosX}px ${f.bgPosY}px`,
                  backgroundRepeat: "no-repeat",
                  opacity: isDecomposed ? 0.3 : 1,
                  filter: isDecomposed
                    ? "blur(2px) brightness(1.2)"
                    : "blur(0px) brightness(1)",
                }}
              />
            )
          })}
        </div>

        {/* Glow ring pulse */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-[1200ms] ease-in-out ${
            isDecomposed ? "scale-150 opacity-0" : "scale-100 opacity-40"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)",
            filter: "blur(12px)",
          }}
        />
      </div>
    </div>
  )
}
