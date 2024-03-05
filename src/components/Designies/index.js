import Carasol from "../Carasol";
import "./index.css";

const Desigines = () => {
  return (
    <>
      <div className="des-cont">
        <h1 className="desig-head">Designes for ladies</h1>
        <p className="desig-para">
          Unlike other interior design services, Boutique Interior Design
          focuses on creating an intimate and personalized customer shopping
          experience. Designers create cohesive and memorable shopping
          environments by considering brand identity, target market, and
          merchandise display. s
        </p>
        <div className="des-img-Cont">
          <img
            className="desg-img"
            alt="deish-logo"
            src="https://i.pinimg.com/736x/b7/66/fc/b766fcc43f8c4915dbdb0994c6bfad47.jpg"
          />
          <img
            className="desg-img"
            alt="deish-logo"
            src="https://i.pinimg.com/736x/0f/0d/d9/0f0dd9f52e44520cdbc601208f1b09d8.jpg"
          />
          <img
            className="desg-img"
            alt="deish-logo"
            src="https://i.pinimg.com/736x/07/6d/c4/076dc472cf02343b751875e534963c2f.jpg"
          />
          <img
            className="desg-img"
            alt="deish-logo"
            src="https://www.textileexport.in/media/mceu_20949444921690806657695.jpg"
          />
        </div>

        {/* <Carasol /> */}
      </div>
    </>
  );
};

export default Desigines;
