import {
    INCREMENT,
    DECREMENT,
    CLEAR_CART,
    REMOVEFROMCART,
    CONFIRMED_ORDER,
    CLEAR_ORDER,
    ADDTOWISHLIST,
    REMOVEFROMWISHLIST,
    CLEAR_WISHLIST,
    LOGIN,
    LOGOUT
} from "./actions";

// cart
export const incremental = (item) => {
    return {
        type: INCREMENT,
        payload: item
    }
}
export const decremental = (item) => {
    return {
        type: DECREMENT,
        payload: item
    }
}
export const removefromcart = (item) => {
    return {
        type: REMOVEFROMCART,
        payload: item
    }
}
export const clearcart = () => {
    return {
        type: CLEAR_CART,
    }
}

// order
export const orderconfirmed = (item) => {
    return {
        type: CONFIRMED_ORDER,
        payload: item
    }
}
export const clearorder = () => {
    return {
        type: CLEAR_ORDER,
    }
}

// wishlist
export const addtowishlist = (item) => {
    return {
        type: ADDTOWISHLIST,
        payload: item
    }
}
export const removefromwishlist = (item) => {
    return {
        type: REMOVEFROMWISHLIST,
        payload: item
    }
}
export const clearwishlist = () => {
    return {
        type: CLEAR_WISHLIST,
    }
}

// login
export const login = () => {
    return {
        type: LOGIN,
        // payload: item
    }
}
export const logout = () => {
    return {
        type: LOGOUT,
        // payload: item
    }
}