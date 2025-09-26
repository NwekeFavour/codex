"use client"

import { useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { MoreHorizontal, Mail, Clock, MapPin } from "lucide-react"

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

  // Filter contacts by searchQuery
  const filteredContacts = contacts.filter((c) =>
    `${c.fname} ${c.lname} ${c.email}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  )

  return (
    <>
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
                className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 p-4 rounded-lg bg-background border border-border hover:bg-muted/50 transition-colors"
              >
                {/* Left */}
                <div className="flex items-center space-x-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {visitor.fname[0]}
                      {visitor.lname ? visitor.lname[0] : ""}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium text-foreground truncate">
                        {visitor.fname} {visitor.lname}
                      </p>
                      {visitor.status && (
                        <Badge
                          variant={
                            visitor.status === "active"
                              ? "default"
                              : visitor.status === "pending"
                              ? "secondary"
                              : "destructive"
                          }
                          className="text-xs flex-shrink-0"
                        >
                          {visitor.status}
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1 min-w-0">
                        <Mail className="h-3 w-3 flex-shrink-0" />
                        <span className="truncate">{visitor.email}</span>
                      </div>
                      {visitor.location && (
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3 flex-shrink-0" />
                          <span>{visitor.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center justify-end space-x-4">
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>
                        {new Date(visitor.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedContact(visitor)}
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
      <Dialog
        open={!!selectedContact}
        onOpenChange={() => setSelectedContact(null)}
      >
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
