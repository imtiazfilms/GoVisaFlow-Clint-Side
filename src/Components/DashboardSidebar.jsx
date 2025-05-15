import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

const DashboardSidebar = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <aside className="w-64 h-screen bg-base-200 p-4 shadow-lg fixed">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>

      <nav className="flex flex-col space-y-3">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-base-content hover:text-blue-500"
          }
        >
         🙎‍♂️ Profile
        </NavLink>
         <NavLink
          to="/dashboard/overView"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-base-content hover:text-blue-500"
          }
        >
          🎯 OverView
        </NavLink>
        <NavLink
          to="/dashboard/addVisa"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-base-content hover:text-blue-500"
          }
        >
          ➕ Add Visa
        </NavLink>

        <NavLink
          to="/dashboard/myAddedVisas"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-base-content hover:text-blue-500"
          }
        >
          📄 My Added Visa
        </NavLink>

        <NavLink
          to="/dashboard/myVisaApplications"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-base-content hover:text-blue-500"
          }
        >
          🧾 My Visa Applications
        </NavLink>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
