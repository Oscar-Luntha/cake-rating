'use client'

import { UploadButton } from "@/utils/uploadthing"
import { useState } from "react"


export default function WallImageUploader({ onSuccess }: { onSuccess?: () => void }) {
  const [message, setMessage] = useState("")
  return (
    <div className="mt-6">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={async (res) => {
          if (!res || res.length === 0) {
            setMessage("No file uploaded")
            return
          }

          const uploadedUrl = res[0].url

          const updateRes = await fetch("/api/wall/update", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ imageUrl: uploadedUrl })
          })

          if (updateRes.ok) {
            setMessage("Image uploaded successfully!")
            onSuccess?.()
          } else {
            const errorText = await updateRes.text()
            setMessage("Error: " + errorText)
          }
        }}
        onUploadError={(err) => {
          setMessage("Upload failed: " + err.message)
        }}
      />

      {message && <p className="text-sm mt-2 text-pink-600">{message}</p>}
    </div>
  )
}
