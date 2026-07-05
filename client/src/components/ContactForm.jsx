import { useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

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
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(`${API_URL}/api/contact`, form);

      alert("Message sent successfully");

      setForm({
        fullName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
   <form
  onSubmit={handleSubmit}
  className="w-full"
>
      <label className="font-semibold text-white flex items-center gap-2 mb-2">
        <FaUserCircle className="text-blue-400" />
        Full Name
      </label>

      <input
        type="text"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        placeholder="Enter your full name"
        required
        className="w-full mb-6 px-5 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
      />

      <label className="font-semibold text-white flex items-center gap-2 mb-2">
        <FaEnvelope className="text-blue-400" />
        Email Address
      </label>

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter your email address"
        required
        className="w-full mb-6 px-5 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
      />

      <label className="font-semibold text-white flex items-center gap-2 mb-2">
        <FaCommentDots className="text-blue-400" />
        Your Message
      </label>

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Write your message..."
        required
        rows="5"
        className="w-full mb-6 px-5 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-2xl text-white font-bold text-lg bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 hover:scale-105 duration-300 flex items-center justify-center gap-3 shadow-lg"
      >
        <FaPaperPlane />
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}