const FAQ = () => {
  const faqs = [
    {
      question: "What types of visas can I apply for?",
      answer: "You can apply for tourist, student, work, and business visas based on your destination country.",
    },
    {
      question: "How long does the visa process take?",
      answer: "Processing times vary by country and visa type, but we’ll notify you with updates at every stage.",
    },
    {
      question: "Is my data secure on GoVisaFlow?",
      answer: "Yes, we use encryption and secure servers to ensure all your personal and document data is protected.",
    },
    {
      question: "Can I track my visa application status?",
      answer: "Absolutely! Once submitted, you can log in to your dashboard and track real-time updates.",
    },
  ];

  return (
    <section className="my-12 w-[95%] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="collapse collapse-arrow bg-base-100 shadow-md rounded-xl">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-lg font-medium peer-checked:text-primary">
              {faq.question}
            </div>
            <div className="collapse-content text-base-content/80">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
