import React from "react";
import Slider from "infinite-react-carousel";

const SimpleSlider = ({ settings }) => (
  <Slider dots adaptiveHeight {...settings} className="slider">
    <div>
      <img
        src="https://dz.jumia.is/cms/00_Camp20/July/W29/SX_SPORT.jpg"
        alt="my image"
        style={{ width: "inherit" }}
      ></img>
    </div>
    <div>
      <img
        src="https://dz.jumia.is/cms/00_Camp20/July/W29/SX_exterieur.jpg"
        alt="my image"
        style={{ width: "inherit" }}
      ></img>
    </div>
    <div>
      <img
        src="https://dz.jumia.is/cms/00_Camp20/July/W29/SX_PHONES.jpg"
        alt="my image"
        style={{ width: "inherit" }}
      ></img>
    </div>
    <div>
      <img
        src="https://dz.jumia.is/cms/00_Camp20/July/W28/SX_BEAUTE.jpg"
        alt="my image"
        style={{ width: "inherit" }}
      ></img>
    </div>
    <div>
      <img
        src=" https://dz.jumia.is/cms/00_Camp20/July/W29/SX_app.jpg"
        alt="my image"
        style={{ width: "inherit" }}
      ></img>
    </div>
  </Slider>
);

export default SimpleSlider;
