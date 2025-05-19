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
        const response = await axios.get(`https://go-visa-flow-server-side.vercel.app/visas/${id}`);
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
      await axios.post("https://go-visa-flow-server-side.vercel.app/visaApplications", {
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

  if (!visa) return null;

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-10">
      <div className="bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl p-8 w-full max-w-3xl transition-all">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-indigo-700 mb-4">
            ✈️ {visa.country} Visa Details
          </h2>
          <img
            src={visa.countryImage || "https://via.placeholder.com/300"}
            alt={`${visa.country} Flag`}
            className="w-36 h-36 object-cover rounded-full mx-auto border-4 border-indigo-300 shadow-md"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-900 text-sm sm:text-base">
          <p><strong>🌍 Country Name:</strong> {visa.countryName}</p>
          <p><strong>🛂 Visa Type:</strong> {visa.visaType}</p>
          <p><strong>⏱️ Processing Time:</strong> {visa.processingTime}</p>
          <p><strong>💰 Fee:</strong> ${visa.fee}</p>
          <p><strong>📅 Validity:</strong> {visa.validity}</p>
        </div>

        <div className="mt-8">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:from-indigo-600 hover:to-blue-600 transition-all duration-300"
          >
            🚀 Apply for Visa
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-2xl w-full max-w-md">
            <h3 className="text-2xl font-semibold text-center mb-6 text-blue-700">
              ✍️ Apply for {visa.country} Visa
            </h3>
            <form onSubmit={handleApply} className="space-y-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-blue-700 transition-all"
              >
                Submit Application
              </button>
            </form>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition"
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
