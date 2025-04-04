const API_URL = 'http://localhost:3000/api/';

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






