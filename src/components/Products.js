import React from "react";
import Card from "./Card";

function Products(props) {
    const {items} = props;
    return (
        <div>
            <h1>Products</h1>
            <div>
                {items.map(item => <Card key={item.key} image={item.image} name={item.title} />)}
            </div>
        </div>
    )
}

export default Products;
