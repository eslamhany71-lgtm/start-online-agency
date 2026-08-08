import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // كود بيجيب السنة الحالية أوتوماتيك

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* عمود اللوجو والوصف */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png"
                alt="Start Online Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="font-extrabold text-xl text-gray-900 tracking-tight">
                START <span className="text-[#E01E2E]">ONLINE</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md font-medium">
              Start Online Agency is a technology-driven holding company creating software products, business ventures, and digital growth solutions.
            </p>
          </div>

          {/* عمود الشركات */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">Our Companies</h4>
            <ul className="space-y-4">
              <li><Link href="/companies" className="text-gray-500 hover:text-[#E01E2E] text-sm font-medium transition-colors">Niva Dent</Link></li>
              <li><Link href="/companies" className="text-gray-500 hover:text-[#E01E2E] text-sm font-medium transition-colors">Start Online Platform</Link></li>
              <li><Link href="/companies" className="text-gray-500 hover:text-[#E01E2E] text-sm font-medium transition-colors">Engineer Pro</Link></li>
              <li><Link href="/companies" className="text-gray-500 hover:text-[#E01E2E] text-sm font-medium transition-colors">Capital Mind AI</Link></li>
            </ul>
          </div>

          {/* عمود الوكالة */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">Agency</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-500 hover:text-[#E01E2E] text-sm font-medium transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-500 hover:text-[#E01E2E] text-sm font-medium transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-[#E01E2E] text-sm font-medium transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#E01E2E] text-sm font-medium transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* حقوق الملكية */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm font-medium">
            © {currentYear} Start Online Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}