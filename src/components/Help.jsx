function Help(){
    return(
        <>

    <div className="bg-gray-50 text-gray-800 font-sans">

      {/* 🌟 Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-green-100 to-green-50">
        <h2 className="text-4xl font-bold text-green-700">Need Help?</h2>
        <p className="text-lg mt-3 text-gray-600 max-w-2xl mx-auto">
          We're here to assist you with orders, accessibility, or any technical
          issues. Choose a help category below to get started.
        </p>
      </section>

      {/* 🧩 Help Categories */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2089/2089181.png"
            alt="Order Help"
            className="w-20 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-green-700">
            Order Assistance
          </h3>
          <p className="text-gray-600 mb-4">
            Facing issues with an order, delivery, or payment? We're here to
            resolve it quickly.
          </p>
          <a href="#" className="text-green-600 font-medium hover:underline">
            Chat with Support →
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1086/1086933.png"
            alt="Accessibility"
            className="w-20 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-green-700">
            Accessibility Support
          </h3>
          <p className="text-gray-600 mb-4">
            Learn how to use screen readers, voice commands, and accessibility
            tools on BlindKart.
          </p>
          <a href="#" className="text-green-600 font-medium hover:underline">
            Learn More →
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png"
            alt="Contact Us"
            className="w-20 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-green-700">
            Contact Us
          </h3>
          <p className="text-gray-600 mb-4">
            Can't find your answer? Reach out to us directly via email or phone.
          </p>
          <a
            href="mailto:support@blindkart.com"
            className="text-green-600 font-medium hover:underline"
          >
            Email Us →
          </a>
        </div>
      </section>

      {/* 💬 FAQ Section */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 text-left">
            <div className="bg-gray-100 rounded-xl p-5">
              <h3 className="font-semibold text-lg text-green-700">
                1. How can I track my order?
              </h3>
              <p className="text-gray-600 mt-2">
                You can track your order in the “My Orders” section under your
                account dashboard.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-5">
              <h3 className="font-semibold text-lg text-green-700">
                2. Is BlindKart accessible for visually impaired users?
              </h3>
              <p className="text-gray-600 mt-2">
                Yes, BlindKart supports voice commands, screen readers, and
                other accessibility features.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-5">
              <h3 className="font-semibold text-lg text-green-700">
                3. How do I request a refund?
              </h3>
              <p className="text-gray-600 mt-2">
                Go to your order history, select the order, and click on
                “Request Refund”.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 📞 Contact Section */}
      <section className="bg-green-100 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Still Need Help?
          </h2>
          <p className="text-gray-600 mb-6">
            Reach out to our support team anytime. We’re happy to assist!
          </p>
          <a
            href="mailto:support@blindkart.com"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Contact Support
          </a>
        </div>
      </section>

      
    </div>



        
        </>
    )
}

export default Help;