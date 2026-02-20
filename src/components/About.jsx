import React from "react";

function About() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* 🌟 Header Section */}
      <section className="bg-green-600 text-white py-16 text-center shadow-md">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-green-100 max-w-3xl mx-auto">
          Empowering people through accessibility, technology, and trust — welcome to <span className="font-semibold">BlindKart</span>.
        </p>
      </section>

      {/* 🧭 Who We Are */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4108/4108849.png"
            alt="Who We Are"
            className="w-80 mx-auto md:mx-0 drop-shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-green-600 mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            BlindKart is a community-driven e-commerce platform designed to make online shopping accessible for everyone — especially for individuals with visual impairments.  
          </p>
          <p className="text-gray-600 leading-relaxed">
            We combine technology, inclusivity, and design innovation to create a seamless, enjoyable, and independent shopping experience for all users.
          </p>
        </div>
      </section>

      {/* 💡 Our Mission */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our mission is simple — to bridge the accessibility gap in online shopping through the power of technology.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>🛍️ Simplify shopping for everyone</li>
              <li>🔊 Enhance accessibility with assistive features</li>
              <li>💚 Build an inclusive community of customers and creators</li>
            </ul>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/748/748151.png"
              alt="Our Mission"
              className="w-80 mx-auto md:mx-0 drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 🚀 Our Vision */}
      <section className="bg-green-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4072/4072540.png"
              alt="Our Vision"
              className="w-80 mx-auto md:mx-0 drop-shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To redefine the online shopping experience by ensuring that accessibility, inclusivity, and innovation go hand-in-hand.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our goal is to become the most trusted, inclusive, and technology-driven platform where every user — regardless of ability — can explore, shop, and connect effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* 🤝 Core Values */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-8">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Accessibility</h3>
            <p className="text-gray-600 text-sm">
              Designing for everyone, regardless of their abilities.
            </p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Innovation</h3>
            <p className="text-gray-600 text-sm">
              Constantly evolving to create smarter solutions for our users.
            </p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Trust</h3>
            <p className="text-gray-600 text-sm">
              Building reliability and safety into every step of your journey.
            </p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Community</h3>
            <p className="text-gray-600 text-sm">
              Bringing people together to support and inspire one another.
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default About;
