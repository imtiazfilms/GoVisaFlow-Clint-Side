const HowWeWork = () => {
  const steps = [
    {
      title: "Choose Country",
      description: "Select your destination and visa type.",
      icon: "🌍",
    },
    {
      title: "Fill Application",
      description: "Provide your personal and travel information.",
      icon: "📝",
    },
    {
      title: "Upload Documents",
      description: "Submit the required documents securely.",
      icon: "📄",
    },
    {
      title: "Get Approved",
      description: "Track and receive your visa decision.",
      icon: "✅",
    },
  ];

  return (
    <section className="my-12 w-[95%] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">How GoVisaFlow Works</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-md p-6 rounded-xl text-center hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-base-content/80">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
