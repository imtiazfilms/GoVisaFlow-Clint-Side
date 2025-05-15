import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import axios from "axios";
import Loader from "./Loader";

const DashboardOverview = () => {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const userEmail = currentUser ? currentUser.email : null;

  const [addedCount, setAddedCount] = useState(null);
  const [appliedCount, setAppliedCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userEmail) return;

    const fetchCounts = async () => {
      try {
        const [addedRes, appliedRes] = await Promise.all([
          axios.get(`https://go-visa-flow-server-side.vercel.app/addedVisasCount?email=${userEmail}`),
          axios.get(`https://go-visa-flow-server-side.vercel.app/appliedVisasCount?email=${userEmail}`),
        ]);

        setAddedCount(addedRes.data.count);
        setAppliedCount(appliedRes.data.count);
      } catch (error) {
        console.error("Error fetching counts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, [userEmail]);

  if (!userEmail) {
    return <p>Please log in to see your dashboard overview.</p>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="mx-auto w-full max-w-5xl">
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

      <table className="min-w-full border border-gray-300 rounded-md">
        <thead>
          <tr className="bg-base-content/10">
            <th className="py-3 px-6 border-b border-gray-300 text-left">Metric</th>
            <th className="py-3 px-6 border-b border-gray-300 text-left">Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 px-6 border-b border-gray-300">Visas Added</td>
            <td className="py-3 px-6 border-b border-gray-300">{addedCount}</td>
          </tr>
          <tr>
            <td className="py-3 px-6 border-b border-gray-300">Visas Applied</td>
            <td className="py-3 px-6 border-b border-gray-300">{appliedCount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashboardOverview;
