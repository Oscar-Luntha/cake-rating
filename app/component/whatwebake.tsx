"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const cakes = [
  {
    id: 1,
    name: "Birthday Cakes",
    description: "Custom designs for birthdays, crafted with love and creativity.",
    image: "/images/birthday.jpeg",
  },
  {
    id: 2,
    name: "Cupcakes",
    description: "Delicious bite-sized treats, perfect for parties and gifts.",
    image: "/images/cupies.png",
  },
  {
    id: 3,
    name: "Kids Specials",
    description: "Fun, colorful cakes designed to make kids smile.",
    image: "/images/kids.png",
  },
  {
    id: 4,
    name: "Custom Designs",
    description: "Unique cakes tailored to your vision and special occasions.",
    image: "/images/cutom.png",
  },
]

export default function WhatWeBake() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cakes.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cakes.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cakes.length) % cakes.length)
  }

  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-2xl font-semibold text-center text-pink-600 mb-8">
        Featured Creations
      </h2>

      <div className="relative h-[80vh] overflow-hidden rounded-lg max-w-5xl mx-auto shadow-lg">
        {cakes.map((cake, index) => (
          <div
            key={cake.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
  src={cake.image}
  alt={cake.name}
  className="w-full h-full object-contain bg-black"
/>
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-bold mb-2">{cake.name}</h3>
              <p className="text-lg text-white/90 max-w-md">
                {cake.description}
              </p>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {cakes.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* CTA below slideshow */}
      <div className="mt-8 text-center">
        <a
          href="/catalog"
          className="px-6 py-3 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition"
        >
          View Full Catalog →
        </a>
      </div>
    </section>
  )
}
