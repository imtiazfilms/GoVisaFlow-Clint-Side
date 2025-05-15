import { Outlet } from "react-router-dom";
import DashboardNavbar from "../Components/DashboardNavbar";
import DashboardSidebar from "../Components/DashboardSidebar";



const DashboardLayout = () => {
  return (
    <div className="flex">
      <DashboardSidebar></DashboardSidebar>
      <div className="flex-1 ml-64">
        <DashboardNavbar></DashboardNavbar>
        <div className="p-6 mt-16">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
