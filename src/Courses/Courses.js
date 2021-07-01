import "./Courses.css";
import { Courselist } from "./Courselist";
import { Sortby } from "./Sortby";
function Courses() {
  return (
    <div className="Maincourse">
      <div className="Slidbutton">
        <h2>Filter By</h2>
      </div>
      <div className="Sortbutton">
        <select className="Selectbutton">
          {Sortby.map((index) => {
            return <option value={index.value}>{index.title}</option>;
          })}
        </select>
      </div>
      <div className="CourseList">
        {Courselist.map((index, i) => {
          return (
            <div key={i} className="Coursedivs">
              <div className="Imagediv">
                <img
                  src={
                    process.env.PUBLIC_URL + `/CourseImages/course${i + 1}.jpg`
                  }
                  alt={index.title}
                  className="Imagecourse"></img>
              </div>
              <div className="textdiv">
                <h4>{index.title}</h4>
              </div>
              <div className="pricediv">
                <h6>{index.price}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Courses;
