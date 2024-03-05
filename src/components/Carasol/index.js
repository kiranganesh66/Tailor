import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./index.css";

const Carasol = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="six">
        <div>
          <img
            alt="img"
            src="https://img.freepik.com/free-vector/seamstress-concept-illustration_114360-3037.jpg?w=740&t=st=1709217530~exp=1709218130~hmac=0f480a08ad42d0df32a789ab058ba80a356a8a74407d18e83c7b011c5188c8f6"
          />
        </div>
        <div>
          <img
            alt="img"
            src="https://e7.pngegg.com/pngimages/982/427/png-clipart-telephone-icon-telephone-call-computer-icons-iphone-symbol-telefono-electronics-rim-thumbnail.png"
          />
        </div>
        <div>
          <img
            alt="img"
            src="https://img.freepik.com/free-vector/seamstress-concept-illustration_114360-3037.jpg?w=740&t=st=1709217530~exp=1709218130~hmac=0f480a08ad42d0df32a789ab058ba80a356a8a74407d18e83c7b011c5188c8f6"
          />
        </div>
        <div>
          <img
            alt="img"
            src="https://img.freepik.com/free-vector/seamstress-concept-illustration_114360-3037.jpg?w=740&t=st=1709217530~exp=1709218130~hmac=0f480a08ad42d0df32a789ab058ba80a356a8a74407d18e83c7b011c5188c8f6"
          />
        </div>
      </Slider>
    </div>
  );

  //   var settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   };
  //   return (
  //     <div className="csd">
  //       <Slider {...settings}>
  //         <div>
  //           <h3>1</h3>
  //         </div>
  //         <div>
  //           <h3>2</h3>
  //         </div>
  //         <div>
  //           <h3>3</h3>
  //         </div>
  //         <div>
  //           <h3>4</h3>
  //         </div>
  //         <div>
  //           <h3>5</h3>
  //         </div>
  //         <div>
  //           <h3>6</h3>
  //         </div>
  //       </Slider>
  //     </div>
  //   );
};

export default Carasol;
