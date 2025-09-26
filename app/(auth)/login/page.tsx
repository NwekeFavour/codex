"use client"

import { Button } from "@/components/ui/button"
import { EyeClosed, EyeIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
    const [hidden, setHidden] = useState(true);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)    
    setError(null)

    try {
      // 🔹 Replace with your API endpoint
      const res = await fetch("https://codex2-1.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Login failed")
      }

      // ✅ Success – reload or redirect
      localStorage.setItem('token', (await res.json()).token);
      window.location.href = "/dashboard"
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
        <div className="flex h-screen items-center justify-center  bg-gray-100">
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg space-y-5"
        >
            <div className="flex justify-end items-center mb-0">
                <Link href="/" className="text-sm text-accent hover:underline mb-4 mr-4">
                    Go Back
                </Link>
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

            {error && (
            <p className="text-sm text-red-500 bg-red-100 px-3 py-2 rounded-lg">
                {error}
            </p>
            )}

            <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="flex items-center gap-3 border rounded-lg mt-1 px-3  focus-within:ring-2 focus-within:ring-blue-500">
                {
                    hidden ? (
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 w-full px-4 py-2 border rounded-lg border-none focus:ring-0 focus:outline-none"
                        />
                    ) :
                    (
                        <input
                            type="text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 w-full px-4 py-2 border rounded-lg border-none focus:ring-0 focus:outline-none"
                        />
                    )
                }
                {
                    hidden ? 
                    <Link href={""} onClick={() => setHidden(!hidden)}  className="p-0 hover:text-black bg-transparent hover:bg-transparent">
                        <EyeClosed/>
                    </Link> : 
                    <Link href={""} onClick={() => setHidden(!hidden)}  className="p-0 bg-transparent hover:bg-transparent hover:text-black">
                        <EyeIcon/>
                    </Link>
                }
            </div>
            </div>

            <Button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-accent text-white font-medium rounded-lg hover:bg-accent/80 transition disabled:opacity-50"
            >
            {loading ? "Logging in..." : "Login"}
            </Button>
        </form>
        </div>
    </div>
  )
}
