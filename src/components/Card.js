import React from "react";

function Card(props) {
    return (
        <div>
            <img src={props.image} alt="" />
            <p>{props.name}</p>
        </div>
    )
}

export default Card;
