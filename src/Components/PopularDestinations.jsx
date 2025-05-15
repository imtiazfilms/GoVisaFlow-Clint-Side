const destinations = [
    {
        country: "Canada",
        visaType: "Student Visa",
        flag: "https://flagcdn.com/ca.svg",
    },
    {
        country: "Germany",
        visaType: "Work Visa",
        flag: "https://flagcdn.com/de.svg",
    },
    {
        country: "Australia",
        visaType: "Tourist Visa",
        flag: "https://flagcdn.com/au.svg",
    },
    {
        country: "Japan",
        visaType: "Business Visa",
        flag: "https://flagcdn.com/jp.svg",
    },
];

const PopularDestinations = () => {
    return (
        <section className="my-12 w-[95%] mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Popular Visa Destinations</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {destinations.map((item, index) => (
                    <div key={index} className="card bg-base-100 shadow-md p-6 rounded-xl text-center">
                        <img src={item.flag} alt={item.country} className="h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">{item.country}</h3>
                        <p className="text-sm text-base-content/80 mb-2">{item.visaType}</p>
                        <button className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white border-none rounded-full">
                            Apply Now
                        </button>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularDestinations;
