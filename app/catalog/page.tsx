import Image from "next/image"

const cakes = [
  {
    id: 1,
    name: "Birthday Cake",
    image: "/images/birthday.jpeg",
    description: "Perfect centerpiece for birthdays, custom-made in your favorite flavor.",
    price: "From $25",
  },
  {
    id: 2,
    name: "Cupcakes",
    image: "/images/cupies.png",
    description: "Box of 6 or 12. Soft, fluffy, and decorated for any occasion.",
    price: "From $10",
  },
  {
    id: 3,
    name: "Bento Cake",
    image: "/images/bento.jpeg",
    description: "Trendy Korean-style mini cakes, beautifully decorated.",
    price: "From $15",
  },
  {
    id: 4,
    name: "Wedding Cake",
    image: "/images/wedding.jpeg",
    description: "Elegant tiered cakes for weddings. Fully customizable.",
    price: "From $100",
  },
]

export default function CatalogPage() {
  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
        Our Catalog
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cakes.map((cake) => (
          <div
            key={cake.id}
            className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition"
          >
            <div className="relative h-56 w-full">
              <Image
                src={cake.image}
                alt={cake.name}
                fill
                className="object-cover group-hover:scale-105 transition"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-pink-500">{cake.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{cake.description}</p>
              <span className="text-gray-800 font-medium">{cake.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
