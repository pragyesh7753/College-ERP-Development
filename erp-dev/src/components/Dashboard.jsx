import { useState } from 'react';
import Sidebar from './SideBar';
import StudentForm from './StudentForm';
import FacultyForm from './FacultyForm';
import { UserPlus, GraduationCap, Bell, User, Search } from 'lucide-react';

function Dashboard() {
    const [showStudentForm, setShowStudentForm] = useState(false);
    const [showFacultyForm, setShowFacultyForm] = useState(false);
    const [notifications, setNotifications] = useState([
        { id: 1, text: "New student registration", unread: true },
        { id: 2, text: "Faculty meeting at 2 PM", unread: true },
        { id: 3, text: "System maintenance tonight", unread: false },
    ]);
    const [showNotifications, setShowNotifications] = useState(false);

    const markAsRead = (id) => {
        setNotifications(notifications.map(n =>
            n.id === id ? { ...n, unread: false } : n
        ));
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <div className="flex-1">
                <header className="bg-white shadow-lg p-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-[#FF4B2B]">Hello Admin</h1>
                        <div className="flex-1 mx-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF4B2B] transition-all"
                                />
                                <Search className="absolute right-4 top-3 text-gray-400 w-5 h-5" />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <button
                                    className="p-2 hover:bg-gray-100 rounded-full relative"
                                    onClick={() => setShowNotifications(!showNotifications)}
                                >
                                    <Bell className="w-6 h-6 text-[#FF4B2B]" />
                                    {notifications.some(n => n.unread) && (
                                        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
                                    )}
                                </button>
                                {showNotifications && (
                                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50">
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold mb-2">Notifications</h3>
                                            <div className="space-y-2">
                                                {notifications.map(notification => (
                                                    <div
                                                        key={notification.id}
                                                        className={`p-3 rounded-lg cursor-pointer transition-all ${notification.unread
                                                            ? 'bg-orange-50 hover:bg-orange-100'
                                                            : 'bg-gray-50 hover:bg-gray-100'
                                                            }`}
                                                        onClick={() => markAsRead(notification.id)}
                                                    >
                                                        <p className="text-sm">{notification.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <button className="p-2 hover:bg-gray-100 rounded-full">
                                <User className="w-6 h-6 text-[#FF8C42]" />
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-end space-x-4">
                        <button
                            onClick={() => setShowStudentForm(true)}
                            className="px-4 py-2 bg-[#FF4B2B] text-white rounded-lg hover:bg-[#FF4B2B]/90 transition-all duration-300 flex items-center space-x-2"
                        >
                            <UserPlus className="w-4 h-4" />
                            <span>Add Student</span>
                        </button>
                        <button
                            onClick={() => setShowFacultyForm(true)}
                            className="px-4 py-2 bg-[#FF8C42] text-white rounded-lg hover:bg-[#FF8C42]/90 transition-all duration-300 flex items-center space-x-2"
                        >
                            <GraduationCap className="w-4 h-4" />
                            <span>Add Faculty</span>
                        </button>
                    </div>
                </header>

                <main className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold mb-2">Total Students</h3>
                                <span className="text-xs text-green-500 bg-green-100 px-2 py-1 rounded-full">+12% ↑</span>
                            </div>
                            <p className="text-4xl font-bold text-[#FF4B2B]">1,234</p>
                            <p className="text-sm text-gray-500 mt-2">Across all departments</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold mb-2">Total Faculty</h3>
                                <span className="text-xs text-blue-500 bg-blue-100 px-2 py-1 rounded-full">+5% ↑</span>
                            </div>
                            <p className="text-4xl font-bold text-[#FF8C42]">89</p>
                            <p className="text-sm text-gray-500 mt-2">Full-time & visiting</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold mb-2">Active Courses</h3>
                                <span className="text-xs text-purple-500 bg-purple-100 px-2 py-1 rounded-full">New</span>
                            </div>
                            <p className="text-4xl font-bold text-[#FF4B2B]">24</p>
                            <p className="text-sm text-gray-500 mt-2">Current semester</p>
                        </div>
                    </div>

                    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Upcoming Schedule</h2>
                            <button className="text-sm text-[#FF4B2B] hover:text-[#FF8C42] transition-colors">
                                View All →
                            </button>
                        </div>
                        <div className="space-y-4">
                            {[
                                {
                                    title: "Faculty Meeting",
                                    dept: "Department of Computer Science",
                                    time: "09:00 AM",
                                    date: "March 15, 2024",
                                    status: "Upcoming"
                                },
                                {
                                    title: "Student Orientation",
                                    dept: "Main Auditorium",
                                    time: "11:30 AM",
                                    date: "March 15, 2024",
                                    status: "In Progress"
                                },
                                {
                                    title: "Board Meeting",
                                    dept: "Conference Room",
                                    time: "02:00 PM",
                                    date: "March 15, 2024",
                                    status: "Pending"
                                }
                            ].map((event, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                                >
                                    <div>
                                        <h4 className="font-semibold">{event.title}</h4>
                                        <p className="text-sm text-gray-600">{event.dept}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-[#FF4B2B]">{event.time}</p>
                                        <p className="text-sm text-gray-600">{event.date}</p>
                                        <span className={`text-xs px-2 py-1 rounded-full ${event.status === 'Upcoming' ? 'bg-yellow-100 text-yellow-700' :
                                            event.status === 'In Progress' ? 'bg-green-100 text-green-700' :
                                                'bg-gray-100 text-gray-700'
                                            }`}>
                                            {event.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>

            {showStudentForm && <StudentForm onClose={() => setShowStudentForm(false)} />}
            {showFacultyForm && <FacultyForm onClose={() => setShowFacultyForm(false)} />}
        </div>
    );
}

export default Dashboard;