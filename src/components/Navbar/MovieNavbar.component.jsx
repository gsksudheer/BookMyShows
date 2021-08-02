import React, {useContext} from "react";
import { BiSearch, BiMenu, BiShareAlt } from  "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";

//context
import { MovieContext } from "../../contex/Movie.Context";

const Navsm =()=>{
    const { movie } = useContext(MovieContext);
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h4 className="text-xl font-bold">{movie.original_title}</h4>
                </div>
                <div className="w-8 h-8 ">
                    <BiShareAlt className="w-full h-full" /> 
                </div>
            </div>
        </>
    );
}
const Navmd =()=>{
    return (
        <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearch />
            <input type="search" className="w-full bg-transparent focus:outline-none" placeholder="Serch for Movies, Events, Plays, Sports and Activities" />
        </div>
       
    );         
} 
const Navlg =()=>{
    return (
        <>
       <div className="container mx-auto px-4  flex items-center justify-between">
           <div className="flex items-center justify-center gap-3 w-1/2">
                <div className="w-12 h-12">
                    <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="bookmyshow" className="w-full h-full" />
                </div>
                <div className="w-full h-8 flex items-center justify-center gap-3 bg-white px-4 rounded-md">
                    <BiSearch />
                    <input type="search" className="w-full h-full text-sm bg-transparent focus:outline-none" placeholder="Serch for Movies, Events, Plays, Sports and Activities" />
                </div>
           </div>

           <div className="flex items-center gap-3">
               <span className="flex items-center text-gray-400 cursor-pointer hover:text-white">Banglore <MdArrowDropDown /> </span>
               <button className="bg-red-500 px-2 py-1 text-white rounded-md">Sign in</button>
                <div className="text-white w-8 h-8">
                    <BiMenu className="w-full h-full" />
                </div>
           </div>
       </div>
       </>
    );
}
 
const MovieNavbar = () => {
    return (
        <>
            <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative bg-gray-700 px-4 py-2">
                <div className="md:hidden lg:hidden"> 
                    <Navsm />
                </div>
                <div className="hidden md:flex lg:hidden">
                    <Navsm />
                </div> 
                <div className="hidden lg:flex">
                    <Navlg />
                </div>
            </nav>
        </>
    );
};

export default MovieNavbar;