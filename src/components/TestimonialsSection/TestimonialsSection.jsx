import "./TestimonialsSection.scss"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { testimonials } from './TestimonialData';
import TestimonialCard from './TestimonialCard';


export default function TestimonialsSection(){

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows:false
        }
      }
    ]
  };

  return(
    <div className="testimonials-section">
      <div className="testimonials-section__content content">
        <h2 className="testimonials-section__header">Відгуки інтернет користувачів</h2>
        <div className="testimonials-section__text">Коментарі користувачів, які довгий час користуються нашими послугами</div>
        <div className="slider-container">
        
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Slider>
        </div>
      </div>
    </div>
  )
}