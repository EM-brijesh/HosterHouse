import { Navigate } from 'react-router-dom';
import authService from '../Services/authService';

const ProtectedRoute = ({ children }) => {
    const token = authService.getToken();

    if (!token) {
        // Redirect to login if no token is found
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute; 