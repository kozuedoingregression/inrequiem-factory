import React from 'react';
import AddToCart from "./AddToCart";
import styles from './ProductCard.module.css';

function ProductCard() {
    return (
        <>
            <fieldset>
                <legend>Plush 1</legend>
                <AddToCart />
            </fieldset>
            <fieldset>
                <legend>Plush 2</legend>
                <AddToCart />
            </fieldset>
        </>
    )
}

export default ProductCard
