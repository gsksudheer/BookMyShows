import React, { useState, useEffect} from "react";
import Slider from "react-slick";

import axios from "axios";

//component
import { NextArrow, PrevArrow } from "./Arrows.component";



const HeroCarousel = () => {

    const [ images, setImages ] = useState([]);

    useEffect(()  => {
    const reququestNowPlayingMovies = async () => {
        const getImages = await axios.get("/movie/now_playing");
        setImages(getImages.data.results);
    }
    reququestNowPlayingMovies();
    }, [] );
    
    const settingsLG ={
        arrows: true,
        Autoplay:true,
        centerMode: true,
        centerPadding: "400px",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll:1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    const settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };


   /*  const images = ["https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
                    "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                    "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
                    "https://images.unsplash.com/photo-1626275034769-9f57f01b0b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
                    ];    */
    return (
        <>
            <div className="lg:hidden">
                <Slider {...settings}>
                    {
                        images.map((image) => (
                            <div className="w-full h-56 md:h-64 py-3">
                                <img src={`https://image.tmdb.org/t/p/w500${image.backdrop_path}`} alt="Loading" className="w-full h-full" />
                            </div> 
                    ))}
                </Slider>
            </div>
            <div className="hidden lg:block ">
                <Slider {...settingsLG}>
                    {
                        images.map((image) => (
                            <div className="w-full h-80 px-1 py-3 ">
                                <img src={`https://image.tmdb.org/t/p/w500${image.backdrop_path}`} alt="Loading" className="w-full h-full rounded-md " />
                            </div>
                    ))}
                </Slider>
            </div>

           
        </>
    );
};

export default HeroCarousel;