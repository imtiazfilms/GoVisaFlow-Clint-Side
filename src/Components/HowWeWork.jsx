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
    <section className="my-20 w-[95%] mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        How <span className="text-blue-600">GoVisaFlow</span> Works
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-2xl shadow-md hover:shadow-xl p-6 text-center transition-all duration-300"
          >
            {/* Icon container */}
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-3xl text-blue-700 shadow-sm">
              {step.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
