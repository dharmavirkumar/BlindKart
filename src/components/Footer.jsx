import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-10">

        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-green-500 mb-4">BlindKart</h2>
          <p className="text-sm leading-6 text-gray-400">
            Your trusted destination for inclusive online shopping.  
            We believe accessibility and innovation go hand in hand.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-green-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-green-400 transition">About</a></li>
            <li><a href="/help" className="hover:text-green-400 transition">Help & Support</a></li>
            <li><a href="/contact" className="hover:text-green-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Useful Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-400 transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Accessibility Info</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Developer API</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-green-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-green-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-green-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-green-400 transition"><FaLinkedinIn /></a>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Stay connected for updates and offers.
          </p>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700 mt-10 mb-4"></div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} <span className="text-green-500 font-semibold">BlindKart</span>.  
          All Rights Reserved.
        </p>
        <p className="mt-1 text-gray-400">Designed by <span className="text-green-400 font-semibold">Dharmavir Singh 👨‍💻</span></p>
      </div>
    </footer>
  );
}

export default Footer;
