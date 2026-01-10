import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-400"
      : "text-gray-300 hover:text-yellow-400 transition";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Duma Groups Logo"
            className="h-10 w-10 object-contain"
          />
          <div className="leading-tight">
            <h1 className="text-lg font-bold text-yellow-400">
              DUMA GROUPS
            </h1>
            <p className="text-xs text-gray-300">
              The Adventure Never Ends
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="flex flex-col items-center gap-6 py-6 text-sm font-medium">
            <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/services" className={linkClass}>
              Services
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
