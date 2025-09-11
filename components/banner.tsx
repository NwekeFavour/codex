"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function EngagementBanner() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="w-full bg-accent text-white px-4 py-3 flex items-center md:justify-between shadow-md transition-all duration-300">
      <p className="text-sm md:text-base font-medium text-start">
        🚀 Let’s help your business scale with IT solutions from Codex Technologies.
      </p>
      <button
        onClick={() => setShow(false)}
        className="ml-4 p-1 rounded-full hover:bg-cyan-900/50 transition"
        aria-label="Close banner"
      >
        <X size={18} />
      </button>
    </div>
  );
}
