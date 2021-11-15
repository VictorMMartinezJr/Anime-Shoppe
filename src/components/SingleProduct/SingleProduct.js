import { Button } from 'react-bootstrap'
import './SingleProduct.css';
import { useContext, useState } from 'react';
import { Cart } from '../../context/Context';

const SingleProduct = ({ name, fastDelivery, inStock, price, img, imgHover, id, product }) => {
    const { state: { cart }, dispatch } = useContext(Cart);

    //hover for product image change
    const [hover, setHover] = useState(false);

    // add product to cart functionality
    const addToCart = () => {
        dispatch({ type: 'ADD-TO-CART', payload: product })
    }

    // remove product to cart functionality
    const removeFromCart = () => {
        dispatch({ type: 'REMOVE-FROM-CART', payload: product })
    }

    return (
        <div className='product'>
            <img className='product-img' src={hover && imgHover ? imgHover : img} alt={name} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} />
            <p className='product-name'>{name}</p>
            <span className='product-info'>
                <p className={fastDelivery ? 'product-delivery' : ''}>{fastDelivery ? 'Fast Delivery!' : '5-7 Days Delivery'}</p>
                <p className={price < 20 ? 'product-price-sale' : ''} style={{ color: price < 20 ? 'red' : '' }}>${price}</p>
            </span>
            {cart.some(prod => prod.id === id) ? <Button style={{ fontSize: '.8rem' }} onClick={removeFromCart} variant='danger'>Remove From Cart</Button> : <Button onClick={addToCart} disabled={!inStock}>Add to Cart</Button>}
        </div>
    )
}

export default SingleProduct;