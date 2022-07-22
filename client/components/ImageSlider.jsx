import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/product.module.css"
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider({ data }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    focusOnSelect: true,
    pauseOnHover: true,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {data.map((el, i) => {
        return (
          <div key={i}>
            <img style={{position:"relative"}} width="100%" src={el.image} alt="" />
          </div>
        );
      })}
    </Slider>
  );
}
