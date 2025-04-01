const Card = () => {
    return (
        <div className="border  border-black p-4 w-64 text-center rounded-lg shadow-lg">
          <div className="border  border-black bg-red-100 w-full h-40 flex items-center justify-center">
            <span className="text-gray-600">Image</span>
          </div>
          <div className="mt-2 text-lg text-white font-semibold">Day date</div>
          <div className="text-sm text-gray-500">
            address of the event
            <br />
            lorem epsum
          </div>
        </div>
      );
}

export default Card;
