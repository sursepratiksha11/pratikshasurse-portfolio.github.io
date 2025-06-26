import React, { useState } from "react";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/contact", formData);
      toast.success("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("❌ Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-200 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 p-6">
      <ToastContainer />
      {/* Glass Box */}
      <div className="w-full max-w-xl p-8 rounded-xl bg-white/70 dark:bg-slate-800/60 shadow-2xl backdrop-blur-lg animate-fade-in">
        <h2 className="text-4xl font-bold text-center text-purple-700 dark:text-purple-300 mb-4">
          ✨ Contact Me
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Reach out to collaborate, connect, or just say hello!
        </p>

        {/* Email Display */}
        <div className="flex items-center space-x-3 mb-6 justify-center">
          <span className="text-2xl animate-wiggle">📧</span>
          <a
            href="mailto:sursepratiksha11@gmail.com"
            className="text-purple-600 dark:text-purple-300 hover:underline"
          >
            sursepratiksha11@gmail.com
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 text-gray-800 dark:text-gray-200">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              🧑 Your Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="e.g. Name Surname"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              📮 Your Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              💬 Your Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Type your message here..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md shadow-lg transition-all duration-300"
          >
            <FaPaperPlane className="animate-wiggle" /> Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://www.linkedin.com/in/pratiksha-surse-568491237/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-400 text-2xl transition-colors duration-300"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/sursepratiksha11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-400 text-2xl transition-colors duration-300"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:sursepratiksha11@mail.com"
            className="text-gray-600 hover:text-indigo-400 text-2xl transition-colors duration-300"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }
        .animate-wiggle {
          animation: wiggle 1.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Contact;
