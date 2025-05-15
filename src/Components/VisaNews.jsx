const newsItems = [
  {
    title: "UK Student Visa Deadline Extended",
    date: "May 10, 2025",
    summary: "The UK has extended the student visa application deadline by 15 days for the Summer 2025 intake.",
  },
  {
    title: "New Schengen Visa Rules from June",
    date: "April 30, 2025",
    summary: "Applicants must now provide additional biometric verification in certain EU countries.",
  },
  {
    title: "Canada Announces Faster Work Visa Processing",
    date: "April 22, 2025",
    summary: "IRCC aims to reduce work visa processing time to 30 days with new system upgrades.",
  },
];

const VisaNews = () => {
  return (
    <section className="my-12 w-[95%] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Visa News & Alerts</h2>
      <div className="space-y-6">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-base-100 shadow-md p-5 rounded-lg">
            <p className="text-sm text-base-content/60 mb-1">{item.date}</p>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-base-content/80 mt-1">{item.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisaNews;
