import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getAuth } from "firebase/auth";

const MyVisaApplications = () => {
    const [applications, setApplications] = useState([]); // Store user's applications

    useEffect(() => {
        const auth = getAuth();
        const currentUser = auth.currentUser;
        
        if (currentUser) {
            fetchApplications(currentUser.email); // Fetch applications for the logged-in user
        } else {
            toast.error("Please log in to view your visa applications.");
        }
    }, []);

    const fetchApplications = async (email) => {
        try {
            const response = await axios.get(`http://localhost:5000/myApplications?email=${email}`);
            console.log("Applications data:", response.data); // Check the data
            setApplications(response.data); // Set applications data
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
            toast.success("Visa application cancelled successfully.");
        } catch (error) {
            console.error("Error cancelling application:", error);
            toast.error("Failed to cancel application.");
        }
    };

    return (
        <div className="container mx-auto p-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">My Visa Applications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {applications.length === 0 ? (
                    <div className="col-span-full text-center text-gray-600 text-lg">
                        No visa applications found.
                    </div>
                ) : (
                    applications.map((application) => (
                        <div key={application._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src="https://i.ibb.co.com/X7ZcY8d/fotor-ai-202412081017.jpg"
                                alt="Visa"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {application.firstName} {application.lastName}
                                </h3>
                                <p className="text-gray-600 mt-2">Visa ID: {application.visaId}</p>
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
