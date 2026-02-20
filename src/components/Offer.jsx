// function Offer(){
//     const offers = [
//     {
//       id: 1,
//       title: "🎉 Flat 50% Off on First Purchase",
//       description:
//         "Sign up today and get 50% off on your first order. Hurry, limited time offer!",
//       image: "https://cdn-icons-png.flaticon.com/512/3737/3737372.png",
//       bg: "from-green-100 to-green-50",
//     },
//     {
//       id: 2,
//       title: "🛒 Buy 1 Get 1 Free",
//       description:
//         "Shop any two items and get the lower-priced one absolutely FREE! Available in selected categories.",
//       image: "https://cdn-icons-png.flaticon.com/512/2150/2150495.png",
//       bg: "from-yellow-100 to-yellow-50",
//     },
//     {
//       id: 3,
//       title: "🚚 Free Delivery Weekend",
//       description:
//         "Enjoy free delivery on all orders above ₹499 this weekend only. No coupon needed!",
//       image: "https://cdn-icons-png.flaticon.com/512/1027/1027123.png",
//       bg: "from-blue-100 to-blue-50",
//     },
//     {
//       id: 4,
//       title: "💳 20% Cashback on UPI Payments",
//       description:
//         "Pay using UPI and get 20% cashback (up to ₹200) instantly in your wallet.",
//       image: "https://cdn-icons-png.flaticon.com/512/891/891462.png",
//       bg: "from-pink-100 to-pink-50",
//     },
//   ];

//     return(
//         <>
        
        
//         </>
//     )
// }

// export default Offer;


import React from "react";

function Offer() {
  const offers = [
    {
      id: 1,
      title: "🎉 Flat 50% Off on First Purchase",
      description:
        "Sign up today and get 50% off on your first order. Hurry, limited time offer!",
      image: "https://cdn-icons-png.flaticon.com/512/3737/3737372.png",
      bg: "from-green-100 to-green-50",
    },
    {
      id: 2,
      title: "🛒 Buy 1 Get 1 Free",
      description:
        "Shop any two items and get the lower-priced one absolutely FREE! Available in selected categories.",
      image: "https://cdn-icons-png.flaticon.com/512/2150/2150495.png",
      bg: "from-yellow-100 to-yellow-50",
    },
    {
      id: 3,
      title: "🚚 Free Delivery Weekend",
      description:
        "Enjoy free delivery on all orders above ₹499 this weekend only. No coupon needed!",
      image: "https://cdn-icons-png.flaticon.com/512/1027/1027123.png",
      bg: "from-blue-100 to-blue-50",
    },
    {
      id: 4,
      title: "💳 20% Cashback on UPI Payments",
      description:
        "Pay using UPI and get 20% cashback (up to ₹200) instantly in your wallet.",
      image: "https://cdn-icons-png.flaticon.com/512/891/891462.png",
      bg: "from-pink-100 to-pink-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* 🌟 Header */}
      <header className="bg-green-600 text-white py-6 shadow-md text-center">
        <h1 className="text-4xl font-bold">🔥 Exclusive Offers & Deals</h1>
        <p className="text-lg mt-2 text-green-100">
          Save more every day with BlindKart’s latest discounts
        </p>
      </header>

      {/* 🛍️ Offer Grid */}
      <section className="max-w-7xl mx-auto py-12 px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`rounded-2xl bg-gradient-to-r ${offer.bg} shadow-md hover:shadow-xl p-6 text-center transition transform hover:-translate-y-1`}
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-24 h-24 mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-green-700 mb-2">
              {offer.title}
            </h2>
            <p className="text-gray-700 text-sm mb-4">{offer.description}</p>
            <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
              Shop Now
            </button>
          </div>
        ))}
      </section>

      {/* 🧾 Newsletter / Coupon Section */}
      <section className="bg-green-100 py-12 text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          💌 Subscribe for More Deals
        </h2>
        <p className="text-gray-600 mb-6">
          Get exclusive offers, new arrivals, and discounts delivered straight
          to your inbox.
        </p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-64 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-r-lg hover:bg-green-700 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* 🦶 Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center mt-10">
        <p>&copy; {new Date().getFullYear()} BlindKart. All Rights Reserved.</p>
        <p className="text-sm mt-1">
          Designed by <span className="text-green-400 font-semibold">Dharmavir Singh 👨‍💻</span>
        </p>
      </footer>
    </div>
  );
}

export default Offer;
