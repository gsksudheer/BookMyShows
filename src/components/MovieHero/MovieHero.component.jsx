import React, {useContext} from 'react'
import Movieinfo from './Movieinfo.component'

//Context
import Moviecontext, { MovieContext } from "../../contex/Movie.Context";

const MovieHero = () => {
    const { movie, setMovie } = useContext(MovieContext);
    return (
        <>
        <div>
            {/* Small => MOBILE */}
            <div className="md:hidden w-full relative" style={{height:"calc(180vw)"}}>
                <div className="absolute z-20 bottom-4 left-4">
                    <Movieinfo />
                </div>
                    <div className="w-full h-56  bg-black bg-opacity-50  absolute bottom-0 z-10" />
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                     alt="Poster"
                     className="w-full h-full" />
            </div>      
           
            {/* Medium =>TABLET */}
            <div className="hidden md:block lg:hidden w-full relative" style={{height:"calc(100vw)"}}>
            <div className="absolute z-20 bottom-4 ">
                    <Movieinfo />
                </div>
                    <div className="w-full h-56  bg-black bg-opacity-50  absolute bottom-0 z-10" />
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                     alt="Poster"
                     className="w-full h-full" />
            </div>
           
            {/* Larege => */}
            <div className="relative hidden lg:block w-full"  style={{height:"30rem"}}> 
           
                <div className="absolute h-full w-full z-10" style={{
                    backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"
                    }}
                />
                <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
                    <div className="w-64 h-96  ">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt="" 
                            className="w-full h-full rounded-xl"
                            />
                    </div>
                    <div>
                        <Movieinfo />
                    </div>
               </div>
                        
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                     alt="Poster"
                     className="w-full h-full"
                      />

            </div>
            

        </div>  
        </>
    )
};

export default MovieHero;

