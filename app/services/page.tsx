'use client';
export default function Services() {
  const services = [
    { title: 'Septic Tank Pumping', slug: 'septic-tank-pumping', icon: '🚿', desc: 'Regular maintenance pumping every 3-5 years with inspection.' },
    { title: 'Emergency Repair', slug: 'emergency-repair', icon: '🚨', desc: '24/7 emergency service. Backup? We fix it NOW.' },
    { title: 'Tank Inspection', slug: 'tank-inspection', icon: '🔍', desc: 'Professional inspection with photo report and recommendations.' },
    { title: 'Drain Field Repair', slug: 'drain-field-repair', icon: '🪨', desc: 'Failed drain field? Limestone specialists with proven solutions.' },
    { title: 'Tank Replacement', slug: 'tank-replacement', icon: '🏗️', desc: 'New tank installation built for Hill Country conditions.' },
    { title: 'Maintenance Plans', slug: 'maintenance-plans', icon: '📅', desc: 'Annual/bi-annual inspections prevent costly failures.' }
  ];

  return (
    <main>
      <section className="hero-gradient text-white py-20">
        <div className="container-max">
          <h1 className="text-5xl font-bold mb-4">Complete Septic Services for Blanco County</h1>
          <p className="text-xl text-blue-100">From pumping to replacement. All your septic needs. Expert limestone specialists.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <a key={idx} href={`/services/${service.slug}`} className="card hover:shadow-xl transition cursor-pointer">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{service.desc}</p>
                <span className="text-blue-600 font-bold text-sm">Learn More →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="hero-gradient text-white py-16">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Professional Septic Care?</h2>
          <a href="tel:+1XXX-XXX-XXXX" className="btn-primary text-lg inline-block">
            ☎ Call (XXX) XXX-XXXX • 24/7 Service
          </a>
        </div>
      </section>
    </main>
  );
}
