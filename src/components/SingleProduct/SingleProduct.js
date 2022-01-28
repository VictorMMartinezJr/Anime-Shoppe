import './SingleProduct.css';
import { useContext, useState } from 'react';
import { Cart } from '../../context/Context';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {AddToCartBtn, RemoveFromCartBtn} from '../Buttons/ProductsBtns.js/index.js';

const SingleProduct = ({ name, fastDelivery, inStock, price, img, imgHover, id, product }) => {
    const { state: { cart }, dispatch } = useContext(Cart);
    //state for product image change on hover
    const [hover, setHover] = useState(false);

    // add product to cart logic using global context
    const addToCart = () => {
        dispatch({ type: 'ADD-TO-CART', payload: product })
    }

    // remove product to cart logic using global context
    const removeFromCart = () => {
        dispatch({ type: 'REMOVE-FROM-CART', payload: product })
    }

    return (
        <div className='product'>
            <LazyLoadImage effect='blur' className='product-img' src={hover && imgHover ? imgHover : img} alt={name} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} />
            <p className='product-name'>{name}</p>
            <span className='product-info'>
                <p className={fastDelivery ? 'product-delivery' : ''}>{fastDelivery ? 'Fast Delivery!' : '5-7 Days Delivery'}</p>
                <p className={price < 20 ? 'product-price-sale' : ''} style={{ color: price < 20 ? '#da1212' : '' }}>${price}</p>
            </span>
            {cart.some(prod => prod.id === id) ? <RemoveFromCartBtn style={{ fontSize: '.8rem' }} onClick={removeFromCart} /> : <AddToCartBtn inStock={inStock} onClick={addToCart} />}
        </div>
    )
}

export default SingleProduct;