import React from 'react'
import Slider from "react-slick";
import Slide from './Slide';

export default function HomeSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      };

  return (
    <Slider {...settings}>
        <Slide imageSrc="https://images.pexels.com/photos/13046522/pexels-photo-13046522.jpeg" title="Sell more" />
        <Slide imageSrc="https://images.pexels.com/photos/13415115/pexels-photo-13415115.jpeg" title="Apply now" />
        <Slide imageSrc="https://images.pexels.com/photos/13235420/pexels-photo-13235420.jpeg" title="Contact us" />
    </Slider>
  )
}
