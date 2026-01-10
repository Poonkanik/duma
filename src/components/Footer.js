export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold text-yellow-400">
            DUMA GROUPS
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            The Adventure Never Ends
          </p>
          <p className="text-sm mt-4 max-w-xs">
            Creative branding & graphic design solutions that help
            businesses stand out with confidence.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-yellow-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* SOCIAL + CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Connect With Us
          </h3>

          {/* Social Links */}
          <div className="flex gap-4 mb-6">
            <a
              href="https://www.instagram.com/suryaaachariya?igsh=YWdoanRrdDBvZG90"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/SuryaAachariya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              Facebook
            </a>

            <a
              href="https://wa.me/919080797630"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              WhatsApp
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-sm space-y-2">
            <p>📍 Coimbatore, Tamil Nadu</p>
            <p>📞 +91 90 80 79 76 30</p>
            <p>✉️ duma.groups@gmail.com</p>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Duma Groups. All rights reserved.
      </div>
    </footer>
  );
}
