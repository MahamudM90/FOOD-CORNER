import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Food.css';

const Food = (props) => {
    console.log(props);
    const { name, img, price, stock, cooked , rating } = props.food;
    const icon = <FontAwesomeIcon icon={faShoppingCart} />
    return (

        <div className="food">
            <div className="card-container">
                <img className="img" src={img} alt="" />
                <h3>{name}</h3>
                <h4>Cook: {cooked}</h4>
                <h2>Cost: {price}</h2>
                <p><small>Available {stock}</small></p>
                <p><small>Rating: {rating}</small></p>
                <button onClick={() => props.addToCart(props.food)} className="button">{icon} Order Food</button>
            </div>

        </div>


    );
};

export default Food;