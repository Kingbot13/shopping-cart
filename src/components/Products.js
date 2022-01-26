import React from "react";
import Card from "./Card";

function Products(props) {
    const {items, handleClick} = props;
    return (
        <div>
            <h1>Products</h1>
            <div>
                {items.map(item => <Card key={item.id} image={item.image} name={item.title} handleClick={handleClick} />)}
            </div>
        </div>
    )
}

export default Products;
