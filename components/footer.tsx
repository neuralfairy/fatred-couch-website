import Link from "next/link"
import { Zap, Mail, Phone, MapPin, Shield, Award } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Fatredcouch</span>
            </div>
            <p className="text-gray-400">
              Intelligent Email Marketing Automation platform for B2B businesses. Automate personalized campaigns and
              drive lead engagement.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Raleigh, NC</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://salescentri.com/resources/case-studies?utm_source=fatredcouch.com&utm_medium=footer&utm_campaign=resources"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="https://salescentri.com/resources/whitepapers-ebooks?utm_source=fatredcouch.com&utm_medium=footer&utm_campaign=resources"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link
                  href="https://salescentri.com/resources/tutorials-webinars?utm_source=fatredcouch.com&utm_medium=footer&utm_campaign=resources"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="https://salescentri.com/docs/api-reference?utm_source=fatredcouch.com&utm_medium=footer&utm_campaign=resources"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  API Docs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Trust */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact & Trust</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>hello@fatredcouch.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 (919) 555-0123</span>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <div className="flex items-center space-x-1 text-xs text-green-400">
                  <Shield className="w-4 h-4" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-blue-400">
                  <Award className="w-4 h-4" />
                  <span>GDPR Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">© 2024 Fatredcouch Solutions. All rights reserved.</div>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="text-center mt-4 pt-4 border-t border-gray-800">
          <p className="text-xs text-gray-500">
            Powered by{" "}
            <Link
              href="https://salescentri.com?utm_source=fatredcouch.com&utm_medium=footer&utm_campaign=partner_network"
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              Sales Intelligence Platform
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
