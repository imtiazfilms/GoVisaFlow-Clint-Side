import { useState } from "react";
import { toast } from "react-toastify";
import { getAuth } from "firebase/auth";

const AddVisa = () => {
    const [visaData, setVisaData] = useState({
        countryImage: "",
        countryName: "",
        visaType: "Tourist visa",
        processingTime: "",
        requiredDocuments: [],
        description: "",
        ageRestriction: "",
        fee: "",
        validity: "",
        applicationMethod: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVisaData({ ...visaData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setVisaData((prevData) => ({
            ...prevData,
            requiredDocuments: checked
                ? [...prevData.requiredDocuments, value]
                : prevData.requiredDocuments.filter((doc) => doc !== value),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const auth = getAuth();
        const currentUser = auth.currentUser;

        if (!currentUser) {
            toast.error("You need to be logged in to add a visa.");
            return;
        }

        // Include the user's email with the visa data
        const visaWithEmail = {
            ...visaData,
            email: currentUser.email, // Add email here
        };

        // Send the visa data to the backend
        fetch("http://localhost:5000/visas", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(visaWithEmail),
        })
            .then((res) => res.json())
            .then(() => {
                toast.success("Visa added successfully!");
                setVisaData({
                    countryImage: "",
                    countryName: "",
                    visaType: "Tourist visa",
                    processingTime: "",
                    requiredDocuments: [],
                    description: "",
                    ageRestriction: "",
                    fee: "",
                    validity: "",
                    applicationMethod: "",
                });
            })
            .catch(() => {
                toast.error("Failed to add visa. Please try again.");
            });
    };

    return (
        <div className="min-h-screen bg-gray-900 text-teal-300 flex justify-center items-center">
            <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-teal-400 mb-6 text-center">Add Visa</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium">Country Image URL</label>
                        <input
                            type="text"
                            name="countryImage"
                            value={visaData.countryImage}
                            onChange={handleChange}
                            required
                            placeholder="Enter image URL"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Country Name</label>
                        <input
                            type="text"
                            name="countryName"
                            value={visaData.countryName}
                            onChange={handleChange}
                            required
                            placeholder="Enter country name"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Visa Type</label>
                        <select
                            name="visaType"
                            value={visaData.visaType}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
                        >
                            <option value="Tourist visa">Tourist visa</option>
                            <option value="Student visa">Student visa</option>
                            <option value="Official visa">Official visa</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Processing Time</label>
                        <input
                            type="text"
                            name="processingTime"
                            value={visaData.processingTime}
                            onChange={handleChange}
                            required
                            placeholder="Enter processing time"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Required Documents</label>
                        <div className="flex flex-wrap gap-4 mt-2">
                            {["Valid passport", "Visa application form", "Recent passport-sized photograph"].map(
                                (doc) => (
                                    <label key={doc} className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            value={doc}
                                            onChange={handleCheckboxChange}
                                            checked={visaData.requiredDocuments.includes(doc)}
                                            className="form-checkbox text-teal-400 bg-gray-700 border-gray-600"
                                        />
                                        <span>{doc}</span>
                                    </label>
                                )
                            )}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Description</label>
                        <textarea
                            name="description"
                            value={visaData.description}
                            onChange={handleChange}
                            required
                            placeholder="Enter description"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
                        ></textarea>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium">Age Restriction</label>
                            <input
                                type="number"
                                name="ageRestriction"
                                value={visaData.ageRestriction}
                                onChange={handleChange}
                                required
                                placeholder="Enter age restriction"
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Fee</label>
                            <input
                                type="number"
                                name="fee"
                                value={visaData.fee}
                                onChange={handleChange}
                                required
                                placeholder="Enter fee"
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Validity</label>
                        <input
                            type="text"
                            name="validity"
                            value={visaData.validity}
                            onChange={handleChange}
                            required
                            placeholder="Enter validity period"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Application Method</label>
                        <input
                            type="text"
                            name="applicationMethod"
                            value={visaData.applicationMethod}
                            onChange={handleChange}
                            required
                            placeholder="Enter application method"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2.5 bg-teal-600 text-gray-900 rounded-lg hover:bg-teal-500 focus:ring-4 focus:ring-teal-400"
                    >
                        Add Visa
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddVisa;
