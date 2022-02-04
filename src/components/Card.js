import React from "react";
import '../styles/Card.css';

function Card(props) {
    return (
        <div data-id={props.id} className="card-container">
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <p>${props.price}</p>
            <button type="button" onClick={()=>props.handleClick(props.id)}>Add to Cart</button>
        </div>
    )
}

export default Card;
