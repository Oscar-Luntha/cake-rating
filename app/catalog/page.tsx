import Image from "next/image"
import "../styles/background.css"

async function getCakes() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/cakes`, {
    cache: "no-store",
  })
  if (!res.ok) throw new Error("Failed to fetch cakes")
  return res.json()
}

export default async function CatalogPage() {
  const cakes = await getCakes()

  return (
    <main className="min-h-screen bg-amber-500 py-10 px-4 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-8">
        <h1 className="text-4xl font-bold text-white text-center mb-10 drop-shadow-sm">
           Our Cakes
        </h1>

        {/* Grid responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cakes.map((cake: any) => (
            <div
              key={cake.id}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 shadow-lg hover:scale-105 transition-transform"
            >
              {/* Cake Image */}
              <div className="w-[100px] h-[100px] relative flex-shrink-0">
                <Image
                  src={cake.imageUrl}
                  alt={cake.name}
                  fill
                  className="object-cover rounded-xl shadow-md"
                />
              </div>

              {/* Cake Info */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900 drop-shadow-sm">
                  {cake.name}
                </h2>
                <p className="text-pink-600 font-bold mt-1 drop-shadow-sm">
                  {cake.price} MWK
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
