import Image from "next/image"

export default function WhatWeBake() {
  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-2xl font-semibold text-center text-pink-500 mb-8">
        What We Bake
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-6xl mx-auto">
        
        {/* Birthday Cake - Big Highlight */}
        <div className="relative md:row-span-2 h-96 rounded-xl overflow-hidden shadow-lg group">
          <Image
            width={800}
            height={1000}
            src="/images/birthday.jpeg"
            alt="Birthday Cake"
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h3 className="text-white text-2xl font-bold">Birthday Cakes</h3>
          </div>
        </div>

        {/* Cupcakes */}
        <div className="relative h-44 rounded-xl overflow-hidden shadow-lg group">
          <Image
            width={300}
            height={200}
            src="/images/cupies.png"
            alt="Cupcakes"
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h3 className="text-white text-xl font-bold">Cupcakes</h3>
          </div>
        </div>

        {/* Bento */}
        <div className="relative h-44 rounded-xl overflow-hidden shadow-lg group">
          <Image
            width={300}
            height={200}
            src="/images/kids.png"
            alt="Bento Cakes"
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h3 className="text-white text-xl font-bold">Kids specials</h3>
          </div>
        </div>
                <div className="relative h-44 rounded-xl overflow-hidden shadow-lg group">
          <img
            src="/images/cutom.png"
            alt="Custom designs"
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h3 className="text-white text-xl font-bold">Custom designs</h3>
          </div>
        </div>


        {/* View Full Catalog */}
        <div className="relative h-44 rounded-xl overflow-hidden shadow-lg group">
          <a
            href="/catalog"
            className="absolute inset-0 bg-pink-600/70 flex items-center justify-center text-white text-xl font-bold hover:bg-pink-700/80 transition"
          >
            View Full Catalog →
          </a>
        </div>
      </div>
    </section>
  )
}
