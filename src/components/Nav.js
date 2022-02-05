import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Nav.css';

function Nav(props) {
    return (
        <nav>
            <h1>Realest Fake Store</h1>
            <NavLink className='link' to="shopping-cart">Home</NavLink>
            <NavLink className='link' to="products">Products</NavLink>
            <p className="cart-icon" onClick={props.onClick}>Cart {props.count}</p>
        </nav>
    )
}

export default Nav;
