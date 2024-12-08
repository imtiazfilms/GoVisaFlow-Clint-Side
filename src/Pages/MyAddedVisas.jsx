import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MyAddedVisas = () => {
  const [visas, setVisas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVisa, setSelectedVisa] = useState(null);

  useEffect(() => {
    // Fetch added visas when the page loads
    const fetchVisas = async () => {
      try {
        const response = await axios.get('http://localhost:5000/addedVisas');
        setVisas(response.data);
      } catch (error) {
        console.error('Error fetching visas:', error);
        toast.error('Failed to load visa data.');
      }
    };
    fetchVisas();
  }, []);

  const handleDeleteVisa = async (visaId) => {
    try {
      await axios.delete(`http://localhost:5000/addedVisas/${visaId}`);
      setVisas((prevVisas) => prevVisas.filter((visa) => visa._id !== visaId));
      toast.success('Visa deleted successfully.');
    } catch (error) {
      console.error('Error deleting visa:', error);
      toast.error('Failed to delete visa.');
    }
  };

  const handleOpenModal = (visa) => {
    setSelectedVisa(visa);
    setIsModalOpen(true);
  };

  const handleUpdateVisa = async (e) => {
    e.preventDefault();
    const updatedVisa = {
      ...selectedVisa,
      country: e.target.country.value,
      visa_type: e.target.visa_type.value,
      processing_time: e.target.processing_time.value,
      fee: e.target.fee.value,
      validity: e.target.validity.value,
      application_method: e.target.application_method.value,
    };

    try {
      const response = await axios.put(`http://localhost:5000/addedVisas/${updatedVisa._id}`, updatedVisa);
      setVisas((prevVisas) =>
        prevVisas.map((visa) =>
          visa._id === updatedVisa._id ? updatedVisa : visa
        )
      );
      toast.success('Visa updated successfully.');
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error updating visa:', error);
      toast.error('Failed to update visa.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">My Added Visas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {visas.length === 0 ? (
          <div>No visas added yet.</div>
        ) : (
          visas.map((visa) => (
            <div key={visa._id} className="card bg-white shadow-lg p-4 rounded-md">
              <img
                src={`https://flagsapi.com/${visa.country.toLowerCase()}/shiny/64.png`} // Assuming you store country codes
                alt="Country Flag"
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-2">{visa.country}</h3>
              <p><strong>Visa Type:</strong> {visa.visa_type}</p>
              <p><strong>Processing Time:</strong> {visa.processing_time}</p>
              <p><strong>Fee:</strong> {visa.fee}</p>
              <p><strong>Validity:</strong> {visa.validity}</p>
              <p><strong>Application Method:</strong> {visa.application_method}</p>
              <button
                onClick={() => handleOpenModal(visa)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-4"
              >
                Update
              </button>
              <button
                onClick={() => handleDeleteVisa(visa._id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md mt-4"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      {isModalOpen && selectedVisa && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold mb-4">Update Visa Information</h2>
            <form onSubmit={handleUpdateVisa} className="space-y-4">
              <div>
                <label className="block text-gray-700">Country</label>
                <input
                  type="text"
                  name="country"
                  defaultValue={selectedVisa.country}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Visa Type</label>
                <input
                  type="text"
                  name="visa_type"
                  defaultValue={selectedVisa.visa_type}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Processing Time</label>
                <input
                  type="text"
                  name="processing_time"
                  defaultValue={selectedVisa.processing_time}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Fee</label>
                <input
                  type="text"
                  name="fee"
                  defaultValue={selectedVisa.fee}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Validity</label>
                <input
                  type="text"
                  name="validity"
                  defaultValue={selectedVisa.validity}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Application Method</label>
                <input
                  type="text"
                  name="application_method"
                  defaultValue={selectedVisa.application_method}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAddedVisas;
