// import React from "react";
import { NavLink } from "react-router";
import PropTypes from 'prop-types';


const SideBar = ({ children }) => {
  const allRoutes = [
    { path: "/home", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
    { path: "/dashboard", name: "Dashboard" },
  ];






  return (
    <>

    <div className="flex">
      {/* Sidebar */}
      <aside className="w-60 h-screen bg-gradient-to-b from-red-600 to-red-400 text-white p-5 shadow-lg">
        <h2 className="text-xl font-bold mb-6 text-center">My Sidebar</h2>
        <nav className="flex flex-col gap-4">
          {allRoutes.map((ele) => (
            <NavLink
              to={ele.path}
              key={ele.name}
              className={({ isActive }) =>
                `block py-3 px-4 rounded-lg transition-all duration-300 text-lg font-semibold ${
                  isActive
                  ? "bg-white text-red-500 shadow-md"
                  : "hover:bg-red-700 hover:shadow-lg"
                }`
              }
              >
              {ele.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
          </>
  );
};
SideBar.propTypes = {
  children: PropTypes.node,
};

export default SideBar;
