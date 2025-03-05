import React, { useState } from "react";
import { Mail } from "lucide-react";

function ForgotPassword({ onBack }) {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Password reset requested for:", email)
    }

    return (
        <div className="w-full max-w-md px-6">
            <h2 className="text-2xl font-semibold text-center mb-4">Reset Password</h2>
            <p className="text-rose-800 text-center mb-8">Enter your email address and we'll send you instructions to reset your password</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                    <input
                        type="email"
                        name="username"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-gray-200 focus:border-yellow-500 focus:ring-2 focus: ring-yellow-100 outline-none transition-all"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="relative w-full py-3 rounded-full bg-yellow-500 text-white font-semibold transition-all hover:bg-yellow-600 mt-2 cursor-pointer">
                    Send Reset Instructions
                </button>
                <button
                    type="button"
                    onClick={onBack}
                    className="relative w-full py-3 rounded-full bg-yellow-500 text-white font-semibold transition-all hover:bg-yellow-600 mt-0.5 cursor-pointer">
                    Back to Login
                </button>
            </form>
        </div>
    )
}

export default ForgotPassword;