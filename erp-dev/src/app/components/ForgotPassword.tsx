import { useState, useRef } from "react"
import { Mail } from "lucide-react"
import PropTypes from 'prop-types'
import Image from 'next/image'

function ForgotPassword({ onBack = () => { } }) {
    const [email, setEmail] = useState("")
    const [isFocused, setIsFocused] = useState(false)
    const emailRef = useRef(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Password reset requested for:", email)
    }

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = () => {
        setIsFocused(false)
    }

    return (
      <>
        <div className="w-full max-w-md px-6">
            
            <h2 className="text-2xl font-semibold text-center mb-4">Reset Password</h2>
            <p className="text-rose-800 text-center mb-8">
            Please enter your email address, and we will send you instructions to reset your password.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black z-10" />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        ref={emailRef}
                        className="w-full pl-12 pr-4 py-3 rounded-full bg-white border-2 border-gray-200 focus:border-b-yellow-500 focus:ring-2 focus:ring-yellow-100 outline-none transition-all"
                        required
                    />
                    <label
                        htmlFor="email"
                        className={`absolute transition-all duration-350  pointer-events-none ${isFocused || email
                            ? "text-xs -top-2 tracking-[0.1rem] left-6  px-2 text-yellow-500"
                            : "text-gray-500 top-1/2 left-12 transform -translate-y-1/2"
                        }`}
                    >
                        Email Address
                    </label>
                </div>
                <button
                    type="submit"
                    className="relative hover:-translate-y-1 w-full py-3 rounded-full bg-yellow-500 text-white font-semibold transition-all hover:bg-yellow-600 mt-2 cursor-pointer active:shadow-lg active:transform active:translate-y-0.5"
                >
                    Send Reset Instructions
                </button>
                <button
                    type="button"
                    onClick={onBack}
                    className="relative w-full hover:-translate-y-1 py-3 rounded-full bg-yellow-500 text-white font-semibold transition-all hover:bg-yellow-600 mt-0.5 cursor-pointer active:shadow-lg active:transform active:translate-y-0.5"
                >
                    Back to Login
                </button>
            </form>
            
            

    
        </div>

  <div className="  transition-transform duration-500 img-2 ">
    <Image 
      src="/assets/logo-nav.png" 
      alt="logo" 
      width={500} 
      height={300}
      priority
    />
  </div>
</>
    )
}
ForgotPassword.propTypes = {
  onBack: PropTypes.func
}

export default ForgotPassword

