"use client"

import { EyeClosed, EyeIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function RegisterForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
    const [hidden, setHidden] = useState(true);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)
// https://codex2-1.onrender.com
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", { // 🔹 change to your backend URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Registration failed")
      }

      setSuccess("Registration successful! You can now log in.")
      setEmail("")
      setPassword("")
      window.location.href = "/login"
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>

        {error && (
          <p className="text-sm text-red-500 bg-red-100 px-3 py-2 rounded-lg">
            {error}
          </p>
        )}
        {success && (
          <p className="text-sm text-green-600 bg-green-100 px-3 py-2 rounded-lg">
            {success}
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

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-accent text-white font-medium rounded-lg hover:bg-accent/80 transition disabled:opacity-50"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  )
}
