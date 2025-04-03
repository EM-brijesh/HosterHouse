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



