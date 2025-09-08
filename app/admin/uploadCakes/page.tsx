"use client";

import { useState } from "react";
import { UploadButton } from "@/utils/uploadthing";
import { main } from "framer-motion/client";
import "../.././styles/background.css"

export default function CakeForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/cakes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        price: parseFloat(price),
        imageUrl,
      }),
    });

    setLoading(false);

    if (res.ok) {
      alert("✅ Cake saved successfully!");
      setName("");
      setPrice("");
      setImageUrl("");
    } else {
      alert("❌ Error saving cake");
    }
  };
  

  return (
    <main className="min-h-screen bg-cupcake from-pink-50 to-yellow-50 py-12 px-6">
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-pink-100"
    >
      <h2 className="text-2xl font-extrabold text-pink-600 text-center">
        Add a New Cake
      </h2>

      {/* Cake Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Cake Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 text-gray-700 focus:ring-pink-400 focus:border-pink-400 outline-none"
          placeholder="e.g. Chocolate Fudge"
          required
        />
      </div>

      {/* Cake Price */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Price (MWK)
        </label>
        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none"
          placeholder="e.g. 15000"
          required
        />
      </div>

      {/* Upload Cake Image */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Cake Image
        </label>
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            if (res && res[0]) {
              setImageUrl(res[0].url);
              console.log("Files: ", res);
            }
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
        {imageUrl && (
          <div className="mt-3">
            <img
              src={imageUrl}
              alt="Cake preview"
              className="rounded-lg shadow-md max-h-52 w-full object-cover border border-gray-200"
            />
          </div>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading || !imageUrl}
        className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold disabled:opacity-50 transition"
      >
        {loading ? "Saving..." : " Save Cake"}
      </button>
    </form>
     </main>
  );
}
