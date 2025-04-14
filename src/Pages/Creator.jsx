// components/CreateEventForm.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { CreateHoster } from "../Services/EventService";

export default function CreateEventForm() {
  const [formData, setFormData] = useState({
    eventname: "",
    location: "",
    count: 0,
    totalSpots: 0,
    Duration: "",
    AgeLimit: "",
    time: "",
    type: "",
    about: "",
    TermsConditions: ""
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === "count" || name === "totalSpots" ? Number(value) : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
  
    try {
      const token = localStorage.getItem("token") || "";
      if (!token) {
        setError("You must be logged in to create an event.");
        return;
      }
  
      const dataToSend = {
        ...formData,
        count: Number(formData.count),
        totalSpots: Number(formData.count), // Ensure consistency
      };
  
      await CreateHoster(dataToSend, token);
      setMessage("🎉 Event created successfully!");
      setFormData({
        eventname: "",
        location: "",
        count: 0,
        totalSpots: 0,
        Duration: "",
        AgeLimit: "",
        time: "",
        type: "",
        about: "",
        TermsConditions: "",
      });
    } catch (err) {
      setError(err.message || "Something went wrong while creating the event.");
    }
  };
  

  return (
    <motion.div
      className="max-w-2xl mx-auto mt-8 p-6 rounded-2xl shadow-xl bg-zinc-900 text-white border border-zinc-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-purple-400 text-center">Create an Event</h2>
      {error && <p className="text-red-400 mb-4">{error}</p>}
      {message && <p className="text-green-400 mb-4">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="eventname" placeholder="Event Name" value={formData.eventname} onChange={handleChange} required className="w-full bg-zinc-800 p-3 rounded-lg outline-none focus:ring-2 ring-purple-500" />
        <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required className="w-full bg-zinc-800 p-3 rounded-lg outline-none focus:ring-2 ring-purple-500" />
        <div className="grid grid-cols-2 gap-4">
          <input type="number" name="count" placeholder="Total Spots" value={formData.count} onChange={handleChange} required className="bg-zinc-800 p-3 rounded-lg outline-none focus:ring-2 ring-purple-500" />
          <input name="Duration" placeholder="Duration (e.g. 2 hrs)" value={formData.Duration} onChange={handleChange} className="bg-zinc-800 p-3 rounded-lg outline-none focus:ring-2 ring-purple-500" />
        </div>
        <input name="AgeLimit" placeholder="Age Limit (e.g. 18+)" value={formData.AgeLimit} onChange={handleChange} className="w-full bg-zinc-800 p-3 rounded-lg outline-none focus:ring-2 ring-purple-500" />
        <input type="datetime-local" name="time" value={formData.time} onChange={handleChange} required className="w-full bg-zinc-800 p-3 rounded-lg outline-none focus:ring-2 ring-purple-500" />
        <select name="type" value={formData.type} onChange={handleChange} required className="w-full bg-zinc-800 p-3 rounded-lg outline-none focus:ring-2 ring-purple-500">
          <option value="">Select Type</option>
          <option value="sports">Sports</option>
          <option value="music">Music</option>
          <option value="education">Education</option>
          <option value="gaming">Gaming</option>
          <option value="other">Other</option>
        </select>
        <textarea name="about" placeholder="About the event" value={formData.about} onChange={handleChange} rows={3} className="w-full bg-zinc-800 p-3 rounded-lg outline-none focus:ring-2 ring-purple-500" />
        <textarea name="TermsConditions" placeholder="Terms & Conditions" value={formData.TermsConditions} onChange={handleChange} rows={3} className="w-full bg-zinc-800 p-3 rounded-lg outline-none focus:ring-2 ring-purple-500" />
        <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 transition-colors text-white p-3 rounded-xl font-semibold mt-2">
          Create Event
        </button>
      </form>
    </motion.div>
  );
}
