import React, { useState } from "react";
import axios from "axios";
import ContactImg from "../assets/Images/wallpaper3.jpg"; // Import your image

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false); // Popup state
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://my-portfolio-y7q8.onrender.com/api/contact", formData);
      setStatus("✅ Message sent successfully!");
      setShowPopup(true); // Show popup
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setShowPopup(false); // Hide popup after 3 seconds
      }, 3000);
    } catch (error) {
      setStatus("❌ Failed to send message. Try again!");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      {/* Contact Heading */}
      <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-400 mt-2 pb-8">Message Me</p>

      {/* Contact Form Box */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl transform transition duration-300 hover:scale-102">

        {/* Left Side - Image Inside Form */}
        <div className="md:w-2/3 w-full flex items-center justify-center">
          <img src={ContactImg} alt="Contact" className="w-full h-72 md:h-auto object-cover rounded-lg shadow-lg" />
        </div>

        {/* Right Side - Form Fields */}
        <div className="md:w-1/3 w-full p-6 flex flex-col justify-center">

          <form onSubmit={handleSubmit} className="space-y-6 relative">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 outline-none transition-all duration-300 hover:bg-gray-600 focus:ring-2 focus:ring-blue-400 shadow-md" />

            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 outline-none transition-all duration-300 hover:bg-gray-600 focus:ring-2 focus:ring-blue-400 shadow-md" />

            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 outline-none transition-all duration-300 hover:bg-gray-600 focus:ring-2 focus:ring-blue-400 shadow-md h-24"></textarea>

            <button type="submit" className="bg-blue-500 w-full py-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg transform hover:scale-105">
              Send Message
            </button>

            {/* Popup Message */}
            {showPopup && (
              <div className="absolute -top-12 right-0 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg text-sm animate-slide-in">
                {status}
              </div>
            )}
          </form>
        </div>

      </div>

    </div>
  );
};

export default Contact;
