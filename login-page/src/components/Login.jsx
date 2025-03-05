import React, { useRef, useState } from "react";
import { CircleUserRound, KeyRound, Eye, EyeOff } from "lucide-react";

function Login({ onForgotPassword }) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false)
    const passwordRef = useRef(null)
    const iconRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
        passwordRef.current.type = showPassword ? "password" : "text"
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
                            required
                        />
                    </div>
                    <div className="relative">
                        <KeyRound className="absolute left-4 top-1/2 transform -translate-y-1/2  w-5 h-5" />
                        <input type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            ref={iconRef}
                            className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 outline-none transition-all"
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer focus:outline-none"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <EyeOff /> : <Eye />}
                        </button>
                    </div>
                    <div className="relative">
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white py-3 rounded-full hover:bg-yellow-600 active:bg-yellow-600 font-bold transition-colors cursor-pointer">
                            Login
                        </button>
                    </div>
                </div>
            </form>

            <div className="mt-6">
                <button
                    onClick={onForgotPassword}
                    className="relative text-sm text-red-700 hover:text-amber-700 font-bold transition-colors cursor-pointer ml-4.5">
                    Forgot Password?
                </button>
            </div>
        </>
    )
}

export default Login;