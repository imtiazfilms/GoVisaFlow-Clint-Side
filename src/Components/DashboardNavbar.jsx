import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const DashboardNavbar = () => {
  return (
    <div className="bg-base-100 px-4">
      <div className="navbar">
        {/* Logo and Name */}
        <div className="navbar-start flex items-center space-x-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://i.ibb.co/crcR0X1/DALL-E-2024-12-05-21-26-00-A-modern-and-minimalistic-SVG-icon-for-a-visa-navigator-website-named-Go.webp"
            alt="GoVisaFlow Logo"
          />
          <span className="text-xl font-bold">GoVisaFlow</span>
        </div>

        {/* Center: Home Button */}
        <div className="navbar-center">
          <Link to="/" className="btn btn-sm btn-outline">
            Home
          </Link>
        </div>

        {/* Right: Theme Toggle */}
        <div className="navbar-end">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
