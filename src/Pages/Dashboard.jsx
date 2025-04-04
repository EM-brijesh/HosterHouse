import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Card from '../Components/Card';
import PromotionalEvents from '../Components/PromotionalEvents';
import { getHosterEvents, getLargeevents } from '../Services/EventService';
import comedy from '../assets/card_comedy.png';
import party from '../assets/card_party.png';
import sport from '../assets/card_sport.png';
import random from '../assets/card_random.png';


const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [hosterEvents, setHosterEvents] = useState([]);
    const [largeEvents, setLargeEvents] = useState([]);

    const getEventImage = (eventType) => {
        if (!eventType) return random; // Return default image if type is undefined or null
        
        const type = eventType.toLowerCase();
        if (type.includes('comedy') || type.includes('standup')) {
            return comedy;
    } else if (type.includes('music') || type.includes('party')) {
            return party;
        } else if (type.includes('sports') || type.includes('game')) {
            return sport;
        }
        return random; // default image
    };

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
        <div className="min-h-screen bg-black">
            <PromotionalEvents />
            <div className="container mx-auto px-4 py-8">
                {/* Hosting Events */}
                <div className="mb-12">
                    <h1 className="text-2xl text-white pt-8 font-bold">
                        Hosting Events
                    </h1>
                    <div className="w-full h-px bg-white m-2"></div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-8">
                        {hosterEvents.map((event) => (
                            <Card
                                key={event._id}
                                id={event._id}
                                imageSrc={getEventImage(event?.type)}
                                EventName={event.eventname}
                                EventTime={event.time}
                                EventLocation={event.location}
                                EventType={event.type}
                                EventLikes={event.likes}
                            />
                        ))}
                    </div>
                </div>

                {/* Trending Events */}
                <div className="mb-12">
                    <h1 className="text-2xl text-white pt-8 font-bold">
                        Trending Events
                    </h1>
                    <div className="w-full h-px bg-white m-2"></div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-8">
                        {largeEvents.filter(event => event.likes > 0).length > 0 ? (
                            largeEvents.filter(event => event.likes > 0).map((event) => (
                                <Card
                                    key={event._id}
                                    id={event._id}
                                    imageSrc={getEventImage(event?.type)}
                                    EventName={event.eventname}
                                    EventTime={event.time}
                                    EventLocation={event.location}
                                    EventType={event.type}
                                    EventLikes={event.likes}
                                />
                            ))
                        ) : (
                            <div className="col-span-full text-center text-white">
                                No trending events found
                            </div>
                        )}
                    </div>
                </div>

                {/* Upcoming Events */}
                <div className="mb-12">
                    <h1 className="text-2xl text-white pt-8 font-bold">
                        Upcoming Events
                    </h1>
                    <div className="w-full h-px bg-white m-2"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-8">
                        {largeEvents.slice(0, 2).map((event) => (
                            <Card
                                key={event._id}
                                id={event._id}
                                imageSrc={getEventImage(event?.type)}
                                EventName={event.eventname}
                                EventTime={event.time}
                                EventLocation={event.location}
                                EventType={event.type}
                                EventLikes={event.likes}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;