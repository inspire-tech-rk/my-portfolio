import {
  FaUserCircle,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold flex items-center justify-center md:justify-start gap-2">
            <FaUserCircle /> Rampal Gupta
          </h2>

          <p className="mt-4 text-blue-100">
            Full Stack Developer creating modern, responsive, SEO-friendly web
            solutions with React, Node.js, UI/UX, and digital marketing
            expertise.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>

          <div className="flex flex-col gap-2 text-blue-100">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Me</h3>

          <div className="flex justify-center md:justify-start gap-6 text-4xl">
            <a
              href="https://www.linkedin.com/in/rampal-gupta-0a6b9a32b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/inspire-tech-rk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.instagram.com/inspire_you_r.k.7/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-300 transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}