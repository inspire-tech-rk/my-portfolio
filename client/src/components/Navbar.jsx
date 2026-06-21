import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navStyle = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold"
      : "text-gray-300 hover:text-blue-500";

  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1f2428] shadow-lg">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3 text-white text-xl sm:text-2xl font-bold">
          <FaUserCircle />
          <span>Rampal Gupta</span>
        </div>

        <div className="hidden md:flex gap-10 text-lg">
          <NavLink to="/" className={navStyle}>Home</NavLink>
          <NavLink to="/about" className={navStyle}>About</NavLink>
          <NavLink to="/services" className={navStyle}>Services</NavLink>
          <NavLink to="/projects" className={navStyle}>Projects</NavLink>
          <NavLink to="/contact" className={navStyle}>Contact</NavLink>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#1f2428] border-t border-white/10 px-6 pb-6">
          <div className="flex flex-col gap-5 text-lg">
            <NavLink onClick={closeMenu} to="/" className={navStyle}>Home</NavLink>
            <NavLink onClick={closeMenu} to="/about" className={navStyle}>About</NavLink>
            <NavLink onClick={closeMenu} to="/services" className={navStyle}>Services</NavLink>
            <NavLink onClick={closeMenu} to="/contact" className={navStyle}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}