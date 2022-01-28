import './CartPage.css';
import { useContext, useState, useEffect } from 'react';
import { Cart } from '../../../context/Context';

const CartPage = () => {
    const { state: { cart }, dispatch } = useContext(Cart);
    const [total, setTotal] = useState();
    // Get total for all products in cart
    const getTotal = (arr) => {
        setTotal((arr.reduce((acc, curr) => acc + Number(curr.price), 0)).toFixed(2))
    }
    // Get total on page load
    useEffect(() => {
        getTotal(cart)
    }, [cart])

    return (
        <div className='cartpage-container'>
            <section className='cartpage-products'>
                <p className='my-cart'>My Cart ({cart.length} {cart.length === 1 ? 'Item' : 'Items'})</p>
                {cart.map(prod => {
                    return <div className='cartpage-product'>
                        <img className='cart-img' src={prod.img} alt={prod.name} />
                        <div className='cartpage-prod-info'>
                            <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{prod.name}</p>
                            <p>${prod.price}</p>
                            <span>
                                <p style={{ fontWeight: 'bold' }}>{prod.fastDelivery ? 'FAST DELIVERY!' : ''}</p>
                            </span>
                            <p onClick={() => dispatch({ type: 'REMOVE-FROM-CART', payload: prod })} style={{ textDecoration: 'underline', cursor: 'pointer' }}>Remove</p>
                        </div>
                    </div>
                })}
            </section>
            <section className='checkout'>
                <div className='checkout-content'>
                    <p className='checkout-header'>Order Summary</p>
                    <span>
                        <p>Subtotal</p>
                        <p>${total}</p>
                    </span>
                    <span>
                        <p>Shipping</p>
                        <p>Free</p>
                    </span>
                    <span>
                        <p>Tax</p>
                        <p>TBD</p>
                    </span>
                    <span>
                        <p style={{ fontWeight: '700' }}>Total</p>
                        <p style={{ fontWeight: '700' }}>${total}</p>
                    </span>
                    <div className='line-break'></div>
                </div>
            </section>
        </div>
    )
}

export default CartPage;