import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LatestVisas = () => {
  const [visas, setVisas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLatestVisas = async () => {
      try {
        const response = await axios.get("http://localhost:5000/visas");
        setVisas(response.data.slice(0, 6)); 
      } catch (error) {
        console.error("Error fetching visas:", error);
      }
    };

    fetchLatestVisas();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Latest Visas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {visas.map((visa) => (
          <div
            key={visa._id}
            className={`${
              visa._id % 2 === 0 ? "bg-white" : "bg-gray-800"
            } shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow transform scale-95 hover:scale-100`}
          >
            <img
              src={visa.countryImage}
              alt={`${visa.country} flag`}
              className="w-full h-40 object-cover"
            />
            <div
              className={`${
                visa._id % 2 === 0 ? "text-gray-800" : "text-gray-200"
              } p-4`}
            >
              <h3 className="text-xl font-semibold">{visa.country}</h3>
              <p className="text-sm">{visa.visaType}</p>
              <p className="mt-2 text-sm">
                <strong>Processing Time:</strong> {visa.processingTime}
              </p>
              <p className="mt-2 text-sm">
                <strong>Fee:</strong> ${visa.fee}
              </p>
              <p className="mt-2 text-sm">
                <strong>Validity:</strong> {visa.validity}
              </p>
              <p className="mt-2 text-sm">
                <strong>Application Method:</strong> {visa.applicationMethod}
              </p>
              <button
                onClick={() => navigate(`/visaDetails/${visa._id}`)}
                className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/allVisa")}
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          See All Visas
        </button>
      </div>
    </div>
  );
};

export default LatestVisas;
