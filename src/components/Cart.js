import React from "react";
import CartCard from "./CartCard";

function Cart(props) {
    return (
        <div>
            <button>X</button>
            <h3>Your Cart</h3>
            <CartCard />
        </div>
    )
}

export default Cart;
