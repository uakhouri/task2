import { Button } from "react-bootstrap";
import "./Home.css";
import { VscGlobe } from "react-icons/vsc";
import { FaChalkboardTeacher, FaBook } from "react-icons/fa";
import Slider from "./Slider/Slider";

function Home() {
  return (
    <div>
      <div className="Parentdiv">
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
          <div className="Threedivs">
            <div className="Ourcourses">
              <div className="Divimage">
                <h3>Our Courses</h3>
                <h1 className="Journeytext">
                  Your New <br></br>Journey Begins Here,<br></br>Today
                </h1>
              </div>
              <div className="Entretext">
                <h3 className="Madefun">
                  Entrepreneurship<br></br>made fun
                </h3>
                <Button className="Explorebutton">Explore Here</Button>
              </div>
            </div>
            <div className="Digital">
              <div className="Digimage1"></div>
              <div className="dig">
                <div className="Digtext">
                  <h2 className="Textdig">
                    Digital<br></br>Marketing
                  </h2>
                  <Button className="Explorebutton2">Explore Here</Button>
                </div>
                <div className="Digimage2"></div>
              </div>
            </div>
            <div className="Product">
              <div className="Protext">
                <h2 className="PText">
                  Product Management<br></br>like a pro
                </h2>
                <Button className="Explorebutton3">Explore Here</Button>
              </div>
              <div className="Proimage"></div>
            </div>
          </div>
          <div className="Utrap">
            <h3 className="H3text">Our Course Benefits</h3>
          </div>
        </div>
        <div className="Benefits">
          <div className="Teachers">
            <FaChalkboardTeacher className="Iconscourse" />
            <h2 className="H2courses">Expert Teachers</h2>
            <p>
              Our instructors are more adept at monitoring student problems and
              assessing their level of understanding and progress, and they
              provide much more relevant, useful feedback. We are experts in
              developing and testing hypotheses about learning difficulties or
              instructional strategies
            </p>
          </div>
          <div className="Community">
            <VscGlobe className="Iconscourse" />
            <h2 className="H2courses">Online Community</h2>
            <p>Feel like home, with a "family of invisible friends".</p>
          </div>
          <div className="Curriculum">
            <FaBook className="Iconscourse" />
            <h2 className="H2courses">Flexible Curriculum</h2>
            <p>
              Our expert teachers design and curate the curriculum using best
              practices and careful consideration of how people learn and retain
              information with the ongoing tech trends in the professional
              domain. We've debated every facet of our methodology, from the
              order in which to teach concepts, the analogies used to clarify
              them and how exercises should be structured to deliver the maximum
              educational punch.
            </p>
          </div>
        </div>
        <div className="testimonials">
          <h1>Testimonials</h1>
          <div>
            <Slider />
          </div>
        </div>
        <div className="Gifholder">
          <h1>Power of TEN Consulting</h1>
          <Button>Explore Here</Button>
        </div>
      </div>
    </div>
  );
}
export default Home;
