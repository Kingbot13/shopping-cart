import React from "react";

function Cart(props) {
    return (
        <div>
            <button>X</button>
            <h3>Your Cart</h3>
            <div>
                <img />
                <div>
                    <h4>item name</h4>
                    <p>price</p>
                    <div>
                        <button>-</button>
                        <input></input>
                        <button>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
