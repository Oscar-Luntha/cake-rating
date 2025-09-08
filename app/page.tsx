import "./styles/background.css"
import { Smartphone, Cake, Truck } from "lucide-react"
import WhatWeBake from "./component/whatwebake"
import About from "./component/about"
import ContactSection from "./component/contact"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-pink-50">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Homemade Cakes, Baked with{" "}
          <span className="text-4xl md:text-5xl font-bold text-pink-600">
            Love
          </span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Custom cakes made fresh in our home bakery — crafted for your special
          moments and delivered to your doorstep.
        </p>
        <a
          href="https://wa.me/+265884099667"
          className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition"
        >
          Place an Order
        </a>
      </section>

      {/* What We Bake */}
      <WhatWeBake />

      {/* How It Works */}
      <section className="py-12 px-6 bg-amber-50 text-center">
        <h2 className="text-2xl font-semibold text-pink-600 mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 flex flex-col items-center bg-white rounded-xl shadow">
            <Smartphone size={48} className="text-pink-500 mb-3" />
            <h3 className="font-semibold text-gray-800">1. Place Your Order</h3>
            <p className="text-gray-600 mt-2">
              Send us your cake idea or design.
            </p>
          </div>

          <div className="p-6 flex flex-col items-center bg-white rounded-xl shadow">
            <Cake size={48} className="text-pink-500 mb-3" />
            <h3 className="font-semibold text-gray-800">2. Freshly Baked</h3>
            <p className="text-gray-600 mt-2">
              We bake with love using fresh ingredients.
            </p>
          </div>

          <div className="p-6 flex flex-col items-center bg-white rounded-xl shadow">
            <Truck size={48} className="text-pink-500 mb-3" />
            <h3 className="font-semibold text-gray-800">3. Delivered to You</h3>
            <p className="text-gray-600 mt-2">
              Get your cake delivered right on time.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-2xl font-semibold text-pink-600 mb-6">
          What Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <blockquote className="p-4 bg-pink-50 rounded-xl shadow italic text-gray-700">
            “The cakes are always gorgeous and delicious!”  
            <span className="block mt-2 font-bold text-pink-600">– Anna</span>
          </blockquote>
          <blockquote className="p-4 bg-pink-50 rounded-xl shadow italic text-gray-700">
            “Delivery was right on time. Perfect service!”  
            <span className="block mt-2 font-bold text-pink-600">– Daniel</span>
          </blockquote>
          <blockquote className="p-4 bg-pink-50 rounded-xl shadow italic text-gray-700">
            “Highly recommend for birthdays”  
            <span className="block mt-2 font-bold text-pink-600">– Grace</span>
          </blockquote>
        </div>
      </section>

      <About />
      <ContactSection />
      {/* Footer */}
      <footer className="bg-pink-600 text-white py-6 text-center mt-auto">
        <p>© {new Date().getFullYear()} Rosebay Cakes – Homemade with Love</p>
        <p className="text-sm mt-1">
          Contact: <a href="https://wa.me/+265884099667">+265884099667</a> | Instagram @rosebaycakes
        </p>
      </footer>
    </div>
  )
}
