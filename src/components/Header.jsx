// src/components/Header.jsx
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full z-50 mt-6 px-4">
      <div
        className="
          w-full max-w-2xl mx-auto px-6 py-3.5
          rounded-2xl
          bg-white/10 backdrop-blur-md
          border border-white/20
          shadow-xl
        "
      >
        {/* Navigation Links */}
        <nav
          className="
            flex flex-col sm:flex-row 
            items-center justify-center 
            gap-y-3 sm:gap-y-0 sm:gap-x-16 
            text-sm sm:text-base
          "
        >
          <Link to="/" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link to="/research" className="hover:text-purple-400 transition-colors">
            Research
          </Link>
          <Link to="/publication" className="hover:text-purple-400 transition-colors">
            Publication
          </Link>
          <Link to="/activity" className="hover:text-purple-400 transition-colors">
            Recognition
          </Link>
          <Link to="/supervision" className="hover:text-purple-400 transition-colors">
            Supervision
          </Link>
        </nav>
      </div>
    </header>
  );
}
