import React from "react";

function CartCard(props) {
    return (
        <div>
                <img src={props.image} alt="" />
                <div>
                    <h4>{props.title}</h4>
                    <p>${props.price}.00</p>
                    <div>
                        <button>-</button>
                        <input 
                        type='number' 
                        name={`item${props.id}`} 
                        data-id={props.id} 
                        value={props.values[`item${props.id}`] || 1}
                        onChange={(e)=> props.handleChange(e)} 
                        ></input>
                        <button>+</button> 
                    </div>
                </div>
            </div>
    )
}

export default CartCard;
