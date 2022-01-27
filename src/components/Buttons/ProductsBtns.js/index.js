import './ProductsBtns.css';

export const AddToCartBtn = ({inStock, onClick}) => {
    return ( 
        <button onClick={onClick} className={inStock === true ? "add-to-cart-btn" : "add-to-cart-disabled"}>{inStock === true ? 'ADD TO CART' : 'OUT OF STOCK'}</button>
     );
}
 
export const RemoveFromCartBtn = ({onClick}) => {
    return ( 
        <button onClick={onClick} className={"remove-from-cart-btn"}>REMOVE FROM CART</button>
     );
}