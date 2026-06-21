import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaDownload,
  FaReact,
  FaNodeJs,
  FaFolderOpen,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

export default function Home() {
  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "REST API Developer",
    "Problem Solver",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative min-h-screen pt-24 overflow-hidden bg-[linear-gradient(rgba(8,12,20,0.86),rgba(10,10,15,0.9)),url('https://images.unsplash.com/photo-1497366754035-f200968a6e72')] bg-cover bg-center flex items-center">
      <div className="absolute top-28 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 relative z-10">
        <div className="text-center lg:text-left">
          <p className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-300 font-semibold mb-4 text-sm sm:text-base">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
            Hi, I'm <br /> Rampal Gupta
          </h1>

          <h2 className="text-2xl sm:text-3xl text-blue-400 font-bold mt-4 h-10 overflow-hidden">
            <span
              key={index}
              className="inline-block animate-[slideUp_0.6s_ease-in-out]"
            >
              {roles[index]}
            </span>
          </h2>

          <p className="text-gray-200 mt-5 text-base sm:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
            I build responsive MERN stack web applications using React.js,
            Node.js, Express.js and MongoDB with clean UI and REST API
            integration.
          </p>

          <div className="flex lg:hidden justify-center mt-6">
            <img
              src="/profile.png"
              alt="profile"
              className="w-[220px] h-[290px] object-contain"
            />
          </div>

          <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
            <span className="px-4 py-2 rounded-full bg-white/10 text-white border border-white/10 flex items-center gap-2 text-sm sm:text-base">
              <FaReact className="text-blue-400" /> React
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 text-white border border-white/10 flex items-center gap-2 text-sm sm:text-base">
              <FaNodeJs className="text-green-400" /> Node.js
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 text-white border border-white/10 flex items-center gap-2 text-sm sm:text-base">
              <SiExpress /> Express
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 text-white border border-white/10 flex items-center gap-2 text-sm sm:text-base">
              <SiMongodb className="text-green-500" /> MongoDB
            </span>
          </div>

          <div className="mt-7 flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              to="/about"
              className="bg-blue-600 text-white px-7 py-3.5 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-blue-700 hover:-translate-y-1 transition"
            >
              <FaUser /> Know More
            </Link>

            <Link
              to="/projects"
              className="bg-purple-600 text-white px-7 py-3.5 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-purple-700 hover:-translate-y-1 transition"
            >
              <FaFolderOpen /> Projects
            </Link>

            <Link
              to="/contact"
              className="border border-white/70 text-white px-7 py-3.5 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-white hover:text-black hover:-translate-y-1 transition"
            >
              <FaEnvelope /> Hire Me
            </Link>

            <a
              href="/resume.pdf"
              download
              className="bg-white/10 border border-white/20 text-white px-7 py-3.5 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-white/20 hover:-translate-y-1 transition"
            >
              <FaDownload /> Resume
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-end relative">
          <div className="absolute w-[380px] h-[380px] bg-gradient-to-br from-blue-600/30 to-purple-700/30 rounded-full blur-2xl"></div>

          <div className="relative rounded-[36px] bg-white/10 border border-white/20 backdrop-blur-md px-7 pt-7 shadow-2xl">
            <img
              src="/profile.png"
              alt="profile"
              className="relative w-[390px] h-[510px] object-contain object-bottom drop-shadow-2xl"
            />

            <div className="absolute -left-6 top-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-white shadow-xl">
              <p className="text-sm text-gray-300">Full Stack</p>
              <h3 className="text-xl font-bold text-blue-400">Developer</h3>
            </div>

            <div className="absolute -right-6 bottom-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-white shadow-xl">
              <p className="text-sm text-gray-300">Projects</p>
              <h3 className="text-xl font-bold text-cyan-400">MERN Stack</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}