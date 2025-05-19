/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const DashboardNavbar = ({ toggleSidebar }) => {
  return (
    <div className="bg-base-100 px-4 shadow-sm">
      <div className="navbar container mx-auto flex items-center justify-between">
        {/* Hamburger button for mobile */}
        <button
          className="btn btn-square btn-ghost md:hidden mr-2"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Logo and Name */}
        <div className="navbar-start flex items-center space-x-2 min-w-[180px]">
          <img
            className="h-10 w-10 rounded-full"
            src="https://i.ibb.co/crcR0X1/DALL-E-2024-12-05-21-26-00-A-modern-and-minimalistic-SVG-icon-for-a-visa-navigator-website-named-Go.webp"
            alt="GoVisaFlow Logo"
          />
          <span className="text-xl font-bold whitespace-nowrap">GoVisaFlow</span>
        </div>

        {/* Center: Home Button */}
        <div className="navbar-center flex-1 flex justify-center">
          <Link to="/" className="btn btn-sm btn-outline whitespace-nowrap">
            Home
          </Link>
        </div>

        {/* Right: Theme Toggle */}
        <div className="navbar-end min-w-[80px] flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
