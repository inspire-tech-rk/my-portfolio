import { useState } from "react";
import axios from "axios";
import {
  FaUserCircle,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post("http://localhost:5000/api/contact", form);

      alert("Message sent successfully");

      setForm({
        fullName: "",
        email: "",
        message: "",
      });
    } catch {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 max-w-2xl mx-auto"
    >
      <label className="font-bold flex items-center gap-2 mb-2">
        <FaUserCircle className="text-blue-600" />
        Full Name
      </label>

      <input
        type="text"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        placeholder="Enter your full name"
        required
        className="w-full mb-6 px-5 py-4 rounded-full border shadow focus:outline-blue-500"
      />

      <label className="font-bold flex items-center gap-2 mb-2">
        <FaEnvelope className="text-blue-600" />
        Email Address
      </label>

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter your email address"
        required
        className="w-full mb-6 px-5 py-4 rounded-full border shadow focus:outline-blue-500"
      />

      <label className="font-bold flex items-center gap-2 mb-2">
        <FaCommentDots className="text-blue-600" />
        Your Message
      </label>

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Write your message..."
        required
        rows="5"
        className="w-full mb-6 px-5 py-4 rounded-2xl border shadow focus:outline-blue-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-full text-white font-bold text-lg sm:text-xl bg-gradient-to-r from-blue-600 to-purple-700 hover:scale-105 transition flex items-center justify-center gap-3"
      >
        <FaPaperPlane />
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}