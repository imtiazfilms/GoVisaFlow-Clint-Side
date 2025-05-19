/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

const DashboardSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-base-200 p-4 shadow-lg
          w-64
          transform
          md:translate-x-0
          transition-transform duration-300 ease-in-out
          z-50
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
      >
        {/* Close button only on mobile */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="md:hidden mb-6 p-2 rounded bg-red-600 text-white"
          aria-label="Close sidebar"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-6">Dashboard</h2>

        <nav className="flex flex-col space-y-3">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-base-content hover:text-blue-500"
            }
            onClick={() => setSidebarOpen(false)} // close sidebar on link click (mobile)
          >
            🙎‍♂️ Profile
          </NavLink>
          <NavLink
            to="/dashboard/overView"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-base-content hover:text-blue-500"
            }
            onClick={() => setSidebarOpen(false)}
          >
            🎯 OverView
          </NavLink>
          <NavLink
            to="/dashboard/addVisa"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-base-content hover:text-blue-500"
            }
            onClick={() => setSidebarOpen(false)}
          >
            ➕ Add Visa
          </NavLink>
          <NavLink
            to="/dashboard/myAddedVisas"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-base-content hover:text-blue-500"
            }
            onClick={() => setSidebarOpen(false)}
          >
            📄 My Added Visa
          </NavLink>
          <NavLink
            to="/dashboard/myVisaApplications"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-base-content hover:text-blue-500"
            }
            onClick={() => setSidebarOpen(false)}
          >
            🧾 My Visa Applications
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default DashboardSidebar;
