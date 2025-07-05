'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts"
import { useState, useEffect } from "react"
export default function AdminPage() {
  const [key, setKey] = useState("")
  const [authorized, setAuthorized] = useState(false)
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState("")

  const loadData = async (authKey: string) => {
    const res = await fetch(`/api/admin/ratings?key=${authKey}`)
    if (res.status === 401) {
      setError("Unauthorized – wrong admin key")
      return
    }
    const json = await res.json()
    setData(json)
    setAuthorized(true)
  }

  useEffect(() => {
    if (!authorized || !key) return

    const interval = setInterval(() => {
      loadData(key)
    }, 5000) // fetch every 5 seconds

    return () => clearInterval(interval)
  }, [authorized, key])

  const handleLogin = () => {
    setError("")
    loadData(key)
  }

  if (!authorized) {
    return (
      <div className="min-h-screen p-6 bg-gradient-to-br from-pink-50 to-yellow-50">
        <h1 className="text-2xl font-bold mb-2 text-pink-600">Admin Login</h1>
        <input
          type="password"
          placeholder="Enter admin key"
          className="border p-2 rounded text-gray-700 mb-4 w-full max-w-sm"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded"
        >
          View Dashboard
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-pink-50 to-yellow-50 w-full mx-auto">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">Rosebay Admin Panel</h1>

      <p className="text-gray-700 mb-2">🧁 Total Ratings: {data?.total}</p>
      <p className="text-gray-700 mb-4">⭐ Average Rating: {data?.average?.toFixed(2)}</p>

      <div className="bg-white rounded-xl p-4 shadow-md max-w-2xl mb-8">
        <h2 className="text-xl font-bold text-pink-500 mb-2">Recent Feedback</h2>
        {data?.ratings?.length ? (
          data.ratings.map((r: any) => (
            <div key={r.id} className="border-b py-2">
              <p className="text-sm text-gray-700">Rating: {r.rating}</p>
              {r.feedback && <p className="text-sm text-gray-500 italic">"{r.feedback}"</p>}
              <p className="text-xs text-gray-400">{new Date(r.createdAt).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No feedback yet.</p>
        )}
      </div>

      {data?.hourly && (
        <div className="bg-white p-4 rounded-xl shadow-md max-w-3xl mb-8">
          <h2 className="text-xl font-bold text-pink-500 mb-4">📊 Ratings Per Hour</h2>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data.hourly}>
              <XAxis dataKey="hour" />
              <YAxis domain={[0, 5]} />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" />
              <Line type="monotone" dataKey="avg_rating" stroke="#ec4899" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>

          <h3 className="text-lg font-semibold mt-6 text-pink-500">🧁 Submissions Per Hour</h3>

          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data.hourly}>
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#fbbf24" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Wall of Fame Upload */}
      <div className="bg-white rounded-xl p-6 shadow-md max-w-2xl">
        <h2 className="text-xl font-bold text-pink-500 mb-4">🏆 Update Wall of Fame</h2>
        <p>Feature coming soon</p>
        {/* <WallImageUploader /> */}
      </div>
    </div>
  )
}
