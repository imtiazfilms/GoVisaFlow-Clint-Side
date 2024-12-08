import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getAuth } from "firebase/auth";

const MyVisaApplications = () => {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      fetchApplications(currentUser.email); 
    } else {
      toast.error("Please log in to view your visa applications.");
    }
  }, []);

  const fetchApplications = async (email) => {
    try {
      const response = await axios.get(`http://localhost:5000/myApplications?email=${email}`);
      setApplications(response.data); 
      setFilteredApplications(response.data); 
    } catch (error) {
      console.error("Error fetching applications:", error);
      toast.error("Failed to load applications.");
    }
  };

  const handleCancelApplication = async (applicationId) => {
    try {
      await axios.delete(`http://localhost:5000/visaApplications/${applicationId}`);
      setApplications((prevApplications) =>
        prevApplications.filter((app) => app._id !== applicationId)
      );
      setFilteredApplications((prevFilteredApplications) =>
        prevFilteredApplications.filter((app) => app._id !== applicationId)
      );
      toast.success("Visa application cancelled successfully.");
    } catch (error) {
      console.error("Error cancelling application:", error);
      toast.error("Failed to cancel application.");
    }
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = applications.filter((application) =>
      application.countryName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredApplications(filtered);
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">My Visa Applications</h2>
      
      <div className="mb-6 flex gap-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by country"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          onClick={() => handleSearch()}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredApplications.length === 0 ? (
          <div className="col-span-full text-center text-gray-600 text-lg">
            No visa applications found.
          </div>
        ) : (
          filteredApplications.map((application) => (
            <div key={application._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://i.ibb.co.com/crcR0X1/DALL-E-2024-12-05-21-26-00-A-modern-and-minimalistic-SVG-icon-for-a-visa-navigator-website-named-Go.webp"
                alt="Visa"
                className="w-full h-48 object-scale-down"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {application.firstName} {application.lastName}
                </h3>
                <p className="text-gray-600 mt-2">Visa ID: {application.visaId}</p>
                <p className="text-gray-600 mt-1">Country: {application.countryName}</p>
                <p className="text-gray-600 mt-1">Applied on: {new Date(application.appliedDate).toLocaleDateString()}</p>
                <p className="text-gray-600 mt-1">Fee: <span className="font-semibold text-green-600">${application.fee}</span></p>
                <p className="text-gray-600 mt-1">Email: {application.email}</p>
                <button
                  onClick={() => handleCancelApplication(application._id)}
                  className="w-full bg-red-600 text-white py-2 mt-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                >
                  Cancel Application
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyVisaApplications;
