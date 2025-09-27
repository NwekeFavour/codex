"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { EmailList } from "@/components/email-list"
import ProtectedRoute from "@/components/protectedRoute"
  
export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.href = "/login"
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <DashboardHeader
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onLogout={handleLogout}
        />
        <main className="container mx-auto px-4 sm:px-6 py-4 sm:py-8 space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
            <div className="xl:col-span-3">
              <EmailList searchQuery={searchQuery} />
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
