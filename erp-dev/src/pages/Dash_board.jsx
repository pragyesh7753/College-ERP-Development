import React from "react";
import { FaUserCircle, FaBell, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Top Bar */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Employee Analytics Dashboard</h1>
        <div className="flex items-center gap-4">
          <FaBell className="text-xl text-gray-600 cursor-pointer hover:text-gray-800" />
          <div className="flex items-center gap-2">
            <FaUserCircle className="text-3xl text-gray-600" />
            <span className="font-medium">KAUSHLEDRA TIWARI</span>
          </div>
          <FaSignOutAlt className="text-xl text-red-500 cursor-pointer hover:text-red-700" />
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="p-6">
        {/* Top Card Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <Card title="NOTICE" color="bg-blue-700" />
          <Card title="My Attendance" color="bg-blue-400" />
          <Card title="My Profile" color="bg-gray-500" />
          <Card title="Leave Apply" color="bg-red-500" />
        </div>

        {/* Schedule Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">My Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScheduleCard title="Today’s Lecture" locked={true} />
            <ScheduleCard title="Schedule Lecture" locked={false} />
          </div>
        </section>
      </main>
    </div>
  );
};

const Card = ({ title, color }) => (
  <div className={`p-6 rounded-lg text-white ${color} flex items-center justify-center shadow-md hover:shadow-lg transition`}> 
    <h3 className="text-lg font-semibold">{title}</h3>
  </div>
);

const ScheduleCard = ({ title, locked }) => (
  <div className="bg-gray-100 p-4 rounded-lg shadow">
    <div className="flex justify-between items-center border-b pb-2 mb-3">
      <h3 className="text-md font-medium">{title}</h3>
      {locked && <span className="text-red-500">🔒</span>}
    </div>
    <p className="text-sm text-gray-600">Artificial Intelligence ~ 9:20 to 10:10 AM</p>
    <p className="text-sm text-gray-600">Web Development-II ~ 11:00 to 12:40 PM</p>
  </div>
);

export default Dashboard;
