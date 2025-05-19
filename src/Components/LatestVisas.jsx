/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LatestVisas = () => {
  const [visas, setVisas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLatestVisas = async () => {
      try {
        const response = await axios.get("https://go-visa-flow-server-side.vercel.app/visas");
        setVisas(response.data.slice(0, 6));
      } catch (error) {
        console.error("Error fetching visas:", error);
      }
    };

    fetchLatestVisas();
  }, []);

  return (
    <div className="w-[95%] mx-auto my-16">
      <h2 className="text-4xl font-bold text-center text-base-content mb-10">
        ✈️ Latest Visa Opportunities
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visas.map((visa, index) => (
          <div
            key={visa._id}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
          >
            <img
              src={visa.countryImage}
              alt={`${visa.country} flag`}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-blue-700 mb-1">{visa.country}</h3>
              <p className="text-sm text-gray-600 italic mb-2">{visa.visaType}</p>

              <ul className="text-gray-700 text-sm space-y-1">
                <li><strong>🕒 Processing:</strong> {visa.processingTime}</li>
                <li><strong>💵 Fee:</strong> ${visa.fee}</li>
                <li><strong>📅 Validity:</strong> {visa.validity}</li>
                <li><strong>📌 Method:</strong> {visa.applicationMethod}</li>
              </ul>

              <button
                onClick={() => navigate(`/visaDetails/${visa._id}`)}
                className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-300"
              >
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/allVisa")}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300"
        >
          See All Visas
        </button>
      </div>
    </div>
  );
};

export default LatestVisas;
