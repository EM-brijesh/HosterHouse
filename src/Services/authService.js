import axios from 'axios';

const authService = {
    login: async (email, password) => {
        const response = await axios.post('/api/login', { email, password });
        return response.data;
    },
    signup: async (email, password, location) => {
        const response = await axios.post('/api/signup', { email, password, location });
        return response.data;
    }
};

export default authService;
