const Footer = () => {
    return (
        <footer className=" text-white py-8">
            <div className="flex flex-col md:flex-row justify-between items-center px-6">
                <h1 className="text-center text-white md:text-left text-lg font-semibold max-w-md">
                    List your Show! Got a Show, Event, or Activity? Partner with us and get listed on Hoster House.
                </h1>
                <button className="bg-white text-black px-5 py-2 mt-4 md:mt-0 rounded-md font-medium transition duration-300 hover:bg-gray-300">
                    Contact Today
                </button>
            </div>

            <div className="mt-6 pt-4 flex flex-col md:flex-row items-center justify-center text-white text-sm gap-2">
                <h1>© 2025 Hoster House</h1>
                <span className="hidden md:inline">|</span>
                <h1>All Rights Reserved</h1>
            </div>
        </footer>
    );
};

export default Footer;
