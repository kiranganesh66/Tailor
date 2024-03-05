import "./index.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const butn = useNavigate();

  return (
    <div className="contact-Cont">
      <h1 className="contheadng">Contact Details</h1>
      <p className="contpara">
        You can contact here at the below adress to make designes
      </p>
      <p className="contpara2">
        First Name, Last Name: e.g. 'Robert Johnson' Phone Number: e.g. '004 412
        2019' Email Address: e.g. 'robert@novoresume.com'
      </p>
      <img
        className="cont-logo"
        alt="contactLog"
        src="https://nrdcindia.com/uploads/images/1568886999Conatct2.jpg"
      />
      <div>
        <button onClick={() => butn("/home")} className="back-Btn">
          Back
        </button>
      </div>
    </div>
  );
};

export default Contact;
