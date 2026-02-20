import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo.jpeg"
              alt="Stadi Research & Analytics"
              width={180}
              height={50}
              className="h-8 w-auto brightness-0 invert mb-6"
            />
            <p className="text-sm leading-relaxed text-neutral-400 max-w-md">
              Unleashing the power of data through advanced analytics, research methodologies, and data science to drive informed decision-making across East Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="text-sm hover:text-primary transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-sm hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>Nairobi, Kenya</li>
              <li>
                <a href="tel:+254710331173" className="hover:text-primary transition-colors">
                  +254 710 331 173
                </a>
              </li>
              <li>
                <a href="mailto:hello@stadianalytics.com" className="hover:text-primary transition-colors">
                  hello@stadianalytics.com
                </a>
              </li>
              <li>
                <a href="https://www.stadianalytics.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  www.stadianalytics.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-400">
              &copy; {new Date().getFullYear()} Stadi Research & Analytics. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-neutral-400 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-neutral-400 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
