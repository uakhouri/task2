import "./Slider.css";
import leftArrow from "./icons/leftArrow.svg";
import rightArrow from "./icons/rightArrow.svg";
function BtnSlider(props) {
  return (
    <button
      onClick={props.moveSlide}
      className={
        props.direction === "next" ? "btn-slide next" : "btn-slide prev"
      }>
      <img
        src={props.direction === "next" ? rightArrow : leftArrow}
        alt={props.direction === "next" ? "Right" : "Left"}
      />
    </button>
  );
}
export default BtnSlider;
