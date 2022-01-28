import { createContext, useReducer } from 'react';
import { CartReducer, productReducer } from './Reducers';

export const Cart = createContext();

export const Context = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, {
        cart: [],
    })

    const [productState, productDispatch] = useReducer(productReducer, {
        searchQuery: '',
    })

    return (
        <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
            {children}
        </Cart.Provider>
    )
}

export default Context;