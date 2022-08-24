import React from "react";
import Card from "./Card"

const CardList = ({sports}) => {
    return (
        <div>
        {
            sports.map((sport, i) => {
                return (
                <Card 
                    key={i} 
                    id={sports[i].id} 
                    name={sports[i].name} 
                    location={sports[i].location}
                    />
                );    
            })
        }
        </div>

    );
}

export default CardList;