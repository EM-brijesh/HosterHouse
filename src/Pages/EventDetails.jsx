import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { likeEvent } from '../Services/EventService';
import { motion } from 'framer-motion';

export default function EventDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event;
  console.log(event);
  // Using useParams if needed; in this case we use event.id from the passed event.
  const { eventId } = useParams();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(event?.EventLikes || 0);

  // useEffect to log changes in likeCount. You could later use this to trigger further side-effects.
  useEffect(() => {
    console.log("Updated like count: ", likeCount);
  }, [likeCount]);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Event not found</h1>
          <button 
            onClick={() => navigate(-1)}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleLike = async () => {
    try {
      // Use event.id rather than eventId from params if the event is passed via state.
      const res = await likeEvent(event.id);
      console.log("Liked event: ", res);
      setLiked(true);
      // Update likeCount using the response from your API (assuming res.likes contains the updated count)
      setLikeCount(res.likes);
    } catch (err) {
      console.error("Failed to like event", err);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <img 
            src={event.imageSrc} 
            alt={event.EventName} 
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <h1 className="text-3xl font-bold text-white mt-4">{event.EventName}</h1>
          <div className="mt-2 flex gap-2">
            <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full">{event.EventType}</span>
          </div>
          <div className="flex items-center gap-2 mt-4 text-gray-700">
  <FaRegThumbsUp className="text-green-600" />
  <motion.span
    key={likeCount}
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {likeCount} likes
  </motion.span>
  <motion.button 
    className="bg-red-500 text-white px-4 py-1 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
    onClick={handleLike}
    whileTap={{ scale: 0.9 }}
    disabled={liked}  // Disable button after liked
  >
    {liked ? "You're In!" : "I'm Interested"}
  </motion.button>
</div>

          <h2 className="text-xl font-semibold text-white mt-6">About The Event</h2>
          <p className="text-gray-600 mt-2">More details coming soon...</p>
          <p className="text-white mt-2">{event.EventAbout}</p>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-fit">
          <div className="space-y-3">
            <p className="text-gray-700">📅 {formatDate(event.EventTime)}</p>
            <p className="text-gray-700">⏳ {event.EventDuration}</p>
            <p className="text-gray-700">🎟 {event.EventAgeLimit}</p>
            <p className="text-gray-700">🎭 {event.EventType}</p>
            <p className="text-gray-700 flex items-center gap-1">
              <MdLocationOn className="text-blue-500" /> {event.EventLocation}
            </p>
          </div>
          <div className="mt-4 bg-yellow-100 text-yellow-800 p-2 rounded">
            Bookings are filling fast for {event.EventLocation}
          </div>
          <button className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg mt-4">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
