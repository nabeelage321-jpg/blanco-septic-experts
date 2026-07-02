'use client';
export default function Blog() {
  const posts = [
    { title: 'Spring Rains & Septic Backups', slug: 'spring-rains', date: 'June 2024', category: 'Seasonal', excerpt: 'Spring rains raise groundwater tables in Blanco. Early pumping prevents backups.' },
    { title: 'Limestone Clogging in Blanco', slug: 'limestone-clogging', date: 'May 2024', category: 'Technical', excerpt: 'Glen Rose Limestone mineralizes drain fields. Why Blanco fields fail faster.' }
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
          <h2 className="section-title text-center mb-12">Latest Articles</h2>
          <div className="grid gap-6">
            {posts.map((post, idx) => (
              <a key={idx} href={`/blog/${post.slug}`} className="card hover:shadow-lg transition cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-blue-900 flex-1">{post.title}</h3>
                  <span className="badge">{post.category}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <span className="text-blue-600 font-bold hover:text-blue-800">Read More →</span>
              </a>
            ))}
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
