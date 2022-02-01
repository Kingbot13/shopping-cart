import React from "react";
import { NavLink } from "react-router-dom";

function Nav(props) {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="products">Products</NavLink>
            <p onClick={props.onClick}>Cart {props.count}</p>
        </nav>
    )
}

export default Nav;
