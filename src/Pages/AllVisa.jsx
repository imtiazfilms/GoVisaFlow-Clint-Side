import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllVisa = () => {
  const [visas, setVisas] = useState([]); // State to store visa data
  const [loading, setLoading] = useState(true); // State to track loading status

  // Fetch visa data from the backend when the component mounts
  useEffect(() => {
    const fetchVisas = async () => {
      try {
        const response = await fetch("http://localhost:5000/visas"); // Replace with your server URL
        const data = await response.json();
        setVisas(data); // Store the visa data
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error("Error fetching visas:", error);
        setLoading(false); // Stop loading if there's an error
      }
    };

    fetchVisas();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">All Visas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visas.map(visa => (
          <div key={visa._id} className="card p-4 border rounded-md shadow-lg">
            <img className="rounded" src={visa.countryImage} alt="" />
            <br />
            <p><strong>Country:</strong> {visa.countryName}</p>
            <p><strong>Visa Type:</strong> {visa.visaType}</p>
            <p><strong>Fee:</strong> ${visa.fee}</p>
            <Link to={`/visaDetails/${visa._id}`} className="btn btn-primary mt-4">
              See Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVisa;
