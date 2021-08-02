import React from 'react'

export const Cast = (props) => {
    return (
        <div>
            <div className="flex flex-col items center">
                <div className="w-32 h-32">
                    <img src={props.image}
                     alt="cast"
                     className="w-full h-full rounded-full"
                     />
                </div>
                <h1 className="text-xl text-gray-900">{props.castName}</h1>
                <p className="text-sm text-gray-600">{props.role}</p>
            </div>
        </div>
    )
};
export default Cast;
