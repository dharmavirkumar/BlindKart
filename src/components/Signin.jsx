// function Signin(){
//     return(
//         <>

//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-50">
//       <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
//         <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
//           Create Your Account
//         </h2>

        

//         <form >
//           {/* Name */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
              
//               required
//               placeholder="Enter your name"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               placeholder="Enter your password"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//               placeholder="Confirm your password"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-600 mt-4">
//           Already have an account?{" "}
//           <a href="/login" className="text-green-600 font-semibold hover:underline">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>

        
//         </>
//     )
// }

// export default Signin;

import React, { useState } from "react";

function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // Handle input change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  // Handle login submit
  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setMessage("⚠️ Please fill in all fields.");
      return;
    }

    // Later: send to backend API
    console.log("Login data:", formData);
    setMessage("✅ Login successful!");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-50">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-500 mb-4">
          Sign in to continue shopping
        </p>

        {/* Dynamic message */}
        {message && (
          <p
            className={`text-center font-medium mb-4 ${
              message.includes("✅") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Footer Links */}
        <div className="text-center mt-5 text-sm text-gray-600">
          <p>
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-green-600 font-semibold hover:underline"
            >
              Sign Up
            </a>
          </p>
          <p className="mt-2">
            <a
              href="/forgot-password"
              className="text-green-500 hover:underline"
            >
              Forgot your password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
