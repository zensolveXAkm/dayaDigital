import React, { useState } from "react";
import { account } from "../AppwriteConfig";
import { FiUser, FiMail, FiLock, FiKey } from "react-icons/fi"; // React Icons
import { HiArrowRight } from "react-icons/hi"; // Heroicon

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Create a new user with Appwrite's createUser method
      await account.create(userId, email, password, name);
      alert("Registered successfully!");
      window.location.href = "/"; // Redirect to login page
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-blue-600 via-purple-600 to-pink-700 text-white relative">
      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 opacity-70 animate-gradient z-0"></div>

      {/* Left Section */}
      <div className="flex flex-col justify-center items-start w-full lg:w-1/2 p-12 lg:p-20 relative z-10">
        <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 glow-text">
          <span className="typing-effect">
            Join the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500">
              Digital Line
            </span>
          </span>
        </h1>
        <p className="text-lg lg:text-xl mb-8 font-medium leading-relaxed">
          Become a part of our vibrant community and enjoy secure, seamless access to our
          services.
        </p>
        <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg mb-6 transform hover:scale-110 transition duration-300">
          <img
            src="Screenshot 2024-12-27 194139.png"
            alt="Technology"
            className="w-full h-full object-cover"
          />
        </div>
        <button className="px-8 py-3 text-lg font-bold rounded-full bg-gradient-to-r from-yellow-300 via-orange-500 to-pink-500 text-black shadow-lg hover:shadow-orange-400/50 flex items-center gap-3 transform hover:scale-110 transition duration-300">
          Learn More <HiArrowRight className="animate-bounce" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center w-full lg:w-1/2 bg-white p-8 lg:p-20 relative z-10">
        <div className="w-full max-w-lg bg-gray-100 rounded-xl shadow-xl p-8 backdrop-blur-lg bg-opacity-80 transform hover:scale-105 transition">
          <form onSubmit={handleRegister} className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse">
              Create Your Account
            </h2>
            {error && (
              <p className="text-red-500 text-sm text-center animate-bounce">
                {error}
              </p>
            )}
            <div className="relative">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Name
              </label>
              <div className="flex items-center w-full px-5 py-3 bg-gray-200 border border-gray-300 rounded-lg shadow-inner focus-within:ring-2 focus-within:ring-purple-500">
                <FiUser className="text-gray-500 mr-3" />
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-transparent focus:outline-none"
                />
              </div>
            </div>
            <div className="relative">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <div className="flex items-center w-full px-5 py-3 bg-gray-200 border border-gray-300 rounded-lg shadow-inner focus-within:ring-2 focus-within:ring-purple-500">
                <FiMail className="text-gray-500 mr-3" />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent focus:outline-none"
                />
              </div>
            </div>
            <div className="relative">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                Password
              </label>
              <div className="flex items-center w-full px-5 py-3 bg-gray-200 border border-gray-300 rounded-lg shadow-inner focus-within:ring-2 focus-within:ring-purple-500">
                <FiLock className="text-gray-500 mr-3" />
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-transparent focus:outline-none"
                />
              </div>
            </div>
            <div className="relative">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="userId">
                User ID
              </label>
              <div className="flex items-center w-full px-5 py-3 bg-gray-200 border border-gray-300 rounded-lg shadow-inner focus-within:ring-2 focus-within:ring-purple-500">
                <FiKey className="text-gray-500 mr-3" />
                <input
                  id="userId"
                  type="text"
                  placeholder="Enter your User ID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  required
                  className="w-full bg-transparent focus:outline-none"
                />
              </div>
            </div>
            <div className="relative">
              {loading && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse rounded-lg opacity-50"></div>
              )}
              <button
                type="submit"
                className={`w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:shadow-pink-500/50 flex items-center justify-center gap-3 transform hover:scale-110 transition ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    Registering... <FiKey className="animate-spin" />
                  </>
                ) : (
                  <>
                    Register <HiArrowRight className="animate-bounce" />
                  </>
                )}
              </button>
            </div>
          </form>
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-purple-500 hover:underline font-medium">
              Login
            </a>
          </p>
          <p className="text-center text-xs text-gray-400 mt-4">
            © {new Date().getFullYear()} Digital Line. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
