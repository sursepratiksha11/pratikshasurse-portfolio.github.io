import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-purple-100 dark:bg-slate-900 text-black dark:text-white fixed top-0 w-full z-50 shadow-md font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Brand with Profile */}
        <div className="flex items-center space-x-3">
          <img
            src="/pink.jpg"
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover"
          />
          <h1 className="font-bold text-lg font-poppins"><i>Pratiksha's Portfolio</i></h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-base font-medium">
          <li>
            <Link to="/" className="hover:text-purple-900 flex items-center gap-2 font-serif">
              <b className="font-semibold">Home</b> 
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-purple-900 flex items-center gap-2 font-serif">
              <b className="font-semibold">About</b>
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-purple-900 flex items-center gap-2 font-serif">
              <b className="font-semibold">Projects</b>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-purple-900 flex items-center gap-2 font-serif">
              <b className="font-semibold">Contact</b>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-black dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-4 right-4 bg-white text-purple-900 rounded-md shadow-xl p-4 z-40 font-serif">
          <ul className="flex flex-col divide-y divide-purple-700 font-medium">
            <li className="py-3 flex items-center gap-3">
              🏠 <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className="py-3 flex items-center gap-3">
              👨‍💼 <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li className="py-3 flex items-center gap-3">
              🧩 <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            </li>
            <li className="py-3 flex items-center gap-3">
              ✉️ <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
