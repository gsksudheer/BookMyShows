import axios from "axios";
import React, { useState, useEffect } from "react";
//import Slider from "react-slick";

//components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import  PosterSlider  from "../components/PosterSlider/PosterSlider.component";
//import premier from "../components/premier/premier.component";



//config
//import TempPosters from "../config/TempPosters.configs";



//comonent
//import Poster from "../components/Poster/Poster.component";



const HomePage = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upComingMovies, setUpComingMovies] = useState([]);

    useEffect (() => {
        const requestPopulerMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopulerMovies();
    }, []);

    useEffect (() => {
        const requestNowPlayingMovies = async () => {
            const getNowPlayingMovies = await axios.get("/movie/now_playing");
            setNowPlayingMovies(getNowPlayingMovies.data.results);
        };
        requestNowPlayingMovies();
    }, []); 

    useEffect (() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            setTopRatedMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
    }, []); 
    
    useEffect (() => {
        const requestUpComingMovies = async () => {
            const getUpComingMovies = await axios.get("/movie/upcoming");
            setUpComingMovies(getUpComingMovies.data.results);
        };
        requestUpComingMovies();
    }, []); 

    return (
        <>
           <div className="flex flex-col gap-6">

            {/* ETNERTINMENT CARD SLIDER */}
           <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-gray-800 my-3">The Best Of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>

            {/* PREMIER */}
            <div className=" bg-gray-800 py-18 my-8"> 
                <div className="container mx-auto px-6 py-14 flex flex-col gap-3">
                <div>
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Rupay" className="w-full h-full" />
                </div>
               
               {/*  <Premier /> */}
                <PosterSlider images={popularMovies} title="Premieres" subtitle="Brand new release every Friday" isDark={true} />
                
                </div>
            </div>
            
            {/* ONLINE STREAMING EVENT */}
            <div className="container mx-auto px-4 my-8">
                    <PosterSlider images={nowPlayingMovies} title="Online Streamig Events" subtitle=""  isDark={false} />
            </div>
            
            {/* OUTDOOR EVENTS */}
           <div className="bg-blue-100">
                <div className="container mx-auto px-4 my-8">
                    <PosterSlider images={topRatedMovies} title="Outdoor Evens" subtitle=""  isDark={false} />
                </div>
           </div>
            
            {/* UP COMING */}
           <div className="container mx-auto px-4 my-8">
                    <PosterSlider images={upComingMovies} title="Up Coming" subtitle=""  isDark={false} />
            </div>

           </div>

        </>
    );
};


export default HomePage;