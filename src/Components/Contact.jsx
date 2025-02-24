import React, { useState } from "react";
import axios from "axios";
import ContactImg from '../assets/Images/wallpaper3.jpg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:5000/api/contact", formData)
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("❌ Failed to send message. Try again!");
    }
  };

  return (
    
    <div id="contact" className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form
        className="bg-gray-800 p-6 rounded-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 text-white rounded h-24"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 w-full py-2 rounded hover:bg-blue-600">
          Send Message
        </button>
        {status && <p className="mt-3 text-center">{status}</p>}

      </form>
    </div>
  );
};

export default Contact;
