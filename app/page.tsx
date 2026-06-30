'use client';

export default function Home() {
  return (
    <main>
      <section className="hero-gradient text-white py-24">
        <div className="container-max">
          <div className="mb-8">
            <div className="badge mb-4 bg-yellow-100 text-yellow-900">🏆 #1 Septic Specialists in Blanco County</div>
            <h1 className="text-6xl font-bold mb-4 leading-tight">Septic Tank Pumping & Repair in Blanco, TX</h1>
            <p className="text-2xl text-blue-100 mb-8">Expert septic solutions for Hill Country homes. Licensed, certified, 24/7 emergency service.</p>
            <p className="text-lg text-blue-100 mb-6">Serving Blanco • Dripping Springs • Johnson City • Stonewall • Wimberley</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="tel:+1XXX-XXX-XXXX" className="btn-primary text-lg inline-block">
              ☎ Call Now: (XXX) XXX-XXXX
            </a>
            <a href="#services" className="btn-secondary text-lg inline-block">
              View Our Services →
            </a>
          </div>
        </div>
      </section>

      <section className="trust-bar py-6">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-900">4.8★</div>
              <p className="text-sm text-amber-800">147 Reviews</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-900">14+</div>
              <p className="text-sm text-amber-800">Years Serving Blanco</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-900">2,500+</div>
              <p className="text-sm text-amber-800">Satisfied Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-900">✓</div>
              <p className="text-sm text-amber-800">24/7 Emergency</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-red-50">
        <div className="container-max">
          <div className="bg-red-100 border-l-4 border-red-600 p-8 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🚨</div>
              <div>
                <h2 className="text-2xl font-bold text-red-900 mb-3">Spring Rains = Septic Backup Risk in Blanco</h2>
                <p className="text-red-900 mb-4">
                  Hill Country limestone clay soil and rising groundwater tables after spring rains make septic backups common March-May. Blanco County's unique geology (Glen Rose Limestone) requires specialized care. Early pumping prevents expensive failures.
                </p>
                <a href="tel:+1XXX-XXX-XXXX" className="btn-primary inline-block">
                  Schedule Spring Inspection Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-max">
          <h2 className="section-title text-center">Why Blanco Trusts Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Septic-Only Specialists',
                desc: 'We focus exclusively on septic systems. 100% of our expertise goes to your tank, not 20 other services.'
              },
              {
                icon: '🪨',
                title: 'Hill Country Geology Experts',
                desc: 'Blanco limestone clay soil is our specialty. We know Glen Rose Limestone, drain field challenges, and water table patterns.'
              },
              {
                icon: '📸',
                title: 'Photo-Documented Service',
                desc: 'Every job documented with photos. You see exactly what was done, when, and by whom. No surprises.'
              },
              {
                icon: '💰',
                title: 'Transparent Pricing',
                desc: 'Written quotes upfront. No hidden fees, no bait-and-switch. Inspection fee credited toward any approved work.'
              },
              {
                icon: '🔧',
                title: 'Licensed & Certified',
                desc: 'Texas-licensed septic professionals under TCEQ regulations. Verified credentials, continuous education, annual renewal.'
              },
              {
                icon: '⚡',
                title: '24/7 Emergency Response',
                desc: 'Backup happening now? We respond 24/7. Average response time under 2 hours in Blanco County.'
              }
            ].map((item, idx) => (
              <div key={idx} className="card text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
