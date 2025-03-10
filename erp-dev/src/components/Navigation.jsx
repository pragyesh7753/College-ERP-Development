import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5"; // Close icon

function Navigation({ isActive, setIsActive }) {
  return (
    <div
      className={`nav-container fixed left-0 top-0 h-screen w-60 bg-red-300 p-5 shadow-lg transition-all duration-500 ease-in-out transform ${
        isActive ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-white text-2xl bg-red-500 p-1 rounded-full hover:bg-red-600 transition"
        onClick={() => setIsActive(false)}
      >
        <IoClose />
      </button>

      {/* User Section */}
      <div className="user-detail flex items-center gap-4 p-4 bg-red-400 rounded-lg shadow-md mt-8">
        <FaUserAlt className="text-white text-3xl" />
        <div className="user-message">
          <h1 className="text-white font-bold text-lg">Hello! John Doe</h1>
          <p className="text-white text-sm">Welcome to the Dashboard</p>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="mt-6 space-y-3">
        <li className="p-3 bg-red-500 rounded-lg text-white hover:bg-red-600 cursor-pointer transition duration-300">
          Home
        </li>
        <li className="p-3 bg-red-500 rounded-lg text-white hover:bg-red-600 cursor-pointer transition duration-300">
          Contact
        </li>
        <li className="p-3 bg-red-500 rounded-lg text-white hover:bg-red-600 cursor-pointer transition duration-300">
          Profile
        </li>
        <li className="p-3 bg-red-500 rounded-lg text-white hover:bg-red-600 cursor-pointer transition duration-300">
          Detail
        </li>
        <li className="p-3 bg-red-500 rounded-lg text-white hover:bg-red-600 cursor-pointer transition duration-300">
          Something Else
        </li>
      </ul>
    </div>
  )
}

export default Navigation
