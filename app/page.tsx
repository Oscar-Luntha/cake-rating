import "./styles/background.css"
import { Smartphone,Cake , Truck } from "lucide-react"
import WhatWeBake from "./component/whatwebake"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-pink-500">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-pink-100 to-yellow-50">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4">
          Homemade Cakes, Baked with Love 🧁
        </h1>
        <p className="text-lg text-gray-700 max-w-xl">
          Custom cakes made fresh in our home bakery — crafted for your special moments and delivered to your doorstep.
        </p>
        <a
          href="/order"
          className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition"
        >
          Place an Order
        </a>
      </section>

      {/* What We Bake */}
      <WhatWeBake />
<section className="py-12 px-6 bg-yellow-50 text-center">
  <h2 className="text-2xl font-semibold text-pink-700 mb-8">How It Works</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
    
    <div className="p-6 flex flex-col items-center">
      <span className="text-3xl mb-3"><Smartphone size={48} className="text-pink-500" /></span>
      <h3 className="font-semibold text-pink-500">1. Place Your Order</h3>
      <p className="text-gray-600 mt-2">Send us your cake idea or design.</p>
    </div>

    <div className="p-6 flex flex-col items-center">
      <span className="text-3xl mb-3"><Cake size={48} className="text-pink-500"/></span>
      <h3 className="font-semibold text-pink-500">2. Freshly Baked</h3>
      <p className="text-gray-600 mt-2">We bake with love using fresh ingredients.</p>
    </div>

    <div className="p-6 flex flex-col items-center">
      <span className="text-3xl mb-3"><Truck size={48} className="text-pink-500"/></span>
      <h3 className="font-semibold text-pink-500">3. Delivered to You</h3>
      <p className="text-gray-600 mt-2">Get your cake delivered right on time.</p>
    </div>
    
  </div>
</section>
      {/* Testimonials */}
      <section className="py-12 px-6 bg-yellow-50 text-center">
        <h2 className="text-2xl font-semibold text-pink-700 mb-6">What Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <blockquote className="p-4 bg-white rounded-xl shadow italic text-gray-600">
            “The cake was gorgeous and delicious!”  
            <span className="block mt-2 font-bold text-pink-600">– Anna</span>
          </blockquote>
          <blockquote className="p-4 bg-white rounded-xl shadow italic text-gray-600">
            “Delivery was right on time. Perfect service!”  
            <span className="block mt-2 font-bold text-pink-600">– Daniel</span>
          </blockquote>
          <blockquote className="p-4 bg-white rounded-xl shadow italic text-gray-600">
            “Highly recommend for birthdays and weddings.”  
            <span className="block mt-2 font-bold text-pink-600">– Grace</span>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-600 text-white py-6 text-center mt-auto">
        <p>© {new Date().getFullYear()} Rosebay Cakes – Homemade with Love</p>
        <p className="text-sm mt-1">Contact: +265 xxx xxx xxx | Instagram @rosebaycakes</p>
      </footer>
    </div>
  )
}
