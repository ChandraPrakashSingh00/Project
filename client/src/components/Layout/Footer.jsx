import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-500 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed text-white/90">
            Welcome to <span className="font-semibold text-yellow-300">VOXINA</span>, 
            a social polling and opinion-sharing platform where users can create polls, vote on topics, and explore public opinions in real time. 
            We are committed to providing a safe, simple, and engaging experience while respecting community standards.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li>
              <Link to="/app/about" className="hover:text-yellow-300 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/app/privacy" className="hover:text-yellow-300 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/app/terms" className="hover:text-yellow-300 transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/app/contact" className="hover:text-yellow-300 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/app/guidelines" className="hover:text-yellow-300 transition">
                Community Guidelines
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-sm leading-relaxed text-white/90">
            📧 Email: <a href="mailto:your-email@domain.com" className="hover:text-yellow-300">your-email@domain.com</a><br/>
            ⏱️ Response time: 24–48 hours
          </p>
        </div>

        {/* Community Rules */}
        <div>
          <h3 className="text-xl font-bold mb-4">Community Guidelines</h3>
          <p className="text-sm leading-relaxed text-white/90">
            Allowed: Respectful opinions, educational & entertainment topics, clean content.<br/>
            Not Allowed: Hate speech, adult content, violence, illegal activities, bullying, misleading polls.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-10 py-6 text-center text-white/80 text-sm">
        © {new Date().getFullYear()} VOXINA. All rights reserved.
      </div>
    </footer>
  );
}
