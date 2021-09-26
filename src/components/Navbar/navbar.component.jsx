import React from "react";
import {BiChevronRight, BiSearch, BiMenu} from  "react-icons/bi";
import {MdArrowDropDown } from "react-icons/md";

const Navsm =()=>{
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h4 className="text-xl font-bold">It All Starts Here!</h4>
                    <span className="text-gray-300 text-xs flex items-center ">Banglore <BiChevronRight /></span>
                </div>
                <div className="w-8 h-8 ">
                    <BiSearch className="w-full h-full" />
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
                            <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="bookmyshow" className="w-full h-full cursor-pointer" />
                        </div>
                        <div className="w-full h-8 flex items-center justify-center gap-3 bg-white px-4 rounded-md">
                            <BiSearch className="cursor-pointer" />
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
const Navlg2 = () => {
    return (
        <>
            <div className="flex justify-between gap-50 px-4">
                <div className="">
                    <ul className="flex items-cener gap-3 text-white p-2 cursor-pointer text-gray-300">
                        <li className="hover:text-white">Menu</li>
                        <li className="hover:text-white">Plays</li>
                        <li className="hover:text-white">Events</li>
                        <li className="hover:text-white">Srteam</li>
                    </ul>
                </div>
                <div>
                    <ul className="flex gap-3 pl-10 text-white p-2 text-gray-300">
                        <li>ListYourShow</li>
                        <li>Offers</li>
                        <li>Corporates</li>
                        <li>Gift Cards</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

const Navbar = () =>{
    return (
        <>
            <nav className="bg-gray-900 px-4 py-3">
                <div className="md:hidden lxg:hidden"> 
                    <Navsm />
                </div>
                
                <div className="hidden md:flex lg:hidden">
                    <Navmd />
                </div> 
                <div className="hidden lg:flex">
                    <Navlg />
                </div>
            </nav>
            <nav className="bg-gray-800">
                <div className="hidden  lg:block">
                    <Navlg2 />
                </div>
            </nav>
        </>
    );
}

export default Navbar;