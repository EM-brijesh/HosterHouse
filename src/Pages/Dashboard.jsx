import Navbar from '../Components/Navbar';
import Card from '../Components/Card';
import PromotionalEvents from '../Components/PromotionalEvents';
import image from '../assets/Card.jpg';
import upcoming from '../assets/upcoming.jpg';

const Dashboard = () => {
    return (
        <>
        <PromotionalEvents/>
            <h1 className="text-2xl text-white pt-4 font-bold">
              Trending Events
            </h1>
            <div className='flex  gap-4 pt-4'>
                <Card
                   id="1"
                   imageSrc={image}
                   EventName='MI vs DC'
                   EventDate='02 April 2025'
                   EventAddress='Mumbai Wankhade'
                   EventDescription='Experience the thrill of IPL cricket as Mumbai Indians take on Delhi Capitals in this exciting match.'
                />
                <Card
                   id="2"
                   imageSrc={image}
                   EventName='MI vs DC'
                   EventDate='02 April 2025'
                   EventAddress='Mumbai Wankhade'
                   EventDescription='Experience the thrill of IPL cricket as Mumbai Indians take on Delhi Capitals in this exciting match.'
                />
                <Card
                   id="3"
                   imageSrc={image}
                   EventName='MI vs DC'
                   EventDate='02 April 2025'
                   EventAddress='Mumbai Wankhade'
                   EventDescription='Experience the thrill of IPL cricket as Mumbai Indians take on Delhi Capitals in this exciting match.'
                />
                <Card
                   id="4"
                   imageSrc={image}
                   EventName='MI vs DC'
                   EventDate='02 April 2025'
                   EventAddress='Mumbai Wankhade'
                   EventDescription='Experience the thrill of IPL cricket as Mumbai Indians take on Delhi Capitals in this exciting match.'
                />
               </div>
               <h1 className="text-2xl text-white pt-4 font-bold">
              Upcoming Events
            </h1>
            <div className='flex gap-2 pt-4'>
                <Card
                   id="5"
                   imageSrc={upcoming}
                   EventName='No-Bo Comedy'
                   EventDate='09 April 2025'
                   EventAddress='Habitat'
                   EventDescription='Join us for a night of laughter with top comedians from around the country.'
                />
                <Card
                   id="6"
                   imageSrc={upcoming}
                   EventName='No-Bo Comedy'
                   EventDate='09 April 2025'
                   EventAddress='Habitat'
                   EventDescription='Join us for a night of laughter with top comedians from around the country.'
                />
               </div>
        </>
    )
}

export default Dashboard;