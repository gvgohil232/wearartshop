import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './src/redux/reducers/cartReducer';
import orderReducer from './src/redux/reducers/orderReducer'
import wishlistReducer from './src/redux/reducers/wishlistReducer';
import loginoutReducer from './src/redux/reducers/loginoutReducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
    key: 'root',
    version: 1,
    storage
};

const reducer = combineReducers({
    cart: cartReducer,
    orderconfirmed: orderReducer,
    wishlist: wishlistReducer,
    loginout: loginoutReducer
})

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer
    // reducer: {
    //     cart: cartReducer,
    //     orderconfirmed: orderReducer,
    //     wishlist: wishlistReducer,
    // },
})
