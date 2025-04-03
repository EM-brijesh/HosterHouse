import { useNavigate } from 'react-router-dom';

const Card = ({
    imageSrc,
    EventName,
    EventTime,
    EventLocation,
    EventType,
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
                <div className="text-md text-gray-500 mt-1">{EventType}</div>
                <div className="text-md text-gray-500 mt-1">{EventLocation}</div>
            </div>
        </div>
    );
};

export default Card;
