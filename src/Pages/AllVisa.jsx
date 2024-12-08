import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AllVisas = () => {
  const [visas, setVisas] = useState([]);
  const [filteredVisas, setFilteredVisas] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  const navigate = useNavigate();

  const visaTypes = ["All", "Student visa", "Tourist visa", "Official visa"];

  useEffect(() => {
    const fetchVisas = async () => {
      try {
        const response = await fetch("http://localhost:5000/visas");
        if (response.ok) {
          const data = await response.json();
          setVisas(data);
          setFilteredVisas(data);
        } else {
          toast.error(`Failed to fetch visas. Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching visas:", error);
        toast.error("Failed to load visas. Please try again later.");
      }
    };

    fetchVisas();
  }, []);

  const handleFilterChange = (event) => {
    const selected = event.target.value;
    setSelectedType(selected);
    if (selected === "All") {
      setFilteredVisas(visas);
    } else {
      setFilteredVisas(visas.filter((visa) => visa.visaType === selected));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">All Visas</h2>

      <div className="mb-4">
        <label htmlFor="visaTypeFilter" className="mr-2 font-medium">
          Filter by Visa Type:
        </label>
        <select
          id="visaTypeFilter"
          className="border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
          value={selectedType}
          onChange={handleFilterChange}
        >
          {visaTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredVisas.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">
            No visas available for the selected filter.
          </div>
        ) : (
          filteredVisas.map((visa) => (
            <div
              key={visa._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-200 hover:scale-105"
            >
              <img
                src={visa.countryImage}
                alt={`${visa.country} flag`}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-center text-gray-800">{visa.country}</h3>
                <div className="text-gray-600 mt-2">
                  <p>
                    <strong>Country Name:</strong> {visa.countryName}
                  </p>
                  <p>
                    <strong>Visa Type:</strong> {visa.visaType}
                  </p>
                  <p>
                    <strong>Processing Time:</strong> {visa.processingTime}
                  </p>
                  <p>
                    <strong>Fee:</strong> ${visa.fee}
                  </p>
                </div>

                <div className="mt-4 text-center">
                  <button
                    onClick={() => navigate(`/visaDetails/${visa._id}`)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default AllVisas;
