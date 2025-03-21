import { useState } from 'react';
import { Menu, GraduationCap, Users, School, Calendar, BookOpen, Settings, BarChart } from 'lucide-react';

export default function SideBar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeItem, setActiveItem] = useState('Dashboard');

    const menuItems = [
        { icon: BarChart, text: 'Dashboard' },
        { icon: Users, text: 'Students' },
        { icon: School, text: 'Faculty' },
        { icon: Calendar, text: 'Schedule' },
        { icon: BookOpen, text: 'Courses' },
        { icon: Settings, text: 'Settings' },
    ];

    return (
        <div className={`bg-gradient-to-br from-[#FF4B2B] via-[#FF6B3D] to-[#FF8C42] min-h-screen transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} relative group`}>
            <div className="flex items-center p-4">
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                    <Menu className="w-6 h-6 text-white" />
                </button>
                {!isCollapsed && (
                    <div className="flex items-center ml-3">
                        <GraduationCap className="w-8 h-8 text-white" />
                        <span className="ml-2 text-white font-bold text-xl">Admin Panel</span>
                    </div>
                )}
            </div>

            <nav className="mt-8 px-2">
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveItem(item.text)}
                        className={`w-full flex items-center p-3 mb-2 rounded-lg transition-all duration-200 ${activeItem === item.text
                            ? 'bg-white/20 text-white'
                            : 'text-white/80 hover:bg-white/10 hover:text-white'
                            }`}
                    >
                        <item.icon className={`w-6 h-6 ${isCollapsed ? 'mx-auto' : ''}`} />
                        {!isCollapsed && <span className="ml-3">{item.text}</span>}
                    </button>
                ))}
            </nav>

            {isCollapsed && (
                <div className="absolute top-0 left-full ml-2 bg-white p-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <span className="text-gray-800 font-medium">EduAdmin Panel</span>
                </div>
            )}

            {!isCollapsed && (
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="bg-white/10 rounded-lg p-4">
                        <p className="text-white text-sm">System Status</p>
                        <div className="flex items-center mt-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="ml-2 text-white/80 text-sm">All systems operational</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}