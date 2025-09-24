import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react"; // make sure lucide-react is installed
import sunmunLogo from "../assets/sunmun-logo.jpeg";

export default function Navbar() {
  const [activeLang, setActiveLang] = useState("EN");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-6 py-3 flex items-center justify-between">
      {/* Left side - Navigation */}
      <div className="flex space-x-6 font-medium">

        <Link
          to={`/`}
          className="text-white relative px-1 py-1 hover:border-b-2 hover:border-orange-400 transition"
        >
          Home
        </Link>
        <Link
          to={`/Collections`}
          className="text-white relative px-1 py-1 hover:border-b-2 hover:border-orange-400 transition"
        >
          Collections
        </Link>
        <Link
          to={`/Sustainability`}
          className="text-white relative px-1 py-1 hover:border-b-2 hover:border-orange-400 transition"
        >
          Sustainability
        </Link>
        <Link
          to={`/Color-Cards`}
          className="text-white relative px-1 py-1 hover:border-b-2 hover:border-orange-400 transition"
        >
          Color Cards
        </Link>
      </div>

      {/* Center - Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 border">
        <img
          src={sunmunLogo}
          alt="Quality"
          className="w-full h-12 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        {/* Search bar with Lucide icon */}
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-3 py-1 rounded-md border border-white text-white text-sm focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
        </div>

        {/* Contact button - outline style */}
        <Link
          to="/contact"
          className="px-4 py-1 rounded-lg border border-orange-400 text-white font-medium hover:bg-orange-400 hover:text-white transition"
        >
          Contact
        </Link>

        {/* Language toggle */}
        <div className="flex border border-white rounded-md overflow-hidden text-sm">
          <button
            onClick={() => setActiveLang("EN")}
            className={`px-3 py-1 transition ${
              activeLang === "EN"
                ? "bg-orange-400 text-white"
                : "text-white bg-white"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setActiveLang("中文")}
            className={`px-3 py-1 transition ${
              activeLang === "中文"
                ? "bg-orange-400 text-white"
                : "text-white bg-white"
            }`}
          >
            中文
          </button>
        </div>
      </div>
    </nav>
  );
}
