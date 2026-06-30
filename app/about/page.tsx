'use client';

export default function About() {
  return (
    <main>
      <section className="hero-gradient text-white py-20">
        <div className="container-max">
          <h1 className="text-5xl font-bold mb-4">About Blanco Septic Experts</h1>
          <p className="text-xl text-blue-100">Serving Hill Country families and businesses since 2010.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-max grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Blanco Septic Experts started in 2010 when our founder realized Blanco County needed a septic specialist who actually understood Hill Country geology. After 14 years, we've served 2,500+ satisfied customers.
            </p>
            <p className="text-gray-700 mb-4">
              We don't do roofing, HVAC, or plumbing. We do septic—and we do it better than anyone in Blanco County. Our focus is your tank.
            </p>
            <p className="text-gray-700">
              Glen Rose Limestone. Blanco River groundwater. Spring rains and freeze-thaw cycles. We know this area inside and out.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
            <h3 className="font-bold text-lg mb-4 text-blue-900">By The Numbers</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✓ <strong>14 years</strong> serving Blanco County</li>
              <li>✓ <strong>2,500+</strong> satisfied customers</li>
              <li>✓ <strong>4.8★</strong> average rating (147 reviews)</li>
              <li>✓ <strong>24/7</strong> emergency response</li>
              <li>✓ <strong>100%</strong> focus on septic systems</li>
              <li>✓ <strong>TCEQ-licensed</strong> professionals</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-max">
          <h2 className="section-title text-center">Our Commitment to You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="font-bold text-lg text-blue-900 mb-3">Expertise</h3>
              <p className="text-gray-700 text-sm">Septic-only specialists. Not a side service. Every team member focused exclusively on septic systems and Hill Country geology.</p>
            </div>
            <div className="card">
              <h3 className="font-bold text-lg text-blue-900 mb-3">Transparency</h3>
              <p className="text-gray-700 text-sm">Written quotes upfront. Photo-documented every job. No hidden fees. Inspection fee credited toward work. You know exactly what you're paying for.</p>
            </div>
            <div className="card">
              <h3 className="font-bold text-lg text-blue-900 mb-3">Reliability</h3>
              <p className="text-gray-700 text-sm">14 years of trust. 4.8-star rating. Licensed and insured. When your septic needs help, we're here—24/7, every day.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-max">
          <h2 className="section-title text-center">Our Credentials</h2>
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
            <ul className="space-y-4 text-gray-700">
              <li>✓ <strong>TCEQ Licensed</strong> - Texas Commission on Environmental Quality certification</li>
              <li>✓ <strong>Fully Insured</strong> - Liability and workmanship coverage</li>
              <li>✓ <strong>OSSF Training</strong> - On-site Sewage Facility specialists</li>
              <li>✓ <strong>Annual Renewal</strong> - Continuing education and compliance verification</li>
              <li>✓ <strong>Blanco County Knowledge</strong> - Certified expertise in local geology, soil conditions, and regulations</li>
              <li>✓ <strong>5-Year Warranty</strong> - Workmanship guarantee on all major repairs and replacements</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="hero-gradient text-white py-16">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-4">14 Years of Trust. It Shows.</h2>
          <p className="text-xl text-blue-100 mb-8">Your septic system deserves experts. Call us.</p>
          <a href="tel:+1XXX-XXX-XXXX" className="btn-primary text-lg inline-block">
            ☎ (XXX) XXX-XXXX • 24/7 Available
          </a>
        </div>
      </section>
    </main>
  );
}
