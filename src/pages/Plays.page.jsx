import Axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
//components
import Poster from '../components/Poster/Poster.component';
import PlaysFilter from '../components/PlaysFilters/PlaysFilters.component';
import axios from 'axios';



const Plays = () => {
    const {id}=useParams();
    const [latestMovies, setLatestMovies] = useState([]);
    useEffect(() => {
        const requestLatestMovies = async () => {
            const getLatestMovies = await axios.get("/movie/latest");
            console.log("this is the latest Movies");
            console.log(getLatestMovies);
            console.log("after");
            setLatestMovies(getLatestMovies.data.results);
        }
        requestLatestMovies();
    }, []);
   

    return (
        <>
         <div className="container mx-auto px-4  bg-gray-100">
            <div className="w-full flex flex-row-reverse ">
                <div className="lg:w-3/4">    {/* 75% of width */}
                    {/* <h1 className="text-2xl font-bold ml-4">Plays in Banglore</h1>
                    <div className="flex flex-wrap ">
                        <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">  
                        </div>                       
                    </div>  */}
                                   


                </div> 

                <div className="w-3/12 mx-10">   {/* 25%width */}
                    <h1 className="text-2xl font-bold mb-5">Filters</h1>
                        <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend" ]} />
                        <PlaysFilter title="Language" tags={["Telugu", "Hindi", "English" ]} />
                        <PlaysFilter title="Categories" tags={[ "Theter" ]} />
                        <PlaysFilter title="Genes" tags={["Drama", "Adaptation", "Historical", "Comedy", "Online Streaming Plays", "Mythology" ]} />
                        <PlaysFilter title= "More Filters" tags={["Online Streaming", "Kids Allowed" ]} />
                        <button className="border-2 border-red-500 px-24 rounded-lg py-1">Browse by Venues</button>
                </div>

                
               
   
            </div>
        
         </div>
      
       
        </>
    )
}

export default Plays;



