/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../Components/AuthProvider";

const Register = () => {
    const { handelReg, manageProfile, handelGoogleLogin } = useContext(authContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();
        setError("");
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError(
                "Password must be at least 6 characters with one uppercase and one lowercase letter."
            );
            return;
        }

        handelReg(email, password)
            .then((res) => {
                manageProfile(name, image);
                navigate("/");
            })
            .catch((err) => {
                if (err.code === "auth/email-already-in-use") {
                    setError("A user already exists with this email address.");
                } else {
                    setError("Registration failed. Please try again.");
                }
            });
    };

    const googleLogin = () => {
        handelGoogleLogin()
            .then((res) => {
                navigate("/");
            })
            .catch(() => {
                setError("Google login failed. Please try again.");
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="w-full max-w-3xl bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-semibold text-center text-teal-400 mb-6">
                    Register to Visa Navigator
                </h2>
                <form onSubmit={handelSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-teal-300 font-medium">Full Name</label>
                            <input
                                required
                                name="name"
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full px-4 py-2 mt-2 bg-gray-700 border border-gray-600 rounded-md text-teal-200 placeholder-gray-400 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="text-teal-300 font-medium">Email Address</label>
                            <input
                                required
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 mt-2 bg-gray-700 border border-gray-600 rounded-md text-teal-200 placeholder-gray-400 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="text-teal-300 font-medium">Profile Photo URL</label>
                            <input
                                required
                                name="image"
                                type="text"
                                placeholder="Enter your profile photo URL"
                                className="w-full px-4 py-2 mt-2 bg-gray-700 border border-gray-600 rounded-md text-teal-200 placeholder-gray-400 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="text-teal-300 font-medium">Password</label>
                            <input
                                required
                                name="password"
                                type="password"
                                placeholder="Create a secure password"
                                className="w-full px-4 py-2 mt-2 bg-gray-700 border border-gray-600 rounded-md text-teal-200 placeholder-gray-400 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                            />
                        </div>
                    </div>
                    {error && (
                        <p className="mt-4 text-center text-red-400 bg-red-900/20 p-2 rounded-md">
                            {error}
                        </p>
                    )}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
                        <button
                            onClick={googleLogin}
                            type="button"
                            className="flex items-center justify-center gap-2 px-6 py-2 bg-teal-500 text-gray-900 rounded-md hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 w-full md:w-auto"
                        >
                            <img
                                src="https://i.ibb.co/TT2QXQ0/icons8-google-logo-94.png"
                                alt="Google Logo"
                                className="w-6 h-6"
                            />
                            Sign in with Google
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-teal-600 text-gray-900 rounded-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 w-full md:w-auto"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <div className="mt-6 text-center text-teal-300">
                    Already have an account?{" "}
                    <Link to="/login" className="text-teal-400 hover:underline">
                        Login here
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
