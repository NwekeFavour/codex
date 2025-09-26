"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/login") // redirect if not logged in
    } else {
      setLoading(false)
    }
  }, [router])

  if (loading) {
    return <p className="text-center mt-10">Checking authentication...</p>
  }

  return <>{children}</>
}
