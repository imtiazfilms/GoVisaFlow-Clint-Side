/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAuth } from "firebase/auth";
import axios from "axios";
import { toast } from "react-toastify";

const VisaDetails = () => {
  const [visa, setVisa] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const auth = getAuth();
  const currentUser = auth.currentUser;

  useEffect(() => {
    const fetchVisaDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/visas/${id}`);
        setVisa(response.data);
      } catch (error) {
        toast.error("Failed to fetch visa details.");
      }
    };

    fetchVisaDetails();
  }, [id]);

  const handleApply = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      await axios.post("http://localhost:5000/visaApplications", {
        email: currentUser.email,
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        appliedDate: new Date(),
        fee: visa.fee,
        visaId: visa._id,
        countryName: visa.countryName,
      });
      toast.success("Application submitted successfully!");
      setModalOpen(false);
    } catch (error) {
      toast.error("Failed to submit application.");
    }
  };

  if (!visa) {
    return null;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold">{visa.country}</h2>
          <img
            src={visa.countryImage || "https://via.placeholder.com/300"}
            alt={`${visa.country} Flag`}
            className="w-32 h-32 object-cover rounded-full mx-auto mt-4"
          />
        </div>

        <div className="space-y-4">
          <div>
            <p><strong>Country Name:</strong> {visa.countryName}</p>
            <p><strong>Visa Type:</strong> {visa.visaType}</p>
            <p><strong>Processing Time:</strong> {visa.processingTime}</p>
            <p><strong>Fee:</strong> ${visa.fee}</p>
            <p><strong>Validity:</strong> {visa.validity}</p>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          >
            Apply for Visa
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Apply for {visa.country} Visa</h3>
            <form onSubmit={handleApply} className="space-y-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                Apply
              </button>
            </form>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaDetails;
