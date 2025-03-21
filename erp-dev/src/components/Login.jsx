import { useRef, useState } from "react";
import { CircleUserRound, KeyRound, Eye, EyeOff } from "lucide-react";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

function Login({ setIsLoggedIn, onForgotPassword = () => { } }) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",

    });

    const [showPassword, setShowPassword] = useState(false);
    const [focusedField, setFocusedField] = useState(null);
    const passwordRef = useRef(null);
    const usernameRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": "sachinkumarq87@gmail.com",
            "password": "1234554",
            "role": "admin"
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://saitm-erp.onrender.com/api/v1/auth/login", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    toast.success('Successfully Logged in!', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                    setIsLoggedIn(true);
                } else {
                    console.log(result);
                    toast.success('Invalid credentials!', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                }
            })
            .catch((error) => console.error(error));
    };

    return (
        <>
            <div className="transition-transform duration-500 img-2">
                <img src="./src/assets/logo-nav.png" alt="logo" />
            </div>
            <div>
                <form onSubmit={handleSubmit} className="w-full max-w-md px-6">
                    <div className="space-y-4">
                        <div className="relative">
                            <CircleUserRound className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black z-10" />
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                onFocus={() => setFocusedField("username")}
                                onBlur={() => setFocusedField(null)}
                                ref={usernameRef}
                                className="w-full pl-12 pr-4 py-3 rounded-full bg-white border-2 border-gray-200 focus:border-b-yellow-500 focus:ring-2 focus:ring-yellow-100 outline-none transition-all"
                                required
                            />
                            <label
                                htmlFor="username"
                                className={`absolute transition-all duration-350 pointer-events-none ${focusedField === "username" || formData.username
                                        ? "text-xs -top-3 tracking-[0.1rem] left-6 px-2 text-yellow-500"
                                        : "text-gray-500 top-1/2 left-12 transform -translate-y-1/2"
                                    }`}
                            >
                                Username
                            </label>
                        </div>

                        <div className="relative">
                            <KeyRound className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black z-10" />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                onFocus={() => setFocusedField("password")}
                                onBlur={() => setFocusedField(null)}
                                ref={passwordRef}
                                className="w-full pl-12 pr-12 py-3 rounded-full bg-white border-2 border-gray-200 focus:border-b-yellow-500 focus:ring-2 focus:ring-yellow-100 outline-none transition-all"
                                required
                            />
                            <label
                                htmlFor="password"
                                className={`absolute transition-all duration-350 pointer-events-none ${focusedField === "password" || formData.password
                                        ? "text-xs -top-3 tracking-[0.1rem] left-6 px-2 text-yellow-500"
                                        : "text-gray-500 top-1/2 left-12 transform -translate-y-1/2"
                                    }`}
                            >
                                Password
                            </label>
                            <button
                                type="button"
                                className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer focus:outline-none"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff className="text-black" /> : <Eye className="text-black" />}
                            </button>
                        </div>

                        <div className="relative mt-6">
                            <button
                                type="submit"
                                className="w-full bg-yellow-500 hover:-translate-y-1 text-white py-3 rounded-full hover:bg-yellow-600 active:bg-yellow-600 font-bold transition-all cursor-pointer active:shadow-lg active:transform active:translate-y-0.5"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </form>

                <div className="mt-6">
                    <button
                        onClick={onForgotPassword}
                        className="relative hover:underline text-sm text-red-700 hover:text-amber-700 font-bold transition-colors cursor-pointer ml-4.5"
                    >
                        Forgot Password?
                    </button>
                </div>
            </div>
        </>
    );
}
Login.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
    onForgotPassword: PropTypes.func
};

export default Login;
