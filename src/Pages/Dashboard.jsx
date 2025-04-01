import Navbar from '../Components/Navbar';
import Card from '../Components/Card';
import PromotionalEvents from '../Components/PromotionalEvents';
const Dashboard = () => {
    return (
        <>
        <PromotionalEvents/>
            <h1 className="text-2xl text-white pt-4 font-bold">
              Trending Events
            </h1>
            <div className='flex flex-wrap gap-4'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </div>
        </>

    )
}


export default Dashboard;