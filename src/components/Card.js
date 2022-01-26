import React from "react";

function Card(props) {
    return (
        <div data-id={props.id}>
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <button type="button" onClick={()=>props.handleClick()}>Add to Cart</button>
        </div>
    )
}

export default Card;
