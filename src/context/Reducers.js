export const CartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-TO-CART':
            return { ...state, cart: [...state.cart, action.payload] }
        case 'REMOVE-FROM-CART':
            return { ...state, cart: state.cart.filter(prod => prod.id !== action.payload.id) }
        default:
            return state;
    }
}

export const productReducer = (state, action) => {
    switch (action.type) {
        case "FILTER-BY-SEARCH":
            return { ...state, searchQuery: action.payload };
        case 'SORT-BY-PRICE':
            return { ...state, sort: action.payload }
        default:
            return state;
    }
}