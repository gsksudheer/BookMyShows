import React from "react";

export const NextArrow = (props) => {
    //className
    //style
    //onclick there are the props
    return (
    <>
        <div className={props.className} style={{...props.style, backgroundColor:"w-full h-30"}} onClick={props.onClick} />
    </>
    );
}

export const PrevArrow = (props) => {
    return (
    <>
        <div className={props.className} style={{...props.style, backgroundColor:""}} onClick={props.onClick} />
    </>
    );
}