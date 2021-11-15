import './Navbar.css';
import { useContext, useState } from 'react';
import { Cart } from '../../context/Context';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { state: { cart }, dispatch, productDispatch } = useContext(Cart);
    const [dropdownActive, setDropdownActive] = useState(false);
    const [burgerActive, setBurgerActive] = useState(false);
    return (
        <nav className='nav'>
            <div className="nav-top">
                <Link to='/' style={{
                    cursor: 'pointer', color: '#000', textDecoration: 'none'
                }}>
                    <img className='nav-img' src="https://marcelinethinks.files.wordpress.com/2015/11/anime-logo-square.png?w=952" alt="" />
                </Link>
                <div className='dropdown'>
                    <div className='dropdown-btn' onClick={() => {
                        setDropdownActive(!dropdownActive);
                        setBurgerActive(false);
                    }}>
                        <i className="fas fa-shopping-cart" style={{ marginRight: '.5rem' }}></i>
                        {cart.length}
                    </div>
                    {cart.length < 1 ?
                        <p className={dropdownActive ? 'dropdown-items active' : 'dropdown-items'}>Cart is Empty!</p> :
                        <div className={dropdownActive ? 'dropdown-items active' : 'dropdown-items'}>
                            {cart.map(prod => {
                                return <div className='dropdown-product'>
                                    <img src={prod.img} alt={prod.name} />
                                    <span>
                                        {prod.name.split(" ", 2).join(" ")}
                                    </span>
                                    <span>
                                        ${prod.price}
                                    </span>

                                    <i onClick={() => dispatch({ type: 'REMOVE-FROM-CART', payload: prod })} className="fas fa-trash-alt" style={{ cursor: 'pointer', fontSize: '1.2rem' }}></i>
                                </div>
                            })}
                            <Link to='/cart'>
                                <button className='goTo-cart-btn' onClick={() => {
                                    setDropdownActive(!dropdownActive);
                                    window.scroll(0, 0)
                                }}>View Cart</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
            <div className='nav-bottom'>
                <div className='burger' onClick={() => setBurgerActive(!burgerActive)}>
                    <div className={burgerActive ? "line-1 toggle" : 'line-1'}></div>
                    <div className={burgerActive ? "line-2 toggle" : 'line-2'}></div>
                    <div className={burgerActive ? "line-3 toggle" : 'line-3'}></div>
                </div>
                <ul className={burgerActive ? 'nav-links nav-active' : 'nav-links'}>
                    <Link to='/' style={{ color: '#fff', textDecoration: 'none' }} className={"nav-link"}>
                        <li onClick={() => {
                            productDispatch({ type: 'SORT-BY-PRICE', payload: ' ' });
                            productDispatch({ type: 'FILTER-BY-SEARCH', payload: '' });
                            setBurgerActive(!burgerActive)
                        }}>All</li>
                    </Link>
                    <Link to='/mens' style={{ color: '#fff', textDecoration: 'none' }} className="nav-link">
                        <li onClick={() => {
                            productDispatch({ type: 'SORT-BY-PRICE', payload: ' ' });
                            productDispatch({ type: 'FILTER-BY-SEARCH', payload: '' });
                            setBurgerActive(!burgerActive)
                        }}>Mens</li>
                    </Link>
                    <Link to='/womens' style={{ color: '#fff', textDecoration: 'none' }} className="nav-link">
                        <li onClick={() => {
                            productDispatch({ type: 'SORT-BY-PRICE', payload: ' ' });
                            productDispatch({ type: 'FILTER-BY-SEARCH', payload: '' });
                            setBurgerActive(!burgerActive)
                        }}>Womens</li>
                    </Link>
                    <Link to='/accessories' style={{ color: '#fff', textDecoration: 'none' }} className="nav-link">
                        <li onClick={() => {
                            productDispatch({ type: 'SORT-BY-PRICE', payload: ' ' });
                            productDispatch({ type: 'FILTER-BY-SEARCH', payload: '' });
                            setBurgerActive(!burgerActive)
                        }}>Accessories</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;