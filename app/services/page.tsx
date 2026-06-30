'use client';

export default function Services() {
  const services = [
    {
      title: 'Septic Tank Pumping & Cleaning',
      icon: '🚿',
      description: 'Regular maintenance pumping every 3-5 years.',
      details: [
        'Tank inspection during pumping',
        'Solids removal and disposal',
        'System efficiency assessment',
        'Written service report with photos',
        'Blanco limestone-specific care'
      ],
      pricing: '$300-$600',
      ideal: 'All homeowners (preventive maintenance)'
    },
    {
      title: '24/7 Emergency Septic Repair',
      icon: '🚨',
      description: 'Backup? We fix it NOW.',
      details: [
        'Same-day emergency response',
        'Diagnostic inspection included',
        'Root removal and clearing',
        'Limestone clog solutions',
        'Drain field emergency repair'
      ],
      pricing: '$400-$1,200',
      ideal: 'Urgent backups, wet lawns, odors'
    },
    {
      title: 'Professional Tank Inspection',
      icon: '🔍',
      description: 'Know your system\'s health before problems.',
      details: [
        'Complete tank video inspection',
        'Drain field assessment',
        'Soil probe testing',
        'Detailed photo report',
        'Maintenance recommendations'
      ],
      pricing: '$150-$250',
      ideal: 'New homeowners, pre-purchase, preventive'
    },
    {
      title: 'Drain Field Repair & Restoration',
      icon: '🪨',
      description: 'Failed drain field? We fix it.',
      details: [
        'Limestone-clogged field repair',
        'Sand filter installation',
        'Drain field replacement',
        'Aerobic system upgrades',
        'TCEQ-compliant solutions'
      ],
      pricing: '$2,000-$8,000',
      ideal: 'Failing drain fields, clay soil issues'
    },
    {
      title: 'Septic Tank Replacement',
      icon: '🏗️',
      description: 'New tank for Hill Country conditions.',
      details: [
        'TCEQ permit handling',
        'Frost-resistant installation',
        'Limestone-engineered sizing',
        'New drain field design',
        '5-year workmanship warranty'
      ],
      pricing: '$3,500-$8,000',
      ideal: 'Failing/cracked tanks, system upgrades'
    },
    {
      title: 'Preventive Maintenance Plans',
      icon: '📅',
      description: 'Regular monitoring prevents failures.',
      details: [
        'Annual or bi-annual inspections',
        'Scheduled pumping',
        'Priority emergency response',
        'Discount on additional services',
        'Dedicated account manager'
      ],
      pricing: '$600-$1,200/year',
      ideal: 'Older systems, rental properties, peace of mind'
    }
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
          <div className="grid gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="border-l-4 border-blue-600 bg-blue-50 p-8 rounded-lg">
                <div className="flex items-start gap-6 mb-4">
                  <div className="text-5xl">{service.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-blue-900 mb-2">{service.title}</h2>
                    <p className="text-lg text-gray-700 mb-4">{service.description}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {service.details.map((detail, i) => (
                        <li key={i}>✓ {detail}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Pricing:</h4>
                    <p className="text-2xl font-bold text-blue-600 mb-4">{service.pricing}</p>
                    <p className="text-sm text-gray-700"><strong>Inspection fee credited</strong> toward work</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Ideal For:</h4>
                    <p className="text-gray-700 text-sm mb-4">{service.ideal}</p>
                    <a href="tel:+1XXX-XXX-XXXX" className="btn-primary inline-block">
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container-max text-center">
          <h2 className="section-title">Why Our Services Excel in Blanco</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="text-4xl mb-4">🪨</div>
              <h3 className="font-bold mb-2">Limestone Specialists</h3>
              <p className="text-sm text-gray-700">Glen Rose Limestone, clay soil, mineral buildup—we know Blanco geology inside and out.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold mb-2">Fast & Professional</h3>
              <p className="text-sm text-gray-700">Photo-documented work. Transparent pricing. 24/7 emergency response under 2 hours.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-bold mb-2">Licensed & Guaranteed</h3>
              <p className="text-sm text-gray-700">TCEQ-licensed professionals. 5-year workmanship warranty. Zero hidden charges.</p>
            </div>
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
