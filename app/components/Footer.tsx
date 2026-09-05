import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-[#E01E2E] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center md:text-left leading-tight">
            Ready to Build, Market <br /> & Scale Your Business?
          </h2>
          <div className="flex flex-col items-center md:items-end text-white/90 text-sm font-medium">
            <p className="mb-4 text-center md:text-right">Let's create something extraordinary together.<br/>Schedule a free consultation and take the first step toward digital growth.</p>
            <Link 
              href="/contact" 
              className="bg-white text-[#E01E2E] px-6 py-3 rounded-md font-bold text-sm hover:bg-gray-100 transition-all flex items-center gap-2"
            >
              📅 Schedule Consultation →
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#0A0A0A] pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 border-b border-gray-800 pb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-[#E01E2E] text-4xl font-extrabold">S</span>
              <div className="flex flex-col">
                <span className="text-white font-black text-xl leading-none tracking-tight">START ONLINE</span>
                <span className="text-gray-500 text-[10px] font-bold tracking-[0.3em] mt-1">AGENCY</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm font-medium mb-6 max-w-xs leading-relaxed">
              We build, market, and scale digital businesses through innovative marketing and technology.
            </p>
            <div className="flex gap-4">
              {['in', 'f', 'ig', 'x'].map((social) => (
                <div key={social} className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#E01E2E] hover:text-[#E01E2E] cursor-pointer transition-all">
                  <span className="text-xs font-bold uppercase">{social}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Navigation</h3>
            <ul className="space-y-3 text-sm font-medium text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/companies" className="hover:text-white transition-colors">Our Companies</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm font-medium text-gray-400 mb-8">
              <li>Digital Marketing</li>
              <li>Content Production</li>
              <li>Websites</li>
              <li>Ecommerce</li>
              <li>Custom Systems</li>
              <li>AI / Automation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li className="flex gap-3"><span className="text-gray-500">📍</span> Cairo, Egypt</li>
              <li className="flex gap-3"><span className="text-gray-500">✉️</span> hello@startonline.agency</li>
              <li className="flex gap-3"><span className="text-gray-500">📞</span> +20 122 140 5309</li>
              <li className="flex gap-3"><span className="text-gray-500">🕒</span> Mon - Fri: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 text-xs font-bold text-gray-500">
          <p>© 2026 Start Online Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}