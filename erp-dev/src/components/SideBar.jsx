import { useState } from 'react';
import { GraduationCap, Users, School, Calendar, BookOpen, Settings, BarChart, SquareChevronLeft, SquareChevronRight } from 'lucide-react';
import { NavLink } from 'react-router';

export default function SideBar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeItem, setActiveItem] = useState('Dashboard');

    const menuItems = [
        { icon: BarChart, text: 'Dashboard', path: '/' },
        { icon: Users, text: 'Students', path: '/students' },
        { icon: School, text: 'Faculty', path: '/faculty' },
        { icon: Calendar, text: 'Schedule', path: '/schedule' },
        { icon: BookOpen, text: 'Courses', path: '/courses'},
        { icon: Settings, text: 'Settings', path: '/settings'},
    ];

    return (
        <div className={`bg-gradient-to-br from-[#FF4B2B] via-[#FF6B3D] to-[#FF8C42] min-h-screen transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} relative group`}>
            <div className="flex items-center p-4">
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                    {isCollapsed ? (
                        <SquareChevronRight className="w-6 h-6 text-white" />
                    ) : (
                        <SquareChevronLeft className="w-6 h-6 text-white" />
                    )}
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
                    <div key={index} className="relative group/item mb-2">
                        <NavLink
                            to={item.path}
                            onClick={() => setActiveItem(item.text)}
                            className={`w-full flex items-center p-3 rounded-lg transition-all duration-200
                                ${activeItem === item.text
                                    ? 'bg-white/20 text-white'
                                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            <item.icon className={`w-6 h-6 ${isCollapsed ? 'mx-auto' : ''}`} />
                            {!isCollapsed && <span className="ml-3">{item.text}</span>}
                        </NavLink>
                        
                        {/* Enhanced dynamic underline */}
                        {!isCollapsed && (
                            <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
                                <div 
                                    className={`h-full bg-white transition-transform duration-300 ease-out
                                        ${activeItem === item.text 
                                            ? 'translate-x-0' 
                                            : '-translate-x-full group-hover/item:translate-x-0'
                                        }`}
                                ></div>
                            </div>
                        )}
                    </div>
                ))}
            </nav>

            {isCollapsed && (
                <div className="absolute top-0 left-full ml-2 bg-white p-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <span className="text-gray-800 font-medium">Admin Panel</span>
                </div>
            )}

        </div>
    );
}