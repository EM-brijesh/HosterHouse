const API_URL = 'http://localhost:3000/api/';
import axios from "axios";

export const getHosterEvents = async () => {
    const response = await fetch(`${API_URL}/getalleventssmall`);
    const data = await response.json();
    return data;
};

export const getLargeevents = async () => {
    const response = await fetch(`${API_URL}/getalleventslarge`);
    const data = await response.json();
    return data;
};


export const getTrendingEvents = async () => {
    const response = await fetch(`${API_URL}/gettrendingevents`);
    const data = await response.json();
    return data;
};

export const getUpcomingEvents = async () => {
    const response = await fetch(`${API_URL}/getupcomingevents`);
    const data = await response.json();
    return data;
};

export const likeEvent = async (eventId) => {
    const response = await fetch(`${API_URL}/likeevent/${eventId}`);
    const data = await response.json();
    return data;
};

export const CreateHoster = async (formData, token) => {
    try {
      const response = await axios.post(`${API_URL}/addhouseevent`, // or full URL like: http://localhost:5000/addhouseevent
        {
          ...formData,
          totalSpots: formData.count, // ensure totalSpots is set
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      return response.data;
    } catch (error) {
      console.error("Error creating event:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Failed to create event");
    }
  };




