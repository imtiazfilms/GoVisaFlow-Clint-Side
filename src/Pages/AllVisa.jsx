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
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-blue-700">
          🌍 Explore All Visa Opportunities
        </h2>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10 bg-white/20 p-6 rounded-xl shadow-md">
          <div className="w-full lg:w-1/3">
            <label className="block text-sm font-medium mb-1">Filter by Visa Type:</label>
            <select
              value={selectedType}
              onChange={handleFilterChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {visaTypes.map((type, i) => (
                <option key={i} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full lg:w-1/2">
            <label className="block text-sm font-medium mb-1">Search by Country:</label>
            <input
              type="text"
              placeholder="Enter country name..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredVisas
              .filter((visa) =>
                visa.countryName.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((visa) => (
                <div
                  key={visa._id}
                  className="relative bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  {/* Badge */}
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow animate-pulse">
                    {visa.visaType}
                  </span>

                  <img
                    src={visa.countryImage}
                    alt={`${visa.country} image`}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />

                  <div className="p-5 text-center">
                    <h3 className="text-lg font-semibold text-blue-900">
                      {visa.country}
                    </h3>

                    <div className="text-sm text-base-content  mt-3 space-y-1">
                      <p><strong>Country:</strong> {visa.countryName}</p>
                      <p><strong>Processing:</strong> {visa.processingTime}</p>
                      <p><strong>Fee:</strong> ${visa.fee}</p>
                    </div>

                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                        {visa.visaType}
                      </span>
                      <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                        {visa.processingTime}
                      </span>
                      <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
                        ${visa.fee}
                      </span>
                    </div>

                    <button
                      onClick={() => navigate(`/visaDetails/${visa._id}`)}
                      className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg font-medium hover:from-indigo-600 hover:to-blue-600 transition-all duration-300"
                    >
                      See Details
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllVisas;
