import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Codex Login",
  description: "Login page with reCAPTCHA v3",
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            {children}
        </div>
  )
}
