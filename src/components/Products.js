import React from "react";
import Card from "./Card";
import '../styles/Products.css';

function Products(props) {
    const {items, handleClick} = props;
    return (
        <div className="product-page">
            <h1>Products</h1>
            <div className="products-container">
                {items.map(item => <Card key={item.id} image={item.image} name={item.title} price={item.price} id={item.id} handleClick={handleClick} />)}
            </div>
        </div>
    )
}

export default Products;
