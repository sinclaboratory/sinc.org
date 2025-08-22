"use client"

import Link from "next/link"
// import Image from "next/image"
import ThemeToggle from "@/components/themeToggle"

export default function Navigation() {

  const navItems = [
    { href: "/blog", label: "Blog" },
    { href: "/lost-found", label: "Lost & Found" },
  ]

  return (
    <nav className="bg-white dark:bg-gray-900 sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* <Image
              src="/logo.png"
              alt="SINC Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            /> */}
            <span className="font-serif font-bold text-xl text-gray-900 dark:text-white">
              SINC
            </span>
          </Link>

          {/* Menu + Dark Mode Toggle */}
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}

            {/* Dark Mode Toggle */}
            <ThemeToggle></ThemeToggle>
          </div>
        </div>
      </div>
    </nav>
  )
}
