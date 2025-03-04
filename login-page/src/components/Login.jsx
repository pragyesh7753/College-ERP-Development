import React, { useState } from "react";
import { CircleUserRound, KeyRound } from "lucide-react";

function Login({ onForgotPassword }) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="w-full max-w-md px-6">
                <div className="space-y-4">
                    <div className="relative">
                        <CircleUserRound className="absolute left-4 top-1/2 transform -translate-y-1/2  w-5 h-5" />
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-gray-200 focus:border-yellow-500 focus:ring-2 focus: ring-yellow-100 outline-none transition-all"
                        />
                    </div>
                    <div className="relative">
                        <KeyRound className="absolute left-4 top-1/2 transform -translate-y-1/2  w-5 h-5" />
                        <input type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 outline-none transition-all"
                        />
                    </div>
                    <div className="relative">
                        <button
                            type="submit"
                            className="w-full bg-red-800 text-white py-3 rounded-full hover:bg-amber-700 active:bg-amber-700 font-bold cursor-pointer">
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login;