import React from "react";


const Card = ({id, name, location}) => {
    return (
        <div className ='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
            <h2>{name}</h2>
            <p>{location}</p>   
        </div>
    )
}

export default Card;