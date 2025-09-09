"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/catalog", label: "Catalog" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-xl border-b border-white/30 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-pink-600 drop-shadow-sm"
        >
          Rosebay cakes
        </Link>
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition ${
                pathname === link.href
                  ? "text-pink-600"
                  : "text-gray-800 hover:text-pink-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <Link
            href="https://wa.me/+265884099667"
            className="px-6 py-3 bg-pink-700 text-white rounded-lg shadow hover:bg-pink-600 transition"
          >
            Order now
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-800 hover:text-pink-600 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-white/30 shadow-md">
          <div className="flex flex-col items-center gap-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition ${
                  pathname === link.href
                    ? "text-pink-600"
                    : "text-gray-800 hover:text-pink-500"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/+265884099667"
              className="px-6 py-3 bg-pink-700 text-white rounded-lg shadow hover:bg-pink-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Order now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
