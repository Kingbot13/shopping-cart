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
                        <input></input>
                        <button>+</button>
                    </div>
                </div>
            </div>
    )
}

export default CartCard;
