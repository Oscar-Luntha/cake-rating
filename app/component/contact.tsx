"use client"

import { Phone, Instagram, Music2 } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-16 px-6 bg-white" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-8">📞 Contact Us</h2>
        <p className="text-gray-600 mb-12">
          Have a question or want to place an order? Reach out to us directly or
          connect with us on social media.
        </p>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/+265884099667"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-pink-50 rounded-xl shadow hover:shadow-md transition"
          >
            <Phone className="h-10 w-10 text-green-500 mb-3" />
            <h3 className="font-semibold text-gray-800">WhatsApp</h3>
            <p className="text-sm text-gray-600">+265 884 099 667</p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/rosebay_cakeboutique?igsh=MWtxd3kzc3ptZTNsdg=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-pink-50 rounded-xl shadow hover:shadow-md transition"
          >
            <Instagram className="h-10 w-10 text-pink-500 mb-3" />
            <h3 className="font-semibold text-gray-800">Instagram</h3>
            <p className="text-sm text-gray-600">@rosebay_cakeboutique</p>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@rosebaby_xo?_t=ZM-8zXNSXua39B&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-pink-50 rounded-xl shadow hover:shadow-md transition"
          >
            <Music2 className="h-10 w-10 text-black mb-3" />
            <h3 className="font-semibold text-gray-800">TikTok</h3>
            <p className="text-sm text-gray-600">@rosebaby_xo</p>
          </a>
        </div>
      </div>
    </section>
  )
}
