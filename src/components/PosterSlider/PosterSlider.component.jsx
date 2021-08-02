import React from 'react';
import Slider from "react-slick";

//comonent
import Poster from "../Poster/Poster.component"

//config
import PosterCarouselSettings from "../../config/PosterCarousel.config";


export const PosterSlider = (props) => {

  const sliderConfig = props.config ? props.config : PosterCarouselSettings ;
    return (
        <>
        <div className="flex flex-col items-start mb-4 mx-4">
        <h4 className={`text-white text-2xl font-bold ${props.isDark? "text-white": "text-gray-800"}`}>{props.title}</h4>
        <p className= {`text-white text-sm ${props.isDark? "text-white": "text-gray-800"}`}>{props.subtitle}</p>
        </div>
          <Slider {...sliderConfig}>
            {
              props.images.map((image) =>(
                <Poster {...image} isDark={props.isDark} />
              ))
            }
          </Slider>
        </>
    );
};

export default PosterSlider;
