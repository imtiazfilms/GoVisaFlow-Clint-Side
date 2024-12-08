import { Link } from "react-router-dom";
import { auth } from "../Firebase/firebase.config"; // Import Firebase auth
import { signOut } from "firebase/auth"; // Import signOut method from Firebase
import { useState, useEffect } from "react"; // Import useState and useEffect hooks

const Navbar = () => {
  const [user, setUser] = useState(null); // State to hold user data
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the menu toggle

  // Effect to check if the user is logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Set the user data if logged in
    });

    return () => unsubscribe(); // Clean up the subscription on component unmount
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      setUser(null); // Clear the user state after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="bg-base-100 shadow-md">
      <div className="navbar container mx-auto">
        <div className="navbar-start flex justify-between items-center w-full">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><a>Home</a></li>
              <li><a>All Visas</a></li>
              <li><a>Add Visa</a></li>
              <li><a>My Added Visas</a></li>
              <li><a>My Visa Applications</a></li>
            </ul>
          </div>
          <div className="flex items-center space-x-2">
            <img
              className="h-12 w-12 rounded-full"
              src="https://i.ibb.co/crcR0X1/DALL-E-2024-12-05-21-26-00-A-modern-and-minimalistic-SVG-icon-for-a-visa-navigator-website-named-Go.webp"
              alt="GoVisaFlow Logo"
            />
            <a className="text-2xl font-extrabold">GoVisaFlow</a>
          </div>
        </div>

        {/* Navbar center (hidden on smaller screens) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4 font-semibold text-base">
            <li>
              <Link to={"/"}>
                <a className="hover:text-primary">Home</a>
              </Link>
            </li>
            <Link to={"/allVisa"}>
              <li><a className="hover:text-primary">All Visas</a></li>
            </Link>
            <Link to={"/addVisa"}>
              <li><a className="hover:text-primary">Add Visa</a></li>
            </Link>
            <li><a className="hover:text-primary">My Added Visas</a></li>
            <Link to={"/myVisaApplications"}>
              <li><a className="hover:text-primary">My Visa Applications</a></li>
            </Link>
          </ul>
        </div>

        {/* Navbar end section */}
        <div className="navbar-end space-x-3">
          {/* If the user is not logged in, show Sign In and Register buttons */}
          {!user ? (
            <>
              <Link to={"/login"}>
                <a className="btn">Sign In</a>
              </Link>
              <Link to={"/register"}>
                <a className="btn">Register</a>
              </Link>
            </>
          ) : (
            // If the user is logged in, show the user's photo, name on click, and logout option
            <div className="relative">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu on click
              >
                <img
                  className="h-10 w-10 rounded-full"
                  src={user.photoURL || "https://via.placeholder.com/150"}
                  alt="User"
                />
              </div>

              {/* Dropdown menu with user's display name and logout button */}
              {isMenuOpen && (
                <div className="absolute top-12 right-0 bg-white p-3 rounded-lg shadow-lg w-40 z-10">
                  <p className="text-sm font-semibold">{user.displayName || "User"}</p>
                  <button
                    className="mt-2 text-red-500 text-sm"
                    onClick={handleLogout} // Handle logout when the button is clicked
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
