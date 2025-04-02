import { useNavigate } from 'react-router-dom';

const Card = ({imageSrc, EventName, EventDate, EventAddress, EventDescription, id}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event/${id}`, {
      state: {
        event: {
          imageSrc,
          EventName,
          EventDate,
          EventAddress,
          EventDescription,
          id
        }
      }
    });
  };

  return (
    <div 
      className="flex flex-col cursor-pointer transform transition-transform hover:scale-105"
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
            {EventDate}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mt-3 text-xl font-bold text-gray-200">{EventName}</div>
        <div className="text-md text-gray-500 mt-1">{EventAddress}</div>
        <div className="text-md text-gray-500 mt-1">{EventDescription}</div>
      </div>
    </div>
  );
}

export default Card;
