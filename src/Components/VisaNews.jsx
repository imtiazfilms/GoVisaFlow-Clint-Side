const newsItems = [
  {
    title: "UK Student Visa Deadline Extended",
    date: "May 10, 2025",
    summary:
      "The UK has extended the student visa application deadline by 15 days for the Summer 2025 intake.",
  },
  {
    title: "New Schengen Visa Rules from June",
    date: "April 30, 2025",
    summary:
      "Applicants must now provide additional biometric verification in certain EU countries.",
  },
  {
    title: "Canada Announces Faster Work Visa Processing",
    date: "April 22, 2025",
    summary:
      "IRCC aims to reduce work visa processing time to 30 days with new system upgrades.",
  },
];

const VisaNews = () => {
  return (
    <section className="my-16 w-[95%] mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">
        📰 Latest Visa News & Alerts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-sm text-blue-600 font-medium mb-2">{item.date}</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-700 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisaNews;
