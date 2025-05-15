/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const VisaStatsChart = ({ userEmail }) => {
  const [addedCount, setAddedCount] = useState(0);
  const [appliedCount, setAppliedCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userEmail) return;

    const fetchData = async () => {
      try {
        const [addedRes, appliedRes] = await Promise.all([
          axios.get(`https://your-backend-url/addedVisasCount?email=${encodeURIComponent(userEmail)}`),
          axios.get(`https://your-backend-url/appliedVisasCount?email=${encodeURIComponent(userEmail)}`),
        ]);

        setAddedCount(addedRes.data.count);
        setAppliedCount(appliedRes.data.count);
      } catch (error) {
        console.error("Error fetching visa stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userEmail]);

  if (loading) return <p>Loading chart...</p>;

  const data = {
    labels: ["Added Visas", "Applied Visas"],
    datasets: [
      {
        label: "Count",
        data: [addedCount, appliedCount],
        backgroundColor: ["#3b82f6", "#10b981"], // Blue and green bars
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Visa Statistics Overview",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default VisaStatsChart;
