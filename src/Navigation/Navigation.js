import "./Navigation.css";
import { Menuitems } from "./Menuitems";
import { Link } from "react-router-dom";
import { More } from "./More";
import { Button, NavDropdown } from "react-bootstrap";
import logo from "./search.svg";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
function Navigation() {
  return (
    <div>
      <h2 className="Header2">
        <span className="Span">T</span>he
        <br></br>
        <span className="Span">E</span>ntreprenuership
        <br></br>
        <span className="Span">N</span>etwork
      </h2>
      <div className="Inputsearch">
        <Button className="Cart" onClick={() => console.log("Cart")}>
          <FaCartPlus />
        </Button>
        <Button className="Login" onClick={() => console.log("Login")}>
          <CgProfile /> Login
        </Button>
        <br></br>
        <input
          type="text"
          aria-label="Search Here..."
          placeholder="Search Here.."
          className="Input"
        />
        <Button className="Searchicon" onClick={() => console.log("Search")}>
          <FaSearch />
        </Button>
      </div>
      <div className="Imgandlink">
        <img
          src={process.env.PUBLIC_URL + "/tenprofile.jpg"}
          alt="Logo"
          className="Imagewebp"></img>
        <div className="Options">
          <span>
            {Menuitems.map((list, i) => (
              <>
                <Link className="Menuheader" to={list.url}>
                  {list.title}
                </Link>
              </>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Navigation;
