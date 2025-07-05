// components/Header.tsx
import Link from "next/link"
import { BsCake } from "react-icons/bs"

export default function Header() {
  return (
    <header className="bg-pink-50 shadow-md py-3 px-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <BsCake className="text-pink-500 w-7 h-7" />
        <span className="text-lg font-bold text-pink-700">Rosebay Cake Boutique</span>
      </div>
      <nav>
        <Link
          href="/gallery"
          className="text-sm font-medium text-pink-600 hover:text-pink-800 transition"
        >
          Gallery
        </Link>
  
      </nav>
    </header>
  )
}
