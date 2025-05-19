import { Link, NavLink } from "react-router-dom";
import { auth } from "../Firebase/firebase.config";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For profile dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false); // For mobile nav

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsMenuOpen(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleNavClick = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="bg-base-100 shadow-md fixed top-0 z-50 w-full">
      <div className="navbar container mx-auto">
        <div className="navbar-start flex justify-between items-center w-full">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {dropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/" onClick={handleNavClick}>
                    <a className="hover:text-primary">Home</a>
                  </Link>
                </li>
                <li>
                  <Link to="/allVisa" onClick={handleNavClick}>
                    <a className="hover:text-primary">All Visas</a>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={handleNavClick}>
                    <a className="hover:text-primary">Contact</a>
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <img
              className="h-12 w-12 rounded-full"
              src="https://i.ibb.co/crcR0X1/DALL-E-2024-12-05-21-26-00-A-modern-and-minimalistic-SVG-icon-for-a-visa-navigator-website-named-Go.webp"
              alt="GoVisaFlow Logo"
            />
            <a className="text-sm font-extrabold">GoVisaFlow</a>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4 font-semibold text-base">
            <li>
              <Link to="/">
                <a className="hover:text-primary">Home</a>
              </Link>
            </li>
            <li>
              <Link to="/allVisa">
                <a className="hover:text-primary">All Visas</a>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <a className="hover:text-primary">Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end space-x-3">
          {!user ? (
            <>
              <Link to="/login">
                <a className="btn btn-sm outline w-24">Sign In</a>
              </Link>
            </>
          ) : (
            <div className="relative">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <img
                  className="h-10 w-10 rounded-full"
                  src={user.photoURL || "https://i.ibb.co/LdpFsnV/icons8-user-avatar-94.png"}
                  alt="User"
                />
              </div>

              {isMenuOpen && (
                <div className="absolute top-12 right-0 bg-white p-3 rounded-lg shadow-lg w-40 z-10 space-y-2">
                  <NavLink
                    className="text-black hover:text-teal-500 transition-colors duration-200"
                    to="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </NavLink>
                  <p className="text-sm font-semibold text-black">
                    {user.displayName || "User"}
                  </p>
                  <button
                    className="mt-2 text-red-500 text-sm"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
