import { useNavigate } from 'react-router-dom';

const Card = ({
    imageSrc,
    EventName,
    EventTime,
    EventLocation,
    EventType,
    EventLikes,
    id
}) => {
    const navigate = useNavigate();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const handleClick = () => {
        navigate(`/event/${id}`, {
            state: {
                event: {
                    imageSrc,
                    EventName,
                    EventTime,
                    EventLocation,
                    EventType,
                    id
                }
            }
        });
    };

    return (
        <div 
            className="flex flex-col cursor-pointer transform transition-transform "
            onClick={handleClick}
        >
            <div className="w-80 rounded-l shadow-xl bg-white overflow-hidden">
                <div className="relative w-full h-100 overflow-hidden">
                    {imageSrc ? (
                        <img src={imageSrc} alt="Event" className="w-full h-full object-cover" />
                    ) : (
                        <div className="bg-gray-200 flex items-center justify-center h-full">
                            <span className="text-gray-600">Image</span>
                        </div>
                    )}
                    <div className="absolute bottom-0 bg-black bg-opacity-70 text-white text-sm py-1 px-3 w-full text-left">
                        {formatDate(EventTime)}
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col">
                <div className="mt-3 text-xl font-bold text-gray-200">{EventName}</div>
                    <span className="text-md text-gray-500 bg-white rounded-full px-2 py-1 mt-1 w-fit">{EventType}</span>
                <div className="text-md text-gray-500 mt-1">{EventLocation}</div>
                {EventLikes > 0 && (
                    <div className="flex items-center mb-3">
                        <svg className="w-5 h-5 text-gray-700 dark:text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-400">{EventLikes}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
