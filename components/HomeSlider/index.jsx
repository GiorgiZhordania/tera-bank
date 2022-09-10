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
        <Slide imageSrc="https://images.unsplash.com/photo-1565347878137-a5d5613ee61a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" title="Sell more" />
        <Slide imageSrc="https://images.unsplash.com/photo-1609429019995-8c40f49535a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" title="Apply now" />
        <Slide imageSrc="https://images.unsplash.com/photo-1430276084627-789fe55a6da0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" title="Contact us" />
    </Slider>
  )
}
