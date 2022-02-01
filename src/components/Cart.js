import React from "react";
import CartCard from "./CartCard";

function Cart(props) {
    const {items} = props;
    const cards = items.map((item)=> {
        return <CartCard key={item.id} image={item.image} title={item.title} price={item.price} />;
     });
    return (
        <div>
            <button>X</button>
            <h3>Your Cart</h3>
            {cards}
        </div>
    )
}

export default Cart;
