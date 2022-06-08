import React, { useState } from "react";
import "./Slider.css";
import {ApiSlides} from '../../Data/Slider';
const Slider = () => {

  //States
  const [slides] = useState(ApiSlides);

  
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
    {slides.map((slide ) => {
       
          return (
      <div  key={slide} className="carousel-item active">
        
        <img  key={slide} src={slide.src} className="d-block w-100 " alt="..." />
        <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5></div>
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