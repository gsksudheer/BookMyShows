import React from "react";
import Slider from "react-slick";

//comonent
import Poster from "../Poster/Poster.component"

//confings
import PosterCarouselSettings from "../../config/PosterCarousel.config";
import PremierImages from "../../config/TempPosters.configs";

const premier = () => {
    
  
    return (
        <>
        <div className="flex flex-col items-start">
          <h4 className="text-white text-xl font-bold">Premieres</h4>
          <p className="text-white text-sm">Brand new release every Friday</p>
        </div>
          <Slider {... PosterCarouselSettings}>
            {
              PremierImages.map((image) =>(
                <Poster {...image} isDark />
              ))
            }
          </Slider>
        </>
    );
};
export default premier;