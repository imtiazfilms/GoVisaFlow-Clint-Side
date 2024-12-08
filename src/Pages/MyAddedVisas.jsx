/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";

const MyAddedVisas = () => {
  const [visas, setVisas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedVisa, setSelectedVisa] = useState(null); // For the update modal
  const [modalOpen, setModalOpen] = useState(false);

  const auth = getAuth();
  const currentUser = auth.currentUser;

  useEffect(() => {
    if (!currentUser) {
      toast.error("You need to be logged in to view your visas.");
      return;
    }

    const fetchVisas = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/addedVisas?email=${currentUser.email}`);
        setVisas(response.data);
      } catch (err) {
        setError("Failed to fetch visas.");
      } finally {
        setLoading(false);
      }
    };

    fetchVisas();
  }, [currentUser]);

  const handleDelete = async (visaId) => {
    try {
      await axios.delete(`http://localhost:5000/visas/${visaId}`);
      setVisas(visas.filter((visa) => visa._id !== visaId));
      toast.success("Visa deleted successfully.");
    } catch (err) {
      toast.error("Failed to delete visa.");
    }
  };

  const handleUpdate = (visa) => {
    setSelectedVisa(visa);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedVisa(null);
  };

  const handleUpdateSubmit = async (updatedVisa) => {
    try {
      await axios.put(`http://localhost:5000/visas/${updatedVisa._id}`, updatedVisa);
      setVisas(visas.map((visa) => (visa._id === updatedVisa._id ? updatedVisa : visa)));
      toast.success("Visa updated successfully.");
      handleModalClose();
    } catch (err) {
      toast.error("Failed to update visa.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-6">My Added Visas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visas.map((visa) => (
          <div key={visa._id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img src={visa.countryImage} alt={visa.countryName} className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold text-teal-400 mt-4">{visa.countryName}</h3>
            <p className="text-teal-300">Visa Type: {visa.visaType}</p>
            <p className="text-teal-300">Processing Time: {visa.processingTime}</p>
            <p className="text-teal-300">Fee: {visa.fee}</p>
            <p className="text-teal-300">Validity: {visa.validity}</p>
            <p className="text-teal-300">Application Method: {visa.applicationMethod}</p>
            <div className="mt-4 flex justify-between">
              <button onClick={() => handleUpdate(visa)} className="text-teal-500 hover:text-teal-300">Update</button>
              <button onClick={() => handleDelete(visa._id)} className="text-red-500 hover:text-red-300">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <UpdateVisaModal
          visa={selectedVisa}
          onClose={handleModalClose}
          onSubmit={handleUpdateSubmit}
        />
      )}
    </div>
  );
};

const UpdateVisaModal = ({ visa, onClose, onSubmit }) => {
    const [updatedVisa, setUpdatedVisa] = useState(visa);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUpdatedVisa({ ...updatedVisa, [name]: value }); // Ensure the right value is updated in the state
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Submitting updated visa:', updatedVisa);  // Debugging line to check what data is being submitted
      onSubmit(updatedVisa);
    };
  
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
        <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-teal-400 mb-4">Update Visa</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-teal-300">Country Name</label>
              <input
                type="text"
                name="countryName"
                value={updatedVisa.countryName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-teal-300">Visa Type</label>
              <input
                type="text"
                name="visaType"
                value={updatedVisa.visaType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-teal-300">Processing Time</label>
              <input
                type="text"
                name="processingTime"
                value={updatedVisa.processingTime}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-teal-300">Fee</label>
              <input
                type="text"
                name="fee"
                value={updatedVisa.fee}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-teal-300">Validity</label>
              <input
                type="text"
                name="validity"
                value={updatedVisa.validity}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-teal-300">Application Method</label>
              <input
                type="text"
                name="applicationMethod"
                value={updatedVisa.applicationMethod}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-md">Update</button>
              <button type="button" onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded-md">Close</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

export default MyAddedVisas;
