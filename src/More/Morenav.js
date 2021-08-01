import { Link } from "react-router-dom";
import { Moreitems } from "./Moreitems";
import { FaChevronRight } from "react-icons/fa";
import "./Morenavigation.css";
function Morenav() {
  return (
    <div className="Navigator">
      <h5>
        {Moreitems.map((index) => (
          <Link className="Linknav" to={index.url}>
            {index.option} <FaChevronRight />
            <br></br>
          </Link>
        ))}
      </h5>
    </div>
  );
}

export default Morenav;
