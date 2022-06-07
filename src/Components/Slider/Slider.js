import React, { useState } from "react";
import "./Slider.css";
import {ApiSlides} from '../../Data/Slider';
import image from '../../Data/banner/banner-3.jpg'
const Slider = () => {

  //States
  const [slides] = useState(ApiSlides);

  
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
    {slides.map((slide,i ) => {
       
          return (
      <div  key={i} className="carousel-item active">
        
        <img  key={i} src={image} className="d-block w-100 " alt="..." />
      </div>
      );
      })}
     
      
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </>
  );
};

export default Slider;