import { Button } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <div className="Maindiv">
      <div>
        <img
          src={process.env.PUBLIC_URL + "/1stcard.jpg"}
          alt="Onecard"
          className="Onecard"></img>
      </div>
      <div className="Image1">
        <h1 className="Texth1">About Us</h1>
        <h1 className="Learnmore">
          Learning Together<br></br>
          From the Comfort
          <br></br>
          of Your Home
        </h1>
        <img
          src={process.env.PUBLIC_URL + "/About.jpg"}
          alt="About"
          className="Imageabout"></img>
        <Button className="Learnbutton">Learn More</Button>
      </div>
      <div className="Nextbigcard">
        {/* <img
          src={(process.env.PUBLIC_URL = "/walking.jpg")}
          alt="walking"
          className="Walking"></img> */}
        <h1 className="Welcome">Welcome to</h1>
        <h1 className="Bigthing">THE NEXT BIG THING</h1>
        <Button className="Join">Join TEN Virtual Campus</Button>
      </div>
    </div>
  );
}
export default Home;
