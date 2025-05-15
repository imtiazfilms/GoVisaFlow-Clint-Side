import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../Components/Loader";

const AllVisas = () => {
  const [visas, setVisas] = useState([]);
  const [filteredVisas, setFilteredVisas] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const visaTypes = ["All", "Student visa", "Tourist visa", "Official visa"];

  useEffect(() => {
    const fetchVisas = async () => {
      try {
        const response = await fetch("https://go-visa-flow-server-side.vercel.app/visas");
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
      } finally {
        setLoading(false);
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
    <div className="container mx-auto p-10 mt-20 mb-10">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-700">
        🌍 Explore All Visa Opportunities
      </h2>

      {/* Filter + Search */}
      <div className="mb-6 flex flex-col lg:flex-row items-start lg:items-center gap-4">
        <div>
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

        <div className="flex-grow w-full lg:w-1/2">
          <input
            type="text"
            placeholder="Search by country name..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>

      {/* Loader or Visa Grid */}
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVisas
            .filter((visa) =>
              visa.countryName.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((visa) => (
              <div
                key={visa._id}
                className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-200 hover:scale-105"
              >
                <img
                  src={visa.countryImage}
                  alt={`${visa.country} flag`}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-center text-gray-800">
                    {visa.country}
                  </h3>
                  <div className="text-gray-600 mt-2 space-y-1">
                    <p><strong>Country Name:</strong> {visa.countryName}</p>
                    <p><strong>Visa Type:</strong> {visa.visaType}</p>
                    <p><strong>Processing Time:</strong> {visa.processingTime}</p>
                    <p><strong>Fee:</strong> ${visa.fee}</p>
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
            ))}
        </div>
      )}
    </div>
  );
};

export default AllVisas;
