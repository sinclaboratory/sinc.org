"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    // Toggle dark class on document
    document.documentElement.classList.toggle("dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative p-3 rounded-full transition-all duration-300 ease-in-out",
        "hover:scale-110 active:scale-95",
      )}
      aria-label="Toggle theme"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="dark:text-foreground">
        {/* Sun rays */}
        <g
          className={cn(
            "transition-all duration-500 ease-in-out origin-center",
            isDark ? "opacity-0 scale-75 rotate-45" : "opacity-100 scale-100 rotate-0",
          )}
        >
          {/* Top ray */}
          <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          {/* Top-right ray */}
          <line x1="18.36" y1="5.64" x2="17.07" y2="6.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          {/* Right ray */}
          <line x1="23" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          {/* Bottom-right ray */}
          <line
            x1="18.36"
            y1="18.36"
            x2="17.07"
            y2="17.07"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Bottom ray */}
          <line x1="12" y1="23" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          {/* Bottom-left ray */}
          <line x1="5.64" y1="18.36" x2="6.93" y2="17.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          {/* Left ray */}
          <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          {/* Top-left ray */}
          <line x1="5.64" y1="5.64" x2="6.93" y2="6.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Sun center circle */}
        <circle
          cx="12"
          cy="12"
          r="5"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className={cn(
            "transition-all duration-500 ease-in-out",
            isDark ? "opacity-0 scale-75" : "opacity-100 scale-100",
          )}
        />

        {/* Moon crescent */}
        <path
          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className={cn(
            "transition-all duration-500 ease-in-out origin-center",
            isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-45",
          )}
        />

        {/* Decorative stars for moon mode */}
        <g
          className={cn(
            "transition-all duration-700 ease-in-out",
            isDark ? "opacity-60 scale-100" : "opacity-0 scale-50",
          )}
        >
          <circle cx="17" cy="7" r="0.5" fill="currentColor" />
          <circle cx="19" cy="9" r="0.3" fill="currentColor" />
          <circle cx="6" cy="8" r="0.4" fill="currentColor" />
        </g>
      </svg>
    </button>
  )
}
