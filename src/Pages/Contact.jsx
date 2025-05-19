const Contact = () => {
  return (
    <div className="container mx-auto mt-24 mb-12 px-4 max-w-3xl"
      // Smooth background & text color transition on theme change
      style={{ transition: "background-color 0.5s, color 0.5s" }}
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100"
        style={{
          color: 'var(--text-primary)', // fallback if you have CSS variables set per theme
          transition: "color 0.5s",
        }}
      >
        About Go Visa Flow
      </h1>

      <div className="space-y-6 text-lg leading-relaxed"
        style={{
          color: 'var(--text-secondary)', // adapt text color per theme
          transition: "color 0.5s",
        }}
      >
        <p>
          <strong className="font-semibold">Go Visa Flow</strong> is a dedicated platform that helps individuals and families navigate the complex visa application process with ease. We are committed to making international travel and immigration as simple and stress-free as possible.
        </p>

        <p>
          With a wide range of visa services, real-time tracking, and expert guidance, Go Visa Flow ensures your application process is smooth and successful. Whether you&#39;re applying for a tourist visa, student visa, or work visa, we&#39;ve got you covered.
        </p>

        <p>
          Our team is passionate about helping people achieve their dreams of traveling or relocating abroad. We aim to be the most reliable and transparent visa consultancy service in the region.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4"
          style={{
            color: 'var(--text-primary)',
            transition: "color 0.5s",
          }}
        >
          Contact Information
        </h2>
        <ul className="list-disc pl-5 space-y-2"
          style={{
            color: 'var(--text-secondary)',
            transition: "color 0.5s",
          }}
        >
          <li><strong>Email:</strong> support@govisaflow.com</li>
          <li><strong>Phone:</strong> +880-123-456-7890</li>
          <li><strong>Address:</strong> 123 Dhaka Road, Gulshan, Dhaka, Bangladesh</li>
        </ul>

        <p className="pt-6">
          Thank you for choosing <strong className="font-semibold">Go Visa Flow</strong>. We&#39;re here to help every step of the way!
        </p>
      </div>
    </div>
  );
};

export default Contact;
