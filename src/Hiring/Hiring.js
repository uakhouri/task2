import "./Hiring.css";
import { choices } from "./choices";
import { employ } from "./employment";
import { exp } from "./experience";
import { Button } from "react-bootstrap";
function Hiring() {
  return (
    <div className="HMain">
      <div className="Hiringmain">
        <div className="Certificate">
          <h2 className="H2">We Are Hiring Interns</h2>
          <p className="Ptag1">
            The Student Intern program is a structured and guided work-based
            learning program for students currently enrolled in India.
          </p>
          <p className="Ptag1">
            <br></br>
            There is a small registration fee, INR 100 /- (RUPEES ONE HUNDRED
            ONLY) applicable to all incoming interns as part of this
            One-of-a-Kind Point based Program. This is required not just to
            ensure a seamless on-boarding and exit process but also to supply
            the interns with relevant study material and make them aware of how
            a corporate setup works.
          </p>
        </div>
        <div className="Subtext">
          <h5 className="H5">
            Scan the QR code to complete your payment and submit the below
            application form to start with your registration process.
          </h5>
          <p className="Ptag1">
            Please keep the payment transaction ID handy for submitting the
            form.
          </p>
          <p className="Ptag1">
            Note: This internship does not offer an opportunity to earn money,
            rather helps an individual grow by working on the job and earn a
            certificate upon successful completion.
          </p>
          <p className="Ptag1">
            Check out few of our open internship positions below Refer the
            application form for more open positions
          </p>
          <h4 className="H4">
            Digital Marketing Interns<br></br>General Management Interns
            <br></br>
            Technical/Software Experts<br></br>
            Product Management Interns<br></br>
            Content Interns and more...
          </h4>
        </div>
        <div className="Barcode"></div>
      </div>
      <div className="Application">
        <div className="Maintext">
          <h2 className="H21"> Application Form</h2>
          <p className="Ptag1">Registration Fee Rs.100/-</p>
        </div>
        <div className="Inputbars">
          <label id="open" className="Labeltext">
            Choose relevant interns opening*
          </label>
          <br></br>
          <select id="Open" name="Internship" className="Selectbox">
            {choices.map((index) => (
              <option value={index.value}>{index.title}</option>
            ))}
          </select>
        </div>
        <div className="Inputbars2">
          <label id="empl" className="Labeltext">
            What's your employment status*
          </label>
          <br></br>
          <select id="Empl" name="Employment" className="Selectbox">
            {employ.map((index) => (
              <option value={index.value}>{index.title}</option>
            ))}
          </select>
        </div>
        <div className="Inputbars3">
          <label id="exp" className="Labeltext">
            Do you have previous experience*
          </label>
          <br></br>
          <select id="Exp" name="Experience" className="Selectbox">
            {exp.map((index) => (
              <option value={index.value}>{index.title}</option>
            ))}
          </select>
        </div>
        <div className="Inputbars4">
          <label className="Labeltext" id="Transtext">
            Payment Transaction ID
          </label>
          <br></br>
          <input type="text" id="trans" className="Selectbox"></input>
        </div>
        <div className="SubButton">
          <Button className="Nextbutton">Next</Button>
        </div>
      </div>
    </div>
  );
}
export default Hiring;
