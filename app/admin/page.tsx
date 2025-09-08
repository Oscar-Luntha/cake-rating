'use client'
import Link from "next/link"
export default function AdminPage() {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-pink-50 to-yellow-50 w-full mx-auto">
        <div className="bg-white rounded-xl p-6 shadow-md max-w-2xl">
        <h2 className="text-xl font-bold text-pink-500 mb-4">🏆 <Link href="/admin/uploadCakes">UPload cake</Link></h2>
      </div>
    </div>
  )
}
