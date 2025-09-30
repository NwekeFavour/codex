"use client"

import { useEffect, useState } from "react"
import { saveAs } from "file-saver" 
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Mail, MoreVertical, Download } from "lucide-react"

type Contact = {
  _id: string
  fname: string
  lname: string
  email: string
  phone: string
  company?: string
  message?: string
  location?: string
  source?: string
  createdAt: string
  status?: "active" | "pending" | "unsubscribed"
}

interface EmailListProps {
  searchQuery: string
}

export function EmailList({ searchQuery }: EmailListProps) {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch("https://codex2-1.onrender.com/api/contacts")
        const data = await res.json()
        setContacts(data)
      } catch (error) {
        console.error("Failed to load contacts:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchContacts()
  }, [])

  if (loading) return <p className="p-4">Loading contacts...</p>

  const filteredContacts = contacts.filter((c) =>
    `${c.fname} ${c.lname} ${c.phone} ${c.email} ${c.message}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  )

  // Export filtered contacts to CSV
  const handleExport = () => {
    if (!filteredContacts.length) return

    const csvHeader = ["First Name", "Last Name", "Phone", "Email", "Message"]
    const csvRows = filteredContacts.map((c) => [c.fname, c.lname, c.phone, c.email, c.message, ])

    const csvContent = [
      csvHeader.join(","),
      ...csvRows.map((row) => row.join(",")),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    saveAs(blob, "contacts.csv")
  }

  return (
    <>
      {/* Export Button */}
      <div className="flex justify-end mb-4">
        <Button onClick={handleExport} variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" /> Export Contacts
        </Button>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Recent Email Signups</CardTitle>
        </CardHeader>
        <CardContent>
          {filteredContacts.length === 0 ? (
            <p className="p-4 text-center text-sm text-muted-foreground">
              No visitors data found.
            </p>
          ) : (
            <div className="space-y-4">
              {filteredContacts.map((visitor) => (
                <div
                  key={visitor._id}
                  className="sm:flex items-center justify-between p-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Left: Name & Email */}
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-indigo-700 font-semibold text-lg">
                        {visitor.fname.charAt(0)}
                        {visitor.lname ? visitor.lname.charAt(0) : ""}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {visitor.fname} {visitor.lname}
                      </p>
                      <p className="text-xs text-gray-500 truncate flex items-center">
                        <Mail className="h-3 w-3 mr-1 text-gray-400" />
                        {visitor.email}
                      </p>
                    </div>
                  </div>

                  {/* Right: Date & Action */}
                  <div className="text-right text-xs text-gray-400 flex items-center justify-end sm:justify-between">
                    {new Date(visitor.createdAt).toLocaleDateString()}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedContact(visitor)}
                    >
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Contact Details Dialog */}
      <Dialog open={!!selectedContact} onOpenChange={() => setSelectedContact(null)}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>
              {selectedContact?.fname} {selectedContact?.lname}
            </DialogTitle>
          </DialogHeader>
          {selectedContact && (
            <div className="space-y-3 text-sm text-muted-foreground ">
              <p>
                <strong>Email:</strong> {selectedContact.email}
              </p>
              {selectedContact.phone && (
                <p>
                  <strong>Phone:</strong> {selectedContact.phone}
                </p>
              )}
              {selectedContact.company && (
                <p>
                  <strong>Company:</strong> {selectedContact.company}
                </p>
              )}
              {selectedContact.message && (
                <p>
                  <strong>Message:</strong> {selectedContact.message}
                </p>
              )}
              <p>
                <strong>Request Date:</strong>{" "}
                {new Date(selectedContact.createdAt).toLocaleString()}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}