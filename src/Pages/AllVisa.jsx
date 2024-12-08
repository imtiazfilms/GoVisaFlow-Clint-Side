import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllVisas = () => {
  const [visas, setVisas] = useState([]); // All visas fetched from the API
  const [filteredVisas, setFilteredVisas] = useState([]); // Visas after applying filters
  const [visaTypes, setVisaTypes] = useState(["All"]); // Dropdown options
  const [selectedType, setSelectedType] = useState("All"); // Currently selected type

  // Fetch visas from the API
  useEffect(() => {
    const fetchVisas = async () => {
      try {
        const response = await fetch("http://localhost:5000/visas");
        if (response.ok) {
          const data = await response.json();

          // Log the data for debugging
          console.log("Fetched visas:", data);

          setVisas(data);
          setFilteredVisas(data);

          // Extract unique visa types for the dropdown
          const uniqueTypes = Array.from(new Set(data.map((visa) => visa.visa_type).filter(Boolean)));
          setVisaTypes(["All", ...uniqueTypes]);
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

  // Handle dropdown changes
  const handleFilterChange = (event) => {
    const selected = event.target.value;
    setSelectedType(selected);

    if (selected === "All") {
      setFilteredVisas(visas);
    } else {
      setFilteredVisas(visas.filter((visa) => visa.visa_type === selected));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">All Visas</h2>

      {/* Dropdown Menu */}
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

      {/* Visa Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredVisas.length === 0 ? (
          <div className="col-span-3 text-center text-gray-500">
            No visas available for the selected filter.
          </div>
        ) : (
          filteredVisas.map((visa) => (
            <div key={visa._id} className="card bg-white shadow-lg p-4 rounded-md">
              {/* Country Flag */}
              <img
                src={visa.countryImage}
                alt={`${visa.country} flag`}
                className="w-full h-[200px] object-cover rounded-md"
              />

              {/* Visa Details */}
              <h3 className="text-xl font-semibold mt-2">{visa.country}</h3>
              <p>
                <strong>Visa Type:</strong> {visa.visa_type}
              </p>
              <p>
                <strong>Processing Time:</strong> {visa.processing_time}
              </p>
              <p>
                <strong>Fee:</strong> {visa.fee}
              </p>
              <p>
                <strong>Validity:</strong> {visa.validity}
              </p>
              <p>
                <strong>Application Method:</strong> {visa.application_method}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllVisas;
