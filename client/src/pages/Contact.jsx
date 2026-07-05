import ContactForm from "../components/ContactForm";
import {
  FaEnvelopeOpenText,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden">
      <div className="absolute top-28 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="text-center">
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            Get In Touch
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mt-4 flex items-center justify-center gap-4">
            <FaEnvelopeOpenText className="text-blue-500" />
            Contact Me
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-6 max-w-4xl mx-auto leading-relaxed">
            Have a project, idea, or collaboration in mind? Let's build it
            together using <b>React, Node.js, Express, MongoDB</b> and{" "}
            <b>Tailwind CSS</b>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 items-start">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-3xl p-6 text-white shadow-xl">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-5">
                <FaEnvelopeOpenText />
              </div>
              <h3 className="text-xl font-bold">Email</h3>
              <p className="text-gray-300 mt-2">rg962136@gmail.com</p>
            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-3xl p-6 text-white shadow-xl">
              <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center text-2xl mb-5">
                <FaPhoneAlt />
              </div>
              <h3 className="text-xl font-bold">Phone</h3>
              <p className="text-gray-300 mt-2">+91 7704064215</p>
            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-3xl p-6 text-white shadow-xl">
              <div className="w-14 h-14 bg-cyan-600 rounded-2xl flex items-center justify-center text-2xl mb-5">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-xl font-bold">Location</h3>
              <p className="text-gray-300 mt-2">India</p>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white/10 border border-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6 text-white">
              <FaPaperPlane className="text-blue-400 text-2xl" />
              <h2 className="text-2xl font-bold">Send a Message</h2>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}