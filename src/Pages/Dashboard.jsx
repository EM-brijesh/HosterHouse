import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Card from '../Components/Card';
import PromotionalEvents from '../Components/PromotionalEvents';
import { getHosterEvents, getLargeevents } from '../Services/EventService';
import image from '../assets/Card.jpg';
import upcoming from '../assets/upcoming.jpg';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [hosterEvents, setHosterEvents] = useState([]);
    const [largeEvents, setLargeEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const [hosterEventsData, largeEventsData] = await Promise.all([
                    getHosterEvents(),
                    getLargeevents()
                ]);
                setHosterEvents(hosterEventsData);
                setLargeEvents(largeEventsData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching events:', error);
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-white text-xl">Loading...</div>
            </div>
        );
    }

    return (
        <>
            <PromotionalEvents />
            {/* Hosting Events */}
            <h1 className="text-2xl text-white pt-8 font-bold">
                Hosting Events
            </h1>
            <div className="w-full h-px bg-white m-2"></div>
            
            <div className='flex gap-4 pt-8'>
                {hosterEvents.map((event) => (
                    <Card
                        key={event._id}
                        id={event._id}
                        imageSrc={event.image || image}
                        EventName={event.eventname}
                        EventTime={event.time}
                        EventLocation={event.location}
                        EventType={event.type}
                    />
                ))}
            </div>

            <h1 className="text-2xl text-white pt-8 font-bold">
                Trending Events
            </h1>
            <div className="w-full h-px bg-white m-2"></div>
            
            <div className='flex gap-4 pt-8'>
                {largeEvents.map((event) => (
                    <Card
                        key={event._id}
                        id={event._id}
                        imageSrc={event.image || image}
                        EventName={event.eventname}
                        EventTime={event.time}
                        EventLocation={event.location}
                        EventType={event.type}
                    />
                ))}
            </div>

            <h1 className="text-2xl text-white pt-8 font-bold">
                Upcoming Events
            </h1>
            <div className="w-full h-px bg-white m-2"></div>
            <div className='flex gap-2 pt-8'>
                {largeEvents.slice(0, 2).map((event) => (
                    <Card
                        key={event._id}
                        id={event._id}
                        imageSrc={event.image || upcoming}
                        EventName={event.eventname}
                        EventTime={event.time}
                        EventLocation={event.location}
                        EventType={event.type}
                    />
                ))}
            </div>
        </>
    );
};

export default Dashboard;