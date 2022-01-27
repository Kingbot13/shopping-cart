import React from "react";
import Card from "./Card";
import Cart from "./Cart";

function Products(props) {
    const {items, handleClick} = props;
    return (
        <div>
            <h1>Products</h1>
            <Cart />
            <div>
                {items.map(item => <Card key={item.id} image={item.image} name={item.title}  id={item.id} handleClick={handleClick} />)}
            </div>
        </div>
    )
}

export default Products;
