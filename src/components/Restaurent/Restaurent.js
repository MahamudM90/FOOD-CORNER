import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Restaurent.css';

const Restaurent = () => {
    const [foods, setFoods] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./items.JSON')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [])
    const addToCart = (food) => {
        console.log(food);
        const newCart = [...cart, food];
        setCart(newCart);
    }
    return (
        <div className="home-container">
            <div className="food-container">
                {
                    foods.map(food => <Food
                        key={food.key}
                        food={food}
                        addToCart={addToCart}
                    ></Food>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Restaurent;