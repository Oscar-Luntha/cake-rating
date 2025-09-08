import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-8 px-6 bg-pink-50">
         <h1 className="text-lg text-gray-600 w-full text-center italic mb-6">Meet the owner and get to know more about Rosebay cakes</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div className="relative h-[800px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/the-baker.jpeg" // replace with real photo
            alt="Bakery owner"
            fill
            className=""
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-pink-600 mb-4">
            About Rosebay cakes
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Founded in <span className="font-semibold">2020</span>, Rosebay cakes is a
            small home-based business in <span className="font-semibold">Mzuzu</span>. Run by a
            passionate baker, we specialize in custom cakes  that
            bring joy to every celebration. 
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            From birthday parties to anniversary celebrations, we bake everything from scratch,
            using only the freshest locally-sourced ingredients. Our cakes are
            crafted with love, care, and a personal touch that makes every order
            unique.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Having had <span className="font-semibold">successful sellouts</span> at local
            farmers markets, we’ve built a trusted reputation for quality and
            consistency. Whether it’s a small family gathering or a big
            celebration, we’re here to make your day sweeter.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-bold text-pink-600">100+</h3>
          <p className="text-gray-600 text-sm">Happy Customers</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-bold text-pink-600">50+</h3>
          <p className="text-gray-600 text-sm">Cake Varieties</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-bold text-pink-600">100%</h3>
          <p className="text-gray-600 text-sm">Locally Sourced</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-bold text-pink-600">3+</h3>
          <p className="text-gray-600 text-sm">Years of Baking</p>
        </div>
      </div>
    </section>
  )
}
