import Axios from "axios";
import {FaCcVisa, FaCcApplePay} from "react-icons/fa"
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
//import Cast from '../components/Cast/cast.component';


//component
import MovieHero from '../components/MovieHero/MovieHero.component';
import Cast from '../components/Cast/Cast.component';

import TempPosters from "../config/TempPosters.configs";
import  PosterSlider  from "../components/PosterSlider/PosterSlider.component";

//Context
import { MovieContext } from "../contex/Movie.Context";
import axios from "axios";

//Slider
import Slider from "react-slick";

export const Movies= () => {
    const { id } = useParams();
    const {movie} = useContext(MovieContext);
    const [cast, setCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommendMovies, setRecommendMovies] = useState([]);

    useEffect(() => {
        const requestCast = async () => {
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast)
        };
        requestCast();
    },[id]);

    useEffect (() => {
        const reqestSimilarMovies = async () => {
            const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
            setSimilarMovies(getSimilarMovies.data.results);
        };
        reqestSimilarMovies();
    }, [id]);

    useEffect (() => {
        const requestRecommendMovies = async () => {
            const getRecommendMovies = await axios.get(`/movie/${id}/recommendations`);
            setRecommendMovies(getRecommendMovies.data.results);
        };
        requestRecommendMovies();
    }, [id]);

    const settings = {
        autoplay:false,
        infinity: false,
        slidesToShow: 4,
        slidesToScroll:4,
        InitialSlide: 0,
        responsive: [{
          breakpoints: 1024,
          settings:{
            slidesToShow:3,
            slidesToScroll: 2,
            infinite:true,
          },
        },{
          breakpoints: 600,
          settings:{
            slidesToShow:2,
            slidesToScroll: 1,
            InitialSlide: 1,
            infinite:true,
          },
        },{
          breakpoints: 480,
          settings:{
            slidesToShow:2,
            slidesToScroll: 1,
            infinite:true,
          },
        },
        
        ],
    };
    const settingsCast = {
        autoplay:false,
        infinity: false,
        slidesToShow: 6,
        slidesToScroll:4,
        InitialSlide: 0,
        responsive: [{
          breakpoints: 1024,
          settings:{
            slidesToShow:5,
            slidesToScroll: 2,
            infinite:true,
          },
        },{
          breakpoints: 600,
          settings:{
            slidesToShow:4,
            slidesToScroll: 1,
            InitialSlide: 1,
            infinite:true,
          },
        },{
          breakpoints: 480,
          settings:{
            slidesToShow:2,
            slidesToScroll: 1,
            infinite:true,
          },
        },
        
        ],
    };

    return (
        <>
         <MovieHero />
         
         <div className="container lg:ml-20 px-4  lg:w-2/3">
             <div className="my-12 flex flex-col items-start gap-3">
                <h1 className="text-black-800 font-bold text-2xl ">About the movie</h1>
                <p > {movie.overview} </p>
             </div>

            <div>
                <hr className="my-8"/>
            </div>
            
            <div className="my-8">
                <h1 className="text-black-800 text-2xl font-bold mb-4">Applicable offers</h1>
                <div className="flex flex-col lg:flex-row  gap-6">
                    <div>
                        <div className="flex items-start gap-3 bg-yellow-100 p-3 border-2 rounded-lg border-yellow-400 border-dashed">
                        <div className="w-8 h-8">
                            <FaCcVisa className="w-full h-full "/>
                        </div>
                        <div className="flex flex-col items-start">
                            <h2 className="text-gray-800 font-bold text-xl">Visa Stream Offer</h2>
                            <p className="text-gray-600 ">Get 50% off up to INR 150 on all RuPay cards* on BookMyShow Stream.</p>
                        </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-start gap-3 bg-yellow-100 p-3 border-2 rounded-lg border-yellow-400 border-dashed">
                        <div className="w-8 h-8">
                            <FaCcApplePay className="w-full h-full "/>
                        </div>
                        <div className="flex flex-col items-start">
                            <h2 className="text-gray-800 font-bold text-xl">Filmy Pass</h2>
                            <p className="text-gray-600 ">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                        </div>
                    </div>
                    </div>
                </div>           
            </div>

            <div>
                <hr className="my-8"/>
            </div>
            
           <div>
               <h1 className="text-2xl font-bold mb-4">Cast and Crew</h1>
               <Slider {...settingsCast}>
                {/* <div className="flex flex-wrap gap-6"> */}
                   {
                       cast.map((castData) => (
                          
                            <Cast
                            image={`https://image.tmdb.org/t/p/original${castData.profile_path}`}
                            castName={`castData.original_name`}
                            role={`castData.charecter`}/>
                       )) 
                   }
                   {/*  </div> */}
                </Slider>
           </div>
           <div>
                <hr className="my-8"/>
            </div>

            <div className="my-8">
                <div className="container mx-auto px-4 my-8">
                        <PosterSlider images={similarMovies} title="You Might Also Like" subtitle=""  isDark={false} config={settings}/>
                </div>
            </div>

            <div>
                <hr className="my-8"/>
            </div>

            <div className="my-8">
                <div className="container mx-auto px-4 my-8">
                        <PosterSlider images={recommendMovies} title="BMS XCLUSIV" subtitle=""  isDark={false} config={settings}/>
                </div>
            </div>
           

         </div>
        </>
    )
};
export default Movies;
