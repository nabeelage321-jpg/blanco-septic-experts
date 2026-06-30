import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Septic Tank Pumping Blanco TX | Blanco Septic Experts',
  description: 'Professional septic tank pumping, inspection, repair & maintenance in Blanco, Texas. Licensed, certified, 24/7 emergency service. Hill Country specialists since 2010. Serving Blanco, Dripping Springs, Johnson City.',
  keywords: 'septic tank pumping Blanco TX, septic inspection, emergency septic repair, septic maintenance, Hill Country septic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'Blanco Septic Experts',
            'description': 'Professional septic tank pumping and services in Blanco, Texas',
            'image': 'https://blancosepticexperts.com/logo.png',
            'telephone': '(XXX) XXX-XXXX',
            'email': 'contact@blancosepticexperts.com',
            'url': 'https://blancosepticexperts.com',
            'priceRange': '$$$',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Blanco',
              'addressRegion': 'TX',
              'postalCode': '78606',
              'addressCountry': 'US'
            },
            'openingHoursSpecification': {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              'opens': '00:00',
              'closes': '23:59'
            },
            'aggregateRating': {
              '@type': 'AggregateRating',
              'ratingValue': '4.8',
              'reviewCount': '147'
            },
            'areaServed': [
              { '@type': 'City', 'name': 'Blanco' },
              { '@type': 'City', 'name': 'Dripping Springs' },
              { '@type': 'City', 'name': 'Johnson City' },
              { '@type': 'City', 'name': 'Stonewall' },
              { '@type': 'City', 'name': 'Wimberley' }
            ]
          })
        }} />
      </head>
      <body className="bg-white">
        {/* HEADER */}
        <header className="bg-blue-900 text-white sticky top-0 z-50 shadow-lg">
          <div className="container-max py-3 flex justify-between items-center">
            <div>
              <div className="text-2xl font-bold">Blanco Septic Experts</div>
              <p className="text-sm text-blue-100">Hill Country Specialists Since 2010</p>
            </div>
            <div className="flex gap-6 items-center">
              <nav className="hidden md:flex gap-4">
                <a href="/" className="hover:text-blue-200 transition">Home</a>
                <a href="/services" className="hover:text-blue-200 transition">Services</a>
                <a href="/locations" className="hover:text-blue-200 transition">Locations</a>
                <a href="/about" className="hover:text-blue-200 transition">About</a>
                <a href="/blog" className="hover:text-blue-200 transition">Blog</a>
              </nav>
              <a href="tel:+1XXX-XXX-XXXX" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-bold">
                ☎ (XXX) XXX-XXXX
              </a>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        {children}

        {/* FOOTER */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container-max grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Blanco Septic Experts</h4>
              <p className="text-gray-400 text-sm">Licensed, certified, and serving Hill Country since 2010. Expert septic solutions for Blanco County.</p>
              <div className="mt-4 text-sm text-gray-400">
                <p>📞 (XXX) XXX-XXXX</p>
                <p>✉️ contact@blancosepticexperts.com</p>
                <p>24/7 Emergency Service</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/services" className="hover:text-white">Our Services</a></li>
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/process" className="hover:text-white">Our Process</a></li>
                <li><a href="/faq" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Service Areas</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>Blanco, TX</li>
                <li>Dripping Springs, TX</li>
                <li>Johnson City, TX</li>
                <li>Stonewall, TX</li>
                <li>Wimberley, TX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Blanco Septic Experts. All rights reserved. | Licensed & Insured</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
