'use client'

import { useState } from "react"
import Image from "next/image"
import { PhotoProvider, PhotoView } from "react-photo-view"
import 'react-photo-view/dist/react-photo-view.css';
import Link from "next/link"
const cakeImages = Array.from({ length: 21 }, (_, i) => `/gallery/cake-${i + 1}.png`)

// This will later be fetched from database — for now, mock it
const wallImages: (string | null)[] = [
  "/gallery/customer-1.png",
  null,
  "/gallery/customer-1.png",
  null,
  null,
  null,
  "/gallery/customer-1.png",
  null,
  null,
  "/gallery/customer-1.png",
  null,
  null,
  null,
  "/gallery/customer-1.png",
  null,
  null,
  "/gallery/customer-1.png",
  null,
  null,
  null,
  null,
  null,
]

function HexTile({ src }: { src: string | null }) {
  if (!src) {
    return (
      <div className="relative w-[90px] h-[100px] bg-white border-2 border-pink-400 rounded-lg shadow-[0_0_8px_2px_rgba(236,72,153,0.7)] flex items-center justify-center cursor-pointer animate-glow">
        <span className="text-pink-400 font-bold text-xs text-center px-2">✨ You?</span>
      </div>
    )
  }

  return (
    <PhotoView src={src}>
      <div className="relative w-[90px] h-[100px] bg-white rounded-lg overflow-hidden cursor-pointer border-2 border-pink-300 shadow-[0_0_10px_3px_rgba(236,72,153,0.6)] hover:shadow-[0_0_15px_5px_rgba(236,72,153,0.9)] transition-shadow duration-300">
        <Image
          src={src}
          alt="Customer"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </PhotoView>
  )
}

export default function GalleryPage() {
  const [tab, setTab] = useState<"cakes" | "wall">("cakes")
  const images = tab === "cakes" ? cakeImages : wallImages

  // Build alternating rows: 4 and 3 images per row
  const rows: (string | null)[][] = []
  let i = 0
  let toggle = true

  while (i < wallImages.length) {
    const chunk = toggle ? 4 : 3
    rows.push(wallImages.slice(i, i + chunk))
    i += chunk
    toggle = !toggle
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-yellow-50 p-6">
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">
        <Link href="/">🎨 Rosebay Gallery</Link>
      </h1>

      {/* Tabs */}
      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => setTab("cakes")}
          className={`px-4 py-2 rounded-full font-medium transition ${
            tab === "cakes" ? "bg-pink-500 text-white" : "bg-pink-100 text-pink-700"
          }`}
        >
          🍰 View Cakes
        </button>
        <button
          onClick={() => setTab("wall")}
          className={`px-4 py-2 rounded-full font-medium transition ${
            tab === "wall" ? "bg-pink-500 text-white" : "bg-pink-100 text-pink-700"
          }`}
        >
          🖼️ Customer Wall of Fame
        </button>
      </div>

      {/* Cakes Grid */}
      {tab === "cakes" && (
        <PhotoProvider>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {images.map((src, idx) =>
      src ? (
        <PhotoView key={idx} src={src}>
          <div className="overflow-hidden rounded-xl shadow-md cursor-pointer">
            <Image
              src={src}
              alt={`Cake ${idx + 1}`}
              width={600}
              height={400}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </PhotoView>
      ) : null
    )}
  </div>
</PhotoProvider>
      )}

      {/* Wall of Fame */}
      {/* Wall of Fame */}
{tab === "wall" && (
  <>
    <div className="text-center text-pink-700 font-semibold text-md mb-4 italic">
      🍰 Buy from us and get your photo on the wall of fame!
    </div>
    <h1 className="text-pink-700">Feature coming soon</h1>
    {/* <WallOfFameDisplay /> */}

    {/* <PhotoProvider>
      <div className="flex flex-col items-center space-y-1 border-4 border-pink-200 rounded-2xl p-4 bg-white shadow-inner">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex space-x-2 ${
              row.length === 3 ? "ml-[48px]" : ""
            } -mt-4`}
          >
            {row.map((src, idx) => (
              <HexTile key={idx} src={src} />
            ))}
          </div>
        ))}
      </div>
    </PhotoProvider> */}
  </>
)}

    </div>
  )
}
