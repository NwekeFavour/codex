"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Download, Filter, Settings, HomeIcon, LogOut } from "lucide-react"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DashboardHeaderProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  onLogout: () => void
}

export function DashboardHeader({
  searchQuery,
  onSearchChange,
  onLogout,
}: DashboardHeaderProps) {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl sm:text-2xl font-semibold text-foreground">
              Dashboard
            </h1>
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20"
            >
              Live
            </Badge>
          </div>
          <div className="flex items-center justify-between  space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search emails..."
                className="pl-10 w-full justify-between sm:w-64 bg-background border-border"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              {/* Settings Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => (window.location.href = "/")}>
                    <HomeIcon  className="h-4 w-4 mr-2"/>
                    Home
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:!bg-red-600 hover:!text-white" onClick={onLogout}>
                    <LogOut className="h-4 w-4 mr-2"/>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}