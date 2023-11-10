import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,

} from "reactstrap";

import chats from "../assets/images/home/chats.svg";
import leads from "../assets/images/home/leads.png";
import support from "../assets/images/home/support.svg";
import refund from "../assets/images/home/refund.svg";
import mappin1 from "../assets/images/home/mappin1.svg";
import complaint from "../assets/images/home/complaint.svg";
const Home = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Home</CardTitle>
        </CardHeader>
        <CardBody>
         <main className='main-container'>
      

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                <img className="card_icon" src={chats} alt="Login Cover" />
                    <h1>500</h1>
                    <h3>All Chats</h3>
                </div>
            </div>
            <div className='card' >
                <div className='card-inner'>
                <img className="card_icon" src={leads} alt="Login Cover" />
                    
                    <h1>100</h1>
                    <h3>Leads</h3>
                </div>
            </div>
            <div className='card'>
                <div className='card-inner' >
                <img className="card_icon" src={support} alt="Login Cover" />
                    
                    <h1>100</h1>
                    <h3>Support Requests</h3>
                </div>
            </div>
        </div>
        <div className='main-cards'>
        <div className='card2'>
                <div className='card-inner' >
                <img className="card_icon" src={refund} alt="Login Cover" />
                    
                    <h1>100</h1>
                    <h3>Refund Requests</h3>
                </div>
            </div>
            <div className='card2'>
                <div className='card-inner' >
                <img className="card_icon" src={mappin1} alt="Login Cover" />
                    
                    <h1>100</h1>
                    <h3>Locations</h3>
                </div>
            </div>
            <div className='card2'>
                <div className='card-inner' >
                <img className="card_icon" src={complaint} alt="Login Cover" />
                    
                    <h1>100</h1>
                    <h3>Complaints</h3>
                </div>
            </div>
        </div>
    </main>
        </CardBody>
      </Card>

     
    </div>
  );
};

export default Home;
