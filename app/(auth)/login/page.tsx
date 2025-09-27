"use client"

import { Button } from "@/components/ui/button"
import { EyeClosed, EyeIcon, XCircle } from "lucide-react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

// ✅ Dynamic import outside the component (no SSR)

export default function LoginForm() {
  const recaptchaRef = useRef<any>(null)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [message, setMessage] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [hidden, setHidden] = useState(true)

  const handleRecaptchaChange = (token: string | null) => {
    setCaptchaToken(token)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (!captchaToken) {
      setMessage("Please complete the CAPTCHA")
      setLoading(false)
      return
    }

    try {
      const res = await fetch("https://codex2-1.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, captcha: captchaToken }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Login failed")
      }

      const data = await res.json()
      localStorage.setItem("token", data.token)
      window.location.href = "/dashboard"
    } catch (err: any) {
      setError(err.message)
      // ✅ reset captcha on error
      recaptchaRef.current?.reset()
      setCaptchaToken(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg space-y-5"
      >
        <div className="flex justify-end items-center">
          <Link href="/" className="text-sm text-accent hover:underline mr-4">
            Go Back
          </Link>
        </div>

        {message && (
          <p className="text-red-500">
            <XCircle className="inline mr-2 mb-1" />
            {message}
          </p>
        )}

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
          <div className="flex items-center gap-3 border rounded-lg mt-1 px-3 focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type={hidden ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full py-2 border-none focus:ring-0 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setHidden(!hidden)}
              className="bg-transparent hover:text-black"
            >
              {hidden ? <EyeClosed /> : <EyeIcon />}
            </button>
          </div>
        </div>

        {/* ✅ reCAPTCHA v2 checkbox (stable) */}
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
          onChange={handleRecaptchaChange}
        />

        <Button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-accent text-white font-medium rounded-lg hover:bg-accent/80 transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  )
}