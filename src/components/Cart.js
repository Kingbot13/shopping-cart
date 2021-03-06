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
            <h2>Your Cart</h2>
            {cards}
            <p>TOTAL ${total} </p>
            <button className="checkout-btn">Checkout</button>
        </div>
    )
}

export default Cart;
