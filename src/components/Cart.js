import React from "react";
import CartCard from "./CartCard";
import '../styles/Cart.css';

function Cart(props) {
    const {items, onClick, total} = props;
    const cards = items.map((item)=> {
        return (<CartCard 
            key={item.id}
            id={item.id} 
            image={item.image} 
            title={item.title} 
            price={item.price} 
            values={props.values}
            handleChange={props.handleChange}
            increment={props.increment}
            decrement={props.decrement}

            />);
     });
    return (
        <div className="cart-container hidden">
            <button onClick={onClick}>X</button>
            <h3>Your Cart</h3>
            {cards}
            <p>TOTAL ${total} </p>
            <button>Checkout</button>
        </div>
    )
}

export default Cart;
