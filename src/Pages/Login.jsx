/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../Components/AuthProvider";

const Login = () => {
    const { handelGoogleLogin, handelLogin } = useContext(authContext);
    const [error, setError] = useState("");
    const location = useLocation(); // Get the current location
    const navigate = useNavigate(); // Hook to navigate programmatically

    // Handle login form submission
    const handelSubmit = (e) => {
        e.preventDefault();
        setError("");

        const email = e.target.email.value;
        const password = e.target.password.value;

        handelLogin(email, password)
            .then((res) => {
                const redirectPath = location.state?.from?.pathname || "/"; // Get the redirect path from the location state, default to home
                navigate(redirectPath, { replace: true }); // Navigate to the intended page
            })
            .catch(() => {
                setError("Invalid email or password.");
            });
    };

    // Google login method
    const googleLogin = () => {
        handelGoogleLogin()
            .then((res) => {
                const redirectPath = location.state?.from?.pathname || "/"; // Get the redirect path from the location state, default to home
                navigate(redirectPath, { replace: true }); // Navigate to the intended page
            })
            .catch(() => {
                setError("Google login failed. Please try again.");
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
                <h5 className="text-3xl font-semibold text-center text-teal-400">
                    Login to Visa Navigator
                </h5>
                <form onSubmit={handelSubmit} className="mt-6 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-teal-300">
                            Your Email
                        </label>
                        <input
                            required
                            type="email"
                            name="email"
                            id="email"
                            className="mt-1 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-teal-200 placeholder-gray-400 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                            placeholder="name@domain.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-teal-300">
                            Your Password
                        </label>
                        <input
                            required
                            type="password"
                            name="password"
                            id="password"
                            className="mt-1 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-teal-200 placeholder-gray-400 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                            placeholder="••••••••"
                        />
                    </div>
                    {error && (
                        <p className="text-red-400 text-sm bg-red-900/20 p-2 rounded-md text-center">
                            {error}
                        </p>
                    )}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember"
                                type="checkbox"
                                className="w-4 h-4 text-teal-500 border-gray-600 rounded focus:ring-teal-400"
                            />
                            <label className="ml-2 text-sm text-teal-200">
                                Remember me
                            </label>
                        </div>
                        <Link
                            to="/forgot-password"
                            className="text-sm text-teal-400 hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2.5 bg-teal-600 text-gray-900 rounded-lg hover:bg-teal-500 focus:ring-4 focus:ring-teal-400"
                    >
                        Login to your account
                    </button>
                    <button
                        onClick={googleLogin}
                        type="button"
                        className="w-full flex items-center justify-center gap-2 py-2 bg-teal-500 text-gray-900 rounded-lg hover:bg-teal-400 focus:ring-4 focus:ring-teal-400"
                    >
                        <img
                            className="w-6 h-6"
                            src="https://i.ibb.co/TT2QXQ0/icons8-google-logo-94.png"
                            alt="Google Logo"
                        />
                        Sign in with Google
                    </button>
                    <div className="text-center text-sm text-teal-300">
                        Not registered?{" "}
                        <Link to="/register" className="text-teal-400 hover:underline">
                            Create an account
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
