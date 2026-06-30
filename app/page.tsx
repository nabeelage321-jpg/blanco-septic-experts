'use client';

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
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

      {/* TRUST SIGNALS */}
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

      {/* URGENCY */}
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

      {/* WHY CHOOSE US */}
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

      {/* SERVICES PREVIEW */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container-max">
          <h2 className="section-title text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Septic Tank Pumping',
                desc: 'Regular maintenance every 3-5 years. We pump, inspect for damage, and provide detailed reports.',
                details: 'Blanco limestone soil may require more frequent pumping due to mineral buildup.'
              },
              {
                title: '24/7 Emergency Repair',
                desc: 'Backup? Odor? Wet lawn? We diagnose and fix. Same-day service for urgent issues.',
                details: 'Hill Country groundwater rises in spring—backups common March-May.'
              },
              {
                title: 'Tank Inspection',
                desc: desc: "Professional inspection with photos. Know your system's health before problems develop.",
                details: 'Catch issues early: cracked tanks, failed drain fields, clogged vents.'
              },
              {
                title: 'Drain Field Repair',
                desc: 'Failing drain field? We fix it. Limestone clay specialists with proven solutions.',
                details: 'Blanco soil conditions require specialized drain field engineering.'
              },
              {
                title: 'Tank Replacement',
                desc: 'New tank installation built for Hill Country freeze-thaw cycles and limestone soil.',
                details: 'We handle permits, installation, and warranty. TCEQ-compliant.'
              },
              {
                title: 'Preventive Maintenance Plans',
                desc: 'Regular monitoring prevents costly failures. Choose annual or multi-year plans.',
                details: 'Recommended for older systems and limestone-challenged properties.'
              }
            ].map((service, idx) => (
              <div key={idx} className="card">
                <h3 className="text-lg font-bold text-blue-900 mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm mb-3">{service.desc}</p>
                <p className="text-xs text-gray-600 italic border-t pt-3">{service.details}</p>
                <a href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`} className="text-blue-600 text-sm font-bold hover:text-blue-800 mt-3 inline-block">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEASONAL CALENDAR */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <h2 className="section-title text-center">Blanco Septic Calendar: When Problems Strike</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                month: 'Jan-Feb',
                season: 'Winter',
                risk: '🟢 LOW',
                detail: 'Cold weather slows bacterial activity. Good time for inspections.'
              },
              {
                month: 'Mar-May',
                season: 'Spring',
                risk: '🔴 HIGH',
                detail: 'Heavy rains raise water table. Limestone clogs drain fields. Backups peak.'
              },
              {
                month: 'Jun-Aug',
                season: 'Summer',
                risk: '🟡 MEDIUM',
                detail: 'Heat stresses system. Monitor drain field. Watch for odors.'
              },
              {
                month: 'Sep-Nov',
                season: 'Fall',
                risk: '🟡 MEDIUM',
                detail: 'Leaves clog vents. Prep for winter freeze-thaw. Early pumping recommended.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 p-6 rounded-lg">
                <p className="text-xs font-bold text-blue-600 mb-2">{item.month}</p>
                <h4 className="font-bold text-gray-900 mb-2">{item.season}</h4>
                <p className="text-2xl font-bold mb-3">{item.risk}</p>
                <p className="text-sm text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-16 bg-gray-50">
        <div className="container-max">
          <h2 className="section-title text-center">How We Compare</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Generic Plumber</th>
                  <th>Chain Company</th>
                  <th>Blanco Septic Experts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">Septic Specialists</td>
                  <td><span className="xmark">✗ No</span></td>
                  <td><span className="xmark">✗ No</span></td>
                  <td><span className="checkmark">✓ Yes</span></td>
                </tr>
                <tr>
                  <td className="font-bold">Hill Country Experts</td>
                  <td><span className="xmark">✗ No</span></td>
                  <td><span className="xmark">✗ No</span></td>
                  <td><span className="checkmark">✓ Limestone specialists</span></td>
                </tr>
                <tr>
                  <td className="font-bold">Transparent Pricing</td>
                  <td><span className="xmark">✗ Hidden fees</span></td>
                  <td><span className="xmark">✗ Call for quote</span></td>
                  <td><span className="checkmark">✓ Written estimates</span></td>
                </tr>
                <tr>
                  <td className="font-bold">Photo Documentation</td>
                  <td><span className="xmark">✗ No</span></td>
                  <td><span className="xmark">✗ No</span></td>
                  <td><span className="checkmark">✓ Every job</span></td>
                </tr>
                <tr>
                  <td className="font-bold">24/7 Emergency</td>
                  <td><span className="xmark">✗ No</span></td>
                  <td><span className="checkmark">✓ Maybe</span></td>
                  <td><span className="checkmark">✓ Always</span></td>
                </tr>
                <tr>
                  <td className="font-bold">Local Since</td>
                  <td>Unknown</td>
                  <td>Corporate chain</td>
                  <td><span className="checkmark">✓ 2010 (14 years)</span></td>
                </tr>
                <tr>
                  <td className="font-bold">Licensed TCEQ</td>
                  <td><span className="xmark">✗ Maybe</span></td>
                  <td><span className="checkmark">✓ Corporate</span></td>
                  <td><span className="checkmark">✓ Personal + team</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-blue-50">
        <div className="container-max">
          <h2 className="section-title text-center">Our 6-Step Process</h2>
          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Phone Triage (2-5 min)',
                desc: 'Tell us what\'s happening: sounds, smells, location of problem. We confirm urgency and gather details.'
              },
              {
                step: '02',
                title: 'Full Inspection (30-60 min)',
                desc: 'On-site inspection of tank, drain field, vents, and foundation. Every entry point documented with GPS photos.'
              },
              {
                step: '03',
                title: 'Transparent Quote (24 hours)',
                desc: 'Written photo report with pricing, timeline, and priority breakdown. Inspection fee credited toward any approved work.'
              },
              {
                step: '04',
                title: 'Pumping/Repair (1-3 days)',
                desc: 'Fast turnaround. Safe, professional work. All limestone-specific solutions for Blanco County soil.'
              },
              {
                step: '05',
                title: 'Sanitation & Restoration (same day)',
                desc: 'HEPA-vacuum droppings, apply enzyme deodorizer, restore insulation where needed. Odor eliminated.'
              },
              {
                step: '06',
                title: '7-Day Follow-Up',
                desc: 'Verify long-term fix. Photo proof for your records. Questions? We\'re here 24/7.'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 bg-white p-6 rounded-lg border border-blue-200">
                <div className="text-4xl font-bold text-blue-900 min-w-12">{item.step}</div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <h2 className="section-title text-center">Trusted by Blanco Neighbors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah M.',
                location: 'Dripping Springs',
                rating: 5,
                review: 'Professional and fair. Our old tank showed cracks. They explained everything, gave options, and installed new tank perfectly. Photo report was detailed.'
              },
              {
                name: 'James T.',
                location: 'Johnson City',
                rating: 5,
                review: 'Backed up at 2 AM. They arrived in under 2 hours, diagnosed limestone clogging, pumped, and sanitized. Life-saver. Highly recommend for emergencies.'
              },
              {
                name: 'Maria L.',
                location: 'Blanco Center',
                rating: 5,
                review: 'Clear pricing upfront. No surprises. Inspection fee credited toward pumping. The photo report showed exactly what they did. Trustworthy.'
              },
              {
                name: 'Robert K.',
                location: 'Stonewall',
                rating: 5,
                review: 'Drain field failing due to limestone buildup. They explained the Hill Country geology issue. Fixed it right. Still working great 2 years later.'
              },
              {
                name: 'Jennifer P.',
                location: 'Wimberley',
                rating: 5,
                review: 'New to the area, didn\'t know when to pump. They set up a maintenance plan. Spring inspection caught issues before disaster.'
              },
              {
                name: 'David H.',
                location: 'Blanco',
                rating: 5,
                review: 'Local guy who actually knows septic, not corporate chain. 14 years serving Blanco. That\'s experience you can trust.'
              }
            ].map((item, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-lg">{'⭐'.repeat(item.rating)}</div>
                </div>
                <p className="text-gray-900 mb-4 italic">"{item.review}"</p>
                <div className="border-t border-blue-300 pt-4">
                  <p className="font-bold text-blue-900">{item.name}</p>
                  <p className="text-sm text-blue-700">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ FOR AI */}
      <section className="py-16 bg-gray-50">
        <div className="container-max">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                q: 'How often should I pump my septic tank in Blanco?',
                a: 'Every 3-5 years for average household (4 people, 1000+ gal/day usage). Blanco limestone soil and clay may require more frequent pumping (2-3 years) due to mineral buildup and drain field clogging. Let us inspect to recommend your schedule.'
              },
              {
                q: 'What causes septic backups in Hill Country?',
                a: 'Spring rains raise groundwater tables in Blanco County limestone clay soil. Tree roots penetrate tanks and drain fields. Glen Rose Limestone mineral deposits clog drain lines. Early pumping (Feb-March) prevents backups during April-May wet season.'
              },
              {
                q: 'How much does septic pumping cost in Blanco, Texas?',
                a: 'Typical pumping: $300-$600. Inspection included. Tank size, distance from truck access, and soil conditions affect price. We provide written estimates upfront. Inspection fee ($150-200) is credited toward any approved work.'
              },
              {
                q: 'Is septic emergency service really urgent?',
                a: 'YES. Backed-up sewage poses health risks (E. coli, hepatitis A, salmonella) and contaminates groundwater. Blanco County sits atop Edwards and Trinity Aquifers serving 3+ million residents. Backup = environmental hazard + potential fines. We respond 24/7.'
              },
              {
                q: 'What if my tank is failing or needs replacement?',
                a: 'We inspect, diagnose cracking/leaks, and provide replacement options. New tanks built for Blanco freeze-thaw cycles and limestone soil. TCEQ-compliant installation. We handle permits, installation, testing, and 5-year warranty.'
              },
              {
                q: 'Do you handle limestone clogging issues?',
                a: 'YES. Blanco limestone clay is our specialty. Glen Rose Limestone mineral deposits clog drain fields. We use limestone-specific solutions: drain field repair/replacement, sand filters, aerobic systems, and specialized pumping. This is our expertise.'
              },
              {
                q: 'How do I know if my drain field is failing?',
                a: 'Signs: wet lawn patches, slow indoor drains, odors near drain field, sewage backup indoors. Blanco limestone soil accelerates drain field failure. We inspect with soil probes and recommend repair/replacement. Early action saves thousands.'
              },
              {
                q: 'What if I have an old tank from the 1970s?',
                a: 'Likely concrete (cracks over 50 years) or fiberglass (deteriorates). We inspect for integrity. Older tanks near end of life. Replacement now prevents emergency backup later. Better to plan than panic.'
              },
              {
                q: 'Do you pump tanks for rental properties or vacation homes?',
                a: 'Yes. Rental property specialists. We coordinate with landlords/property managers. Document everything with photos. Discreet service (no marked trucks if requested). Multi-unit properties get discounted maintenance plans.'
              },
              {
                q: 'What about aerobic septic systems?',
                a: 'Aerobic systems work well in Blanco limestone clay soil (better than conventional). We service, maintain, and repair all aerobic brands. More frequent pumping (2-3x yearly) than conventional, but superior performance in challenging soil.'
              },
              {
                q: 'How do I prepare for a septic inspection?',
                a: 'Know your system location (access ports, drain field area). Mark any wet spots or drain problems. Avoid heavy water use 2-3 days before inspection. Have a list of previous service records if available. We do the rest.'
              },
              {
                q: 'Why should I choose Blanco Septic Experts over competitors?',
                a: '14 years local experience. Septic-only focus (not 20 services). Hill Country limestone specialists. Photo-documented every job. Transparent pricing upfront. 24/7 emergency. Licensed TCEQ. Real person picks up—not corporate call center. We know your soil and your problems.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-blue-900 mb-3 text-lg">{item.q}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': [
                { '@type': 'Question', 'name': 'How often pump septic Blanco?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Every 3-5 years. Blanco limestone may need 2-3 years.' } },
                { '@type': 'Question', 'name': 'Septic backup causes Hill Country?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Spring rains, limestone clay, tree roots, mineral deposits.' } }
              ]
            })
          }} />
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <h2 className="section-title text-center">Service Areas: Blanco County & Surrounding</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['Blanco Center', 'Dripping Springs', 'Johnson City', 'Stonewall', 'Wimberley', 'Blanco County', 'Pedernales River', 'Donner Park', 'Blanco Trails', 'Cypress Valley'].map((area, idx) => (
              <div key={idx} className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 text-center hover:bg-blue-100 transition">
                <p className="font-bold text-blue-900">📍 {area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hero-gradient text-white py-16">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-4">Don't Wait Until Backup Happens</h2>
          <p className="text-xl text-blue-100 mb-8">Spring rains are coming. Blanco limestone soil doesn't forgive delays. Pump before wet season.</p>
          <a href="tel:+1XXX-XXX-XXXX" className="btn-primary text-lg inline-block mb-4">
            ☎ Call Now for Free Estimate: (XXX) XXX-XXXX
          </a>
          <p className="text-sm text-blue-100">24/7 Emergency Service • Licensed & Insured TCEQ • Serving Blanco Since 2010</p>
        </div>
      </section>
    </main>
  );
}
