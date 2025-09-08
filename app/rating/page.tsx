'use client'

import { useState } from "react"
import { GiCupcake } from "react-icons/gi"
import ".././styles/background.css"
import { motion } from "framer-motion"

export default function RatePage() {
  const [rating, setRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [feedback, setFeedback] = useState("")

  const submit = async () => {
    if (!rating) return
    const res = await fetch("api/submit-rating/", {
      method: "POST",
      body: JSON.stringify({ rating, feedback }),
    })

    if (res.status === 409) {
      alert("You’ve already rated 🧁")
      return
    }

    setSubmitted(true)
  }

  const CupcakeIcon = (num: number) => (
    <GiCupcake
      key={num}
      onClick={() => setRating(num)}
      className={`w-8 h-8 cursor-pointer transition-transform hover:scale-110 ${
        rating >= num ? "text-pink-500" : "text-gray-300"
      }`}
    />
  )

  if (submitted) {
    return (
      <div className="min-h-screen bg-cupcake">
        <div className="flex items-center justify-center h-full p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center p-6 bg-white rounded-2xl shadow-xl"
          >
            <h2 className="text-2xl font-bold text-pink-600">🎉 Thank You!</h2>
            <p className="text-gray-600 mt-2">We appreciate your feedback 💖</p>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cupcake flex flex-col">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        className="flex-1 flex items-center justify-center p-4"
      >
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6 mt-4">
          <h1 className="text-2xl font-bold text-center text-pink-900 mb-1">
            🧁 Rate Our Cake!
          </h1>
          <p className="text-center text-sm text-gray-500 mb-4 italic">
            Because every bite deserves a vote
          </p>
          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map(CupcakeIcon)}
          </div>
          <textarea
            placeholder="Any thoughts to share? (Optional)"
            className="w-full p-3 border border-pink-200 text-gray-500 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-pink-300"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <button
            onClick={submit}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Submit Rating
          </button>
        </div>
      </motion.div>
      <footer className="text-center text-sm text-white mb-4">
        Made with 💖 by Rosebay Cake Boutique
      </footer>
    </div>
  )
}
