// components/CreateEventForm.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreateHoster } from "../Services/EventService";
import { useNavigate } from 'react-router-dom';

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

  const [error, setError] = useState("");
  const [showCongrats, setShowCongrats] = useState(false);
  const [createdEvent, setCreatedEvent] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === "count" || name === "totalSpots" ? Number(value) : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const token = localStorage.getItem("token") || "";
      if (!token) {
        setError("You must be logged in to create an event.");
        return;
      }

      const dataToSend = {
        ...formData,
        count: Number(formData.count),
        totalSpots: Number(formData.count),
      };

      await CreateHoster(dataToSend, token);
      setCreatedEvent(dataToSend);
      setShowCongrats(true);
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

  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard'); 
  };

  return (
    <>
      {/* 🎉 Congratulations Overlay */}
      <AnimatePresence>
        {showCongrats && createdEvent && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 text-white p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-purple-400 mb-2 text-center"
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              🎉 Your "{createdEvent.eventname}" is Live!
            </motion.h1>

            <motion.p
              className="text-xl text-center text-zinc-300 mb-6 max-w-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {createdEvent.about || "An exciting event awaits your attendees!"}
            </motion.p>

            <motion.div
              className="bg-zinc-800 p-4 rounded-xl w-full max-w-md shadow-lg text-sm text-zinc-200 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p><span className="font-semibold text-purple-400">Location:</span> {createdEvent.location}</p>
              <p><span className="font-semibold text-purple-400">Time:</span> {new Date(createdEvent.time).toLocaleString()}</p>
              <p><span className="font-semibold text-purple-400">Type:</span> {createdEvent.type}</p>
              <p><span className="font-semibold text-purple-400">Duration:</span> {createdEvent.Duration}</p>
              <p><span className="font-semibold text-purple-400">Spots:</span> {createdEvent.count}</p>
            </motion.div>

            <motion.button
              onClick={goToDashboard}
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Go to Dashboard
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 📄 Form */}
      <motion.div
        className="max-w-2xl mx-auto mt-8 p-6 rounded-2xl shadow-xl bg-zinc-900 text-white border border-zinc-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-purple-400 text-center">Create Your Hoster!</h2>
        {error && <p className="text-red-400 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="eventname"
            placeholder="Event Name"
            value={formData.eventname}
            onChange={handleChange}
            required
            className="w-full bg-zinc-800 p-3 rounded-lg outline-none focus:ring-2 ring-purple-500"
          />

          <input
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full bg-zinc-800 p-3 rounded-lg outline-none focus:ring-2 ring-purple-500"
          />

          {/* Count - Total Spots */}
          <div>
            <label className="block mb-2 text-purple-400 font-medium">Total Spots</label>
            <div className="grid grid-cols-4 gap-2">
              {["4", "8", "10+", "20+"].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setFormData({ ...formData, count: parseInt(val) || 0 })}
                  className={`py-2 px-4 rounded-lg text-sm font-semibold transition-all ${
                    formData.count === (parseInt(val) || 0)
                      ? "bg-purple-600 text-white"
                      : "bg-zinc-800 text-zinc-300"
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block mb-2 text-purple-400 font-medium">Duration</label>
            <div className="flex gap-3">
              {["2hr", "3hr+"].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setFormData({ ...formData, Duration: val })}
                  className={`py-2 px-4 rounded-lg text-sm font-semibold transition-all ${
                    formData.Duration === val
                      ? "bg-purple-600 text-white"
                      : "bg-zinc-800 text-zinc-300"
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-2 text-purple-400 font-medium">Age Limit</label>
            <div className="flex gap-3  items-center">
              {["Kids", "18+", "25+"].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setFormData({ ...formData, AgeLimit: val })}
                  className={`py-2 px-4 rounded-lg text-sm font-semibold transition-all ${
                    formData.AgeLimit === val
                      ? "bg-purple-600 text-white"
                      : "bg-zinc-800 text-zinc-300"
                  }`}
                >
                  {val}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setShowMore(!showMore)}
                className="ml-auto  text-zinc-400 hover:text-white transition text-xl"
                aria-label="Toggle more options"
              >
                {showMore ? "▲" : "show more ▼"}
              </button>
            </div>
          </div>

          {/* Collapsible second half of the form */}
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden space-y-4 mt-4"
            >
              <input
                type="datetime-local"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full bg-zinc-800 p-3 rounded-lg outline-none focus:ring-2 ring-purple-500"
              />

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full bg-zinc-800 p-3 rounded-lg outline-none focus:ring-2 ring-purple-500"
              >
                <option value="">Select Type</option>
                <option value="sports">Sports</option>
                <option value="music">Music</option>
                <option value="education">Education</option>
                <option value="gaming">Gaming</option>
                <option value="other">Other</option>
              </select>

              <textarea
                name="about"
                placeholder="About the event"
                value={formData.about}
                onChange={handleChange}
                rows={3}
                className="w-full bg-zinc-800 p-3 rounded-lg outline-none focus:ring-2 ring-purple-500"
              />

              <textarea
                name="TermsConditions"
                placeholder="Terms & Conditions"
                value={formData.TermsConditions}
                onChange={handleChange}
                rows={3}
                className="w-full bg-zinc-800 p-3 rounded-lg outline-none focus:ring-2 ring-purple-500"
              />

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 transition-colors text-white p-3 rounded-xl font-semibold mt-2"
              >
                Execute 🔥
              </button>
            </motion.div>
          )}
        </form>
      </motion.div>
    </>
  );
}
