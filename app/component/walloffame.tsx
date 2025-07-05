'use client'

import { useEffect, useState } from "react"

function HexTile({ src }: { src: string | null }) {
  return (
    <div className="w-24 h-24 bg-pink-100 clip-hexagon shadow-inner flex items-center justify-center">
      {src ? (
        <img src={src} alt="tile" className="object-cover w-full h-full rounded-md" />
      ) : (
        <span className="text-sm text-gray-400">Empty</span>
      )}
    </div>
  )
}

export default function WallOfFameDisplay({ refreshSignal = 0 }: { refreshSignal?: number }) {
  const [images, setImages] = useState<(string | null)[]>([])

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("/api/wall")
      const data = await res.json()
      setImages(data.images)
    }

    fetchImages()
  }, [refreshSignal])

  // Convert flat array into rows for hex layout
  const rows = [
    images.slice(0, 3), // First row
    images.slice(3, 6), // Second row
  ]

  return (
    <div className="flex flex-col items-center space-y-1 border-4 border-pink-200 rounded-2xl p-4 bg-white shadow-inner">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex space-x-2 ${row.length === 3 ? "ml-[48px]" : ""} -mt-4`}
        >
          {row.map((src, idx) => (
            <HexTile key={idx} src={src} />
          ))}
        </div>
      ))}
    </div>
  )
}
