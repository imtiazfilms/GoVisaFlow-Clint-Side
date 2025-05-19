import { Outlet } from "react-router-dom";
import DashboardNavbar from "../Components/DashboardNavbar";
import DashboardSidebar from "../Components/DashboardSidebar";
import { useState } from "react";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle sidebar open/close
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex">
      <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={`flex-1 ${sidebarOpen ? 'ml-64' : ''} transition-all duration-300`}>
        <DashboardNavbar toggleSidebar={toggleSidebar} />
        <div className="p-6 mt-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
