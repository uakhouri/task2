import { dataSlider } from "./dataSlider.js";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import { useState } from "react";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  function nextSlide() {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  }

  // setTimeout(nextSlide, 10000);

  function prevSlide() {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex) {
      setSlideIndex(dataSlider.length);
    }
  }
  return (
    <div className="container-slider">
      {dataSlider.map((object, index) => {
        return (
          <div
            key={object.id}
            className={
              slideIndex === index + 1 ? "slide active-anim" : "slide"
            }>
            <img
              src={process.env.PUBLIC_URL + "/Slideback.jpg "}
              alt="Background"
            />
            <p>{object.description}</p>
            <h2>{object.title}</h2>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  );
}

export default Slider;

/*
<script>
import statement
function name(){
  
}
 */
