'use client';

export default function Blog() {
  const posts = [
    {
      title: 'Spring Rains & Septic Backups: How Blanco\'s Limestone Soil Creates Risk',
      date: 'March 2024',
      excerpt: 'Every spring, Blanco County\'s groundwater table rises. Combined with Glen Rose Limestone clay soil, this creates perfect conditions for septic backups. Here\'s how to prevent it.',
      category: 'Seasonal'
    },
    {
      title: 'How Often Should You Really Pump Your Septic Tank?',
      date: 'February 2024',
      excerpt: 'The answer: every 3-5 years for average households. But Blanco limestone soil might demand 2-3 years. Learn why your soil matters.',
      category: 'Maintenance'
    },
    {
      title: 'Freeze-Thaw Damage: Protecting Your Septic Tank Through Hill Country Winters',
      date: 'January 2024',
      excerpt: 'Hill Country freeze-thaw cycles can crack concrete tanks and damage drain fields. How to prepare now for spring failures.',
      category: 'Seasonal'
    },
    {
      title: 'Limestone Clogging in Blanco: Why Your Drain Field Fails',
      date: 'December 2023',
      excerpt: 'Glen Rose Limestone doesn\'t just exist below surface—it mineralizes your drain field. What causes it and how modern solutions fix it.',
      category: 'Technical'
    },
    {
      title: 'Signs Your Septic Tank is Failing (Before It\'s Too Late)',
      date: 'November 2023',
      excerpt: 'Wet lawn? Slow drains? Odors? These are warning signs. Catch them early and save thousands on replacement.',
      category: 'Prevention'
    },
    {
      title: 'Why DIY Septic Fixes Don\'t Work in Blanco County',
      date: 'October 2023',
      excerpt: 'Tempting to fix it yourself? Here\'s why Hill Country soil, local regulations, and limestone challenges require professionals.',
      category: 'Education'
    }
  ];

  return (
    <main>
      <section className="hero-gradient text-white py-20">
        <div className="container-max">
          <h1 className="text-5xl font-bold mb-4">Blog & Resources</h1>
          <p className="text-xl text-blue-100">Expert septic advice for Blanco County homeowners.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="grid gap-6">
            {posts.map((post, idx) => (
              <article key={idx} className="card">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-blue-900 flex-1">{post.title}</h3>
                  <span className="badge">{post.category}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <a href="#" className="text-blue-600 font-bold hover:text-blue-800">
                  Read More →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container-max">
          <h2 className="section-title text-center">Quick Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="font-bold text-lg text-blue-900 mb-3">Septic Maintenance Checklist</h3>
              <p className="text-sm text-gray-700 mb-4">Monthly and annual tasks to keep your system healthy.</p>
              <button className="btn-secondary text-sm">Download PDF</button>
            </div>
            <div className="card">
              <h3 className="font-bold text-lg text-blue-900 mb-3">Blanco Water Table Map</h3>
              <p className="text-sm text-gray-700 mb-4">Understand your groundwater levels by neighborhood.</p>
              <button className="btn-secondary text-sm">View Map</button>
            </div>
            <div className="card">
              <h3 className="font-bold text-lg text-blue-900 mb-3">Emergency Response Guide</h3>
              <p className="text-sm text-gray-700 mb-4">What to do if your septic backs up (and what NOT to do).</p>
              <button className="btn-secondary text-sm">Download Guide</button>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-gradient text-white py-16">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-4">Learn More. Protect Your System.</h2>
          <a href="tel:+1XXX-XXX-XXXX" className="btn-primary text-lg inline-block">
            ☎ Questions? Call Us Anytime
          </a>
        </div>
      </section>
    </main>
  );
}
