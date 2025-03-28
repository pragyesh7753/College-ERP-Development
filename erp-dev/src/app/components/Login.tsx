import { useRef, useState, FormEvent , ChangeEvent } from "react";
import { CircleUserRound, KeyRound, Eye, EyeOff } from "lucide-react";
import { RingLoader } from "react-spinners";
import PropTypes from 'prop-types';
import { toast, Bounce } from "react-toastify";
import { AuthApi } from "../../pages/api/AuthApi";
import Image from "next/image";

interface LoginProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  onForgotPassword?: () => void;
}

interface FormData {
  email: string;
  password: string;
  role: string;
}

interface ApiResponse {
  code: number;
  error: boolean;
  data?: {
    data: {
      accessToken: string;
    }
    message?: string;
  };
}

function Login({ setIsLoggedIn, onForgotPassword = () => { } }: LoginProps) {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
        role: "admin"
    });

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response: ApiResponse = await AuthApi.login(formData);
            console.log(response)
            if (response.code === 200 && !response.error) {
                setIsLoggedIn(true);
                document.cookie =`accessToken=${response.data?.data.accessToken}; path=/`;
                toast.success("Logged in successfully", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    transition: Bounce
                });
            }
            else {
                toast.error(response.data?.message || "Login failed", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    transition: Bounce
                });
            }

        } catch (error) {
            console.log(error)
        }
        finally{
            setIsLoading(false);
        }
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFocus = (field: string) => {
        setFocusedField(field);
    };

    const handleBlur = () => {
        setFocusedField(null);
    };

    return (
        <>
            <div className="transition-transform duration-500 img-2">
                <Image 
                    src="/assets/logo-nav.png" 
                    alt="logo" 
                    width={150} 
                    height={50}
                    priority
                />
            </div>
            <div>
                <form onSubmit={handleSubmit} className="w-full max-w-md px-6">
                    <div className="space-y-4">
                        <div className="relative">
                            <CircleUserRound className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black z-10" />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                onFocus={() => handleFocus("email")}
                                onBlur={handleBlur}
                                ref={emailRef}
                                className="w-full pl-12 pr-4 py-3 rounded-full bg-white border-2 border-gray-200 focus:border-b-yellow-500 focus:ring-2 focus:ring-yellow-100 outline-none transition-all"
                                required
                            />
                            <label
                                htmlFor="email"
                                className={`absolute transition-all duration-350 pointer-events-none ${focusedField === "email" || formData.email
                                    ? "text-xs -top-3 tracking-[0.1rem] left-6 px-2 text-yellow-500"
                                    : "text-gray-500 top-1/2 left-12 transform -translate-y-1/2"
                                    }`}
                            >
                                Email
                            </label>
                        </div>

                        <div className="relative">
                            <KeyRound className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black z-10" />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                onFocus={() => handleFocus("password")}
                                onBlur={handleBlur}
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
                                disabled={isLoading}
                                className={`w-full bg-yellow-500 hover:-translate-y-1 text-white py-3 rounded-full hover:bg-yellow-600 active:bg-yellow-600 font-bold transition-all cursor-pointer active:shadow-lg active:transform active:translate-y-0.5 ${isLoading ? 'opacity-90' : ''}`}
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center">
                                        <RingLoader
                                            color="#ffffff"
                                            size={30}
                                        />
                                        <span>&nbsp;Logging in...</span>
                                    </div>
                                ) : (
                                    "Login"
                                )}
                            </button>
                        </div>
                    </div>
                </form>

                <div className="mt-6">
                    <button
                        onClick={onForgotPassword}
                        className="relative hover:underline text-sm text-red-700 hover:text-amber-700 font-bold transition-colors cursor-pointer"
                    >
                        Forgot Password?
                    </button>
                </div>
            </div>
        </>
    );
}

// PropTypes can be kept for backward compatibility
Login.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
    onForgotPassword: PropTypes.func
};

export default Login;
