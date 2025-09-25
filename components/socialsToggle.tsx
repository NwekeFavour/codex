"use client";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function SocialMediaToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
      {/* Social Links Panel */}
      <div
        className={`mb-3 flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-xl border transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 block"
            : "opacity-0 hidden translate-y-5 pointer-events-none"
        }`}
      >
        
        <a
          href="https://www.facebook.com/Codextechng"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-600 transition"
        >
          <FacebookIcon className="w-7 h-7"/> Facebook
        </a>
        <a
          href="https://wa.me/+2349094337227"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-600 transition"
        >
          <WhatsAppIcon className="w-7 h-7"/> WhatsApp
        </a>
        <a
          href="https://x.com/codextechng"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-sky-500 transition"
        >
          <XIcon className="w-7 h-7" /> Twitter
        </a>
        <a
          href="https://www.linkedin.com/company/codex_tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-700 transition"
        >
          <LinkedInIcon className="w-7 h-7" /> LinkedIn
        </a>
        <a
          href="mailto:Info@codex.ng"
          className="flex items-center gap-2 hover:text-red-500 transition"
        >
          <EmailIcon className="w-7 h-7" /> Email
        </a>        
      </div>

      <div className={`${open ? "hidden" : "absolute bottom-full right-0 mb-3 bg-accent text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"}`} style={{ opacity: 1, transform: "none" }}>
        Need help? Chat with us!
        <div className="absolute top-full right-4 transform border-4 border-transparent border-t-gray-900"></div>
      </div>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full bg-accent p-4 text-white shadow-lg hover:bg-accent/90 transition-all"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
