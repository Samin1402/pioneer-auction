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
        <CardBody>
        
        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                <img className="card_icon" src={chats} alt="Login Cover" />
                    <h1>500</h1>
                    <CardTitle>All Chats</CardTitle>
                </div>
            </div>
        </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
        
        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                <img className="card_icon" src={chats} alt="Login Cover" />
                    <h1>500</h1>
                    <CardTitle>Leads</CardTitle>
                </div>
            </div>
        </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;
