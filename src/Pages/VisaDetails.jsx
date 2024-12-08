import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { authContext } from "../Components/AuthProvider";
import { toast } from "react-toastify";

const VisaDetails = () => {
  const { id } = useParams();
  const { user } = useContext(authContext);
  const [visa, setVisa] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchVisaDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/visas/${id}`);
        const data = await response.json();
        setVisa(data);
      } catch (err) {
        console.error("Error fetching visa details:", err);
      }
    };

    fetchVisaDetails();
  }, [id]);

  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email: user.email,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      appliedDate: new Date().toISOString(),
      fee: visa.fee,
      visaId: id,
    };

    try {
      const response = await fetch("http://localhost:5000/visaApplications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Visa application submitted successfully!");
        setIsModalOpen(false);
      } else {
        toast.error("Failed to submit visa application.");
      }
    } catch (err) {
      console.error("Error submitting application:", err);
      toast.error("An unexpected error occurred.");
    }
  };

  // Show message if visa details are not found or still loading
  if (!visa) {
    return <div className="text-center text-lg">Visa details not found.</div>;
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{visa.countryName} Visa</h1>
        <div className="space-y-4 text-gray-700">
          <p><strong>Type:</strong> {visa.visaType}</p>
          <p><strong>Description:</strong> {visa.description}</p>
          <p><strong>Fee:</strong> <span className="text-green-600 font-semibold">${visa.fee}</span></p>
          <p><strong>Duration:</strong> {visa.validity}</p>
        </div>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md mt-6 transition"
          onClick={() => setIsModalOpen(true)}
        >
          Apply for Visa
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold mb-4">Apply for Visa</h2>
            <form onSubmit={handleApplicationSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Fee</label>
                <input
                  type="text"
                  value={visa.fee}
                  readOnly
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
              >
                Apply
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaDetails;
