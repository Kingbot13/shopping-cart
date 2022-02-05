import React from "react";
import '../styles/CartCard.css';

function CartCard(props) {
    return (
        <div className="cart-card-container">
                <img src={props.image} alt="" />
                <div>
                    <h4>{props.title}</h4>
                    <p>${props.price}</p>
                    <div>
                        <button className="adjust-btn" onClick={()=> props.decrement(props.id)}>-</button>
                        <input 
                        type='number' 
                        name={`item${props.id}`} 
                        data-id={props.id} 
                        value={props.values[`item${props.id}`] || 1}
                        onChange={(e)=> props.handleChange(e)} 
                        ></input>
                        <button className="adjust-btn" onClick={()=> props.increment(props.id)}>+</button> 
                    </div>
                </div>
            </div>
    )
}

export default CartCard;
