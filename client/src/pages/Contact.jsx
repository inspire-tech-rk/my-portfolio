import ContactForm from "../components/ContactForm";
import { FaEnvelopeOpenText } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
      <div className="absolute left-12 top-44 text-blue-600 text-8xl opacity-80">
        ❤
      </div>

      <div className="absolute right-24 bottom-32 text-green-700 text-8xl opacity-80">
        ✉
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h1 className="text-center text-5xl font-extrabold text-blue-600 flex items-center justify-center gap-4">
          <FaEnvelopeOpenText />
          Contact Me
        </h1>

        <p className="text-center text-gray-700 text-xl mt-8 max-w-5xl mx-auto">
          Have a project, idea, or collaboration in mind? Let's build it
          together! I specialize in{" "}
          <b>
            web development, React, Node.js, UI/UX, digital marketing, and SEO
            optimization
          </b>
          .
        </p>

        <div className="mt-16">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}