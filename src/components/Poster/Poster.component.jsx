import React from "react";
import { Link } from "react-router-dom";


const Poster =(props) => {
    return (
    <Link to={`/movie/${props.id}`}>
        <div className="flex flex-col items-start gap-3 px-3">
            <div className="h-50 ">
                <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt={props.alt} className="w-full h-full rounded-xl" />
            </div>
            <h3 className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-800"}`}>
                {props.original_title}
            </h3>
            <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-800"}`}>
                {props.subtitle}
            </p>
        </div>
    </Link>
    );
};

export default Poster;