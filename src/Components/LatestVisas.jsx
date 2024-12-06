
const LatestVisas = () => {
  const visas = [
    { id: 1, country: 'USA', type: 'Work Visa', description: 'Apply for a USA work visa today!' },
    { id: 2, country: 'Canada', type: 'Student Visa', description: 'Study in Canada with our student visa assistance.' },
    { id: 3, country: 'Australia', type: 'Tourist Visa', description: 'Explore Australia with a tourist visa.' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Latest Visas</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        {visas.map((visa) => (
          <div key={visa.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h3>{visa.country}</h3>
            <p>{visa.type}</p>
            <p>{visa.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestVisas;
