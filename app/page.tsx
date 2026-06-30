export default function Home() {
  return (
    <main>
      <section className="hero-gradient text-white py-24">
        <div className="container-max">
          <div className="mb-8">
            <div className="badge mb-4 bg-yellow-100 text-yellow-900">#1 Septic Specialists in Blanco County</div>
            <h1 className="text-6xl font-bold mb-4 leading-tight">Septic Tank Pumping & Repair in Blanco, TX</h1>
            <p className="text-2xl text-blue-100 mb-8">Expert septic solutions for Hill Country homes. Licensed, certified, 24/7 emergency service.</p>
            <p className="text-lg text-blue-100 mb-6">Serving Blanco - Dripping Springs - Johnson City - Stonewall - Wimberley</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="tel:+1XXX-XXX-XXXX" className="btn-primary text-lg inline-block">
              Call Now: (XXX) XXX-XXXX
            </a>
            <a href="#services" className="btn-secondary text-lg inline-block">
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
