import React, { useState } from "react";
import { FaUserCircle, FaChevronDown, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import instituteImage from "../assets/St-andrews-banner.png";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const allRoutes = [
    { path: "/home", name: "Dashboard" },
    { path: "/about", name: "Academic Management" },
    { path: "/contact", name: "Content Management" },
    { path: "/dashboard", name: "My Documents" },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-gradient-to-b from-blue-900 to-blue-700 text-white p-5 shadow-lg flex flex-col min-h-screen transition-all duration-300 relative`}
      >
        {/* Banner Image with Background */}
        {isOpen && (
          <div className="w-full mb-4 rounded-lg shadow-md bg-white p-2">
            <img src={instituteImage} alt="Institute Banner" className="w-full rounded" />
          </div>
        )}

        {/* Toggle Button */}
        <button 
          className="text-white text-2xl mb-4 focus:outline-none hover:text-gray-300"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-6">
          <FaUserCircle className="text-6xl text-white mb-2 hover:opacity-80 transition" />
          {isOpen && <h1 className="text-lg font-semibold hover:text-gray-300 transition">KAUSHLEDRA T.</h1>}
          <FaChevronDown className="text-white mt-2 cursor-pointer hover:text-gray-300 transition" />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-3">
          {allRoutes.map((route) => (
            <Link
              key={route.name}
              to={route.path}
              className="block py-3 px-4 rounded-lg hover:bg-blue-600 transition text-white font-semibold hover:shadow-md hover:scale-105 transform duration-200"
            >
              {isOpen ? route.name : ""}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 transition-all duration-300 hover:shadow-lg">{children}</main>
    </div>
  );
};

export default Sidebar;
