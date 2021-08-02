import React, { useContext, useState } from 'react'

//Context
import { MovieContext } from '../../contex/Movie.Context';
//components
import PaymentModel from '../PayementModel/Payment.component';

export const Movieinfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

    const { movie } = useContext(MovieContext);
    //open chaining
    const genres = movie.genres?.map(({ name }) => name).join(", ")//optional chaining

    const rentMovie = () => {
        setIsOpen(true);
        setPrice(149);
    }
    const buyMovie = () => {
        setIsOpen(true);
        setPrice(999);
    }
    return (
        <>
        <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
        <div className="flex flex-col gap-3  lg:gap-8">
            <div className="flex items-center gap-3 md:px-3">
            <div className="w-40 h-8 " >
                <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                 alt="Premier"
                 className="w-full h-full"
                 />
            </div>
            <span className="text-white bg-gray-900 text-xs px-2  rounded-lg">Streaming now</span>
            </div>
            <h1 className="text-white lg:text-4xl font-bold  hidden lg:block">{movie.original_title}</h1>
            <div className="flex flex-col-reverse lg:flex-col  gap-3 lg:gap-5">
                <div className="text-white text-md font-light flex flex-col gap-2 md:px-3">
                    <h4>4k &bull; {movie.original_language} </h4>
                    <h4>{(movie.runtime/60).toFixed(2)} h &bull; {genres} &bull;</h4>
                </div>
                <div className=" flex items-center gap-2 text-white font-bold md:w-screen  lg:w-full">
                    <button onClick={rentMovie} className="bg-red-500 w-full py-3 rounded-lg hover:bg-red-800 hover:text-gray-100 md:mx-3">
                        Rent ₹199
                    </button>
                    <button onClick={buyMovie} className="bg-red-500 w-full py-3 rounded-lg hover:bg-red-800 hover:text-gray-100 md:mx-3">
                        Buy ₹999
                    </button>
                </div>
            </div>
        </div>
      
        </>
    )
};

export default Movieinfo;
