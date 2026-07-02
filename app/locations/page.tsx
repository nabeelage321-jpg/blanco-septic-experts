'use client';
export default function Locations() {
  const locations = [
    { name: 'Blanco Center', slug: 'blanco-center', icon: '📍', desc: 'Downtown Blanco, Blanco River area. Historic homes with older septic systems.' },
    { name: 'Dripping Springs', slug: 'dripping-springs', icon: '📍', desc: 'Growing Hill Country community. Mix of new and older homes. High limestone.' },
    { name: 'Johnson City', slug: 'johnson-city', icon: '📍', desc: 'Pedernales River valley. Rural properties. Well-established septic use.' },
    { name: 'Stonewall', slug: 'stonewall', icon: '📍', desc: 'Rural wine country. Larger lots. Agricultural and residential blend.' },
    { name: 'Wimberley', slug: 'wimberley', icon: '📍', desc: 'Scenic Hill Country. Blanco River access. Vacation and permanent homes.' },
    { name: 'Pedernales River', slug: 'pedernales-river', icon: '📍', desc: 'Riverside properties with unique challenges. High groundwater seasonally.' }
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
          <h2 className="section-title text-center mb-12">Areas We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, idx) => (
              <a key={idx} href={`/locations/${loc.slug}`} className="card hover:shadow-xl transition cursor-pointer">
                <div className="text-4xl mb-3">{loc.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{loc.name}</h3>
                <p className="text-gray-700 text-sm">{loc.desc}</p>
                <span className="text-blue-600 font-bold text-sm mt-4 inline-block">View Details →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-max">
          <h2 className="section-title text-center">Why Blanco County Trusts Us</h2>
          <div className="bg-white p-8 rounded-lg border-l-4 border-blue-600">
            <p className="text-gray-700 mb-4">
              We've served Blanco County since 2010. We know your neighborhoods, your soil, your water table, your seasonal patterns. 
              Every spring brings septic emergencies—we're ready. Every property has unique challenges—we solve them.
            </p>
          </div>
        </div>
      </section>

      <section className="hero-gradient text-white py-16">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-4">We Serve Your Neighborhood</h2>
          <a href="tel:+1XXX-XXX-XXXX" className="btn-primary text-lg inline-block">
            ☎ (XXX) XXX-XXXX • 24/7 Available
          </a>
        </div>
      </section>
    </main>
  );
}
