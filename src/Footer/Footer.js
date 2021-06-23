import { Button } from "react-bootstrap";
import {
  FaRegCopyright,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="Main">
        <div className="Socials">
          <FaFacebook className="Styleicons" />
          <FaTwitter className="Styleicons" />
          <FaInstagram className="Styleicons" />
        </div>

        <div className="Mainfooter">
          <div className="Centeritem">
            <h4 className="Newstext">Subscribe to our newsletter</h4>
          </div>
          <div className="stsearch">
            <input placeholder="Full Name" className="Fullname"></input>
            <input placeholder="College Name" className="College"></input>
          </div>
          <div className="ndsearch">
            <input placeholder="Mobile No." className="Mobile"></input>
            <input placeholder="Email" className="Email"></input>
          </div>
          <div className="DiscordJoin">
            <div className="divInput">
              <input
                type="checkbox"
                onChange={(e) => console.log(e)}
                id="Discord"
                className="Inputcheck"
              />
              <label for="Discord" className="descText">
                Join TEN's Discord Community
              </label>
            </div>
          </div>
          <div className="subButton">
            <Button className="Submit">Submit</Button>
          </div>
        </div>
        <div className="Aboutus">
          <h1 className="Abouttext">About us</h1>
          <h1 className="Abouttext">FAQ's</h1>
          <h1 className="Abouttext">Contact Us</h1>
        </div>
        <div className="endLine">
          <div className="Endlinetext">
            <h4 className="Text">
              <FaRegCopyright />
              2020 Limitless Technologies - The Entrepreneurship Network
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
