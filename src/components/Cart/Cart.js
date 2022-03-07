import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props);
    const { cart } = props;
    let total = 0;
    for (const food of cart) {
        total = total + food.price;
    }

    //const [foodName] = { (name) };

    return (
        <div className="cart">
            <h4>Ordered food: {props.cart.length}</h4>
            <p><small>Food Name: {cart.name}</small></p>
            <p>Total: {total}</p>
            
            <button className="btn">Buy Now</button>
        </div>
    );
};

export default Cart;