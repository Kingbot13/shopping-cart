import React from "react";

function Card(props) {
    return (
        <div>
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <button type="button">Add to Cart</button>
        </div>
    )
}

export default Card;
