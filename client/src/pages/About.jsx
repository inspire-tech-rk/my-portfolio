import {
  FaCheckCircle,
  FaEnvelope,
  FaDownload,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Who I Am
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
            ABOUT ME
          </h1>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 text-lg mt-6 max-w-4xl mx-auto">
            Hi! I'm Rampal Gupta, a passionate Full-Stack Developer focused on
            creating modern, responsive and user-friendly web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-16 lg:mt-20">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-6 bg-blue-500/20 rounded-full blur-3xl"></div>

              <div className="relative w-[260px] h-[330px] sm:w-[320px] sm:h-[400px] md:w-[390px] md:h-[480px] rounded-[40px] bg-white shadow-2xl border border-blue-100 overflow-hidden flex items-end justify-center">
                <img
                  src="/profile.png"
                  alt="Rampal Gupta"
                  className="w-full h-full object-contain object-bottom p-2"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white px-6 py-4 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold">Full Stack</h3>
                <p className="text-sm text-blue-100">Project Experience</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              <span className="text-blue-600">Hi, I'm</span> Rampal Gupta 👋
            </h2>

            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              A creative and detail-oriented Full-Stack Developer who transforms
              ideas into elegant, scalable and professional digital solutions.
            </p>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              I specialize in building high-performance web applications using{" "}
              <b>React, Node.js, Express, MongoDB</b> and <b>Tailwind CSS</b>. I
              focus on clean UI, smooth user experience, API integration,
              responsive design and MVC structure.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-5 rounded-2xl shadow border">
                <FaCheckCircle className="text-blue-600 text-2xl mb-2" />
                <h3 className="font-bold text-lg">Experience</h3>
                <p className="text-gray-600">MERN Projects & Internship</p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow border">
                <FaCheckCircle className="text-blue-600 text-2xl mb-2" />
                <h3 className="font-bold text-lg">Location</h3>
                <p className="text-gray-600">India</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full flex items-center gap-2 font-semibold">
                <FaReact /> React
              </span>
              <span className="px-4 py-2 bg-green-50 text-green-600 rounded-full flex items-center gap-2 font-semibold">
                <FaNodeJs /> Node.js
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full flex items-center gap-2 font-semibold">
                <SiExpress /> Express
              </span>
              <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full flex items-center gap-2 font-semibold">
                <SiMongodb /> MongoDB
              </span>
              <span className="px-4 py-2 bg-cyan-50 text-cyan-600 rounded-full flex items-center gap-2 font-semibold">
                <SiTailwindcss /> Tailwind
              </span>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-5">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-blue-700 hover:-translate-y-1 transition"
              >
                <FaEnvelope /> Get in Touch
              </Link>

              <a
                href="/resume.pdf"
                download
                className="border border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition"
              >
                <FaDownload /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}