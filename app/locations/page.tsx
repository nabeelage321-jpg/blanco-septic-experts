'use client';

export default function Locations() {
  const locations = [
    {
      name: 'Blanco Center',
      description: 'Downtown Blanco, Blanco River area. Historic homes with older septic systems. Spring rains = high water table risk.',
      challenges: 'Limestone clay, older tanks, Blanco River groundwater'
    },
    {
      name: 'Dripping Springs',
      description: 'Growing Hill Country community. Mix of new and older homes. High limestone content in soil.',
      challenges: 'Drain field mineral deposits, expanding construction'
    },
    {
      name: 'Johnson City',
      description: 'Pedernales River valley. Rural properties. Well-established septic use.',
      challenges: 'Granite/limestone bedrock, deep water tables, isolated properties'
    },
    {
      name: 'Stonewall',
      description: 'Rural wine country. Larger lots. Agricultural and residential blend.',
      challenges: 'Limestone outcrops, seasonal water table changes'
    },
    {
      name: 'Wimberley',
      description: 'Scenic Hill Country. Blanco River access. Vacation homes and permanent residents.',
      challenges: 'Tourist area seasonal demand, creek proximity, clay soil'
    },
    {
      name: 'Pedernales River Area',
      description: 'Riverside properties with unique challenges. High groundwater seasonally.',
      challenges: 'Seasonal flooding risk, high water tables, geological mix'
    }
  ];

  return (
    <main>
      <section className="hero-gradient text-white py-20">
        <div className="container-max">
          <h1 className="text-5xl font-bold mb-4">Septic Services Across Blanco County</h1>
          <p className="text-xl text-blue-100">Local expertise in every neighborhood. Hill Country specialists.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-max">
          <h2 className="section-title text-center">Areas We Serve</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((loc, idx) => (
              <div key={idx} className="card">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">📍 {loc.name}</h3>
                <p className="text-gray-700 mb-4">{loc.description}</p>
                <div className="bg-blue-50 p-4 rounded">
                  <p className="text-sm text-gray-700"><strong>Local Challenges:</strong> {loc.challenges}</p>
                </div>
                <a href="tel:+1XXX-XXX-XXXX" className="btn-primary text-sm inline-block mt-4">
                  Service {loc.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-max">
          <h2 className="section-title text-center">Why Blanco County Trusts Us</h2>
          <div className="bg-white p-8 rounded-lg border-l-4 border-blue-600">
            <h3 className="font-bold text-xl text-blue-900 mb-4">14 Years Local Experience</h3>
            <p className="text-gray-700 mb-4">
              We've served Blanco County since 2010. We know your neighborhoods, your soil, your water table, your seasonal patterns. 
              Every spring rain brings septic emergencies—we're ready. Every property has unique challenges—we solve them.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✓ Glen Rose Limestone expertise (unique to this area)</li>
              <li>✓ Blanco River groundwater patterns (seasonal high tables)</li>
              <li>✓ Spring rain backup prevention strategies</li>
              <li>✓ Relationships with local TCEQ inspectors</li>
              <li>✓ Knowledge of septic-unfriendly soils by neighborhood</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="hero-gradient text-white py-16">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-4">We Serve Your Neighborhood</h2>
          <p className="text-xl text-blue-100 mb-8">Same-day service in your area. Call for local expertise.</p>
          <a href="tel:+1XXX-XXX-XXXX" className="btn-primary text-lg inline-block">
            ☎ (XXX) XXX-XXXX • 24/7 Available
          </a>
        </div>
      </section>
    </main>
  );
}
