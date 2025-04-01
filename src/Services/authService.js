import axios from 'axios';

const API_URL = 'https://khel-bac.onrender.com/auth';

const authService = {
    login: async (username, password) => {
        try {
            const response = await axios.post(`${API_URL}/signin`, 
                { username, password },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            return response.data;
        } catch (error) {
            console.error('Login error:', {
                message: error.message,
                response: error.response?.data,
                status: error.response?.status
            });
            throw error;
        }
    },
    signup: async (username, password, location) => {
        try {
            const response = await axios.post(`${API_URL}/signup`, 
                { username, password, location },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            return response.data;
        } catch (error) {
            console.error('Signup error:', {
                message: error.message,
                response: error.response?.data,
                status: error.response?.status
            });
            throw error;
        }
    }
};

export default authService;
