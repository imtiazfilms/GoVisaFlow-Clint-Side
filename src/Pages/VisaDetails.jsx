import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { authContext } from "../Components/AuthProvider";

const VisaDetails = () => {
  const { id } = useParams();
  const { user } = useContext(authContext);
  const [visa, setVisa] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchVisaDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/visas/${id}`);
        const data = await response.json();
        setVisa(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching visa details:", err);
        setLoading(false);
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
        alert("Visa application submitted successfully!");
        setIsModalOpen(false);
      } else {
        alert("Failed to submit visa application.");
      }
    } catch (err) {
      console.error("Error submitting application:", err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!visa) return <div>Visa details not found.</div>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Visa Details</h1>
      <div className="card p-6 border rounded-md shadow-lg">
        <h2 className="text-2xl font-semibold">{visa.countryName}</h2>
        <p><strong>Type:</strong> {visa.visaType}</p>
        <p><strong>Description:</strong> {visa.description}</p>
        <p><strong>Fee:</strong> ${visa.fee}</p>
        <p><strong>Duration:</strong> {visa.validity}</p>

        <button className="btn btn-primary mt-4" onClick={() => setIsModalOpen(true)}>
          Apply for the Visa
        </button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={handleApplicationSubmit}>
              <h2 className="text-xl font-semibold">Apply for Visa</h2>
              <input type="email" value={user.email} readOnly className="input" />
              <input type="text" name="firstName" placeholder="First Name" className="input" required />
              <input type="text" name="lastName" placeholder="Last Name" className="input" required />
              <input type="text" value={visa.fee} readOnly className="input" />
              <button type="submit" className="btn btn-primary">Apply</button>
              <button type="button" onClick={() => setIsModalOpen(false)} className="btn">Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaDetails;
