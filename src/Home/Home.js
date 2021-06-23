import { Button } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <div className="Maindiv">
      <div className="Onecard">
        <img
          src={process.env.PUBLIC_URL + "/1stcard.jpg"}
          alt="Onecard"
          className="Image1stcard"></img>
      </div>
      <div className="Image1">
        <div className="Texth1">
          <h1 className="H1text">About Us</h1>
        </div>
        <div className="Learnmore">
          <div className="Gridlearnset">
            <h1 className="Learnmoretext">
              Learning Together<br></br>
              From the Comfort
              <br></br>
              of Your Home
            </h1>
          </div>
          <div className="Gridlearnbutton">
            <Button className="Learnbutton">Learn More</Button>
          </div>
        </div>
        <div className="AboutImage">
          <img
            src={process.env.PUBLIC_URL + "/About.jpg"}
            alt="About"
            className="Imageabout"></img>
        </div>
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
