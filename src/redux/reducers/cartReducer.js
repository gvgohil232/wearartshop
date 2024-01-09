// import { createSlice } from '@reduxjs/toolkit'
import { INCREMENT, DECREMENT, CLEAR_CART, REMOVEFROMCART } from '../actionCreators/actions'

const initialState = [];

//================================== ONE
// export const cartReducer = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         increment: (state, action) => {
//             state.value += 1
//         },
//         decrement: (state, action) => {
//             state.value -= 1
//         },
//     },
// })

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = cartReducer.actions

// export default cartReducer.reducer

//================================== TWO
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            if (state?.find((item) => item?.id === action?.payload?.id)) {
                return [
                    ...state?.map((item) => item?.id === action?.payload?.id ? { ...item, qty: item?.qty + action?.payload?.qty } : item),
                ];
            } else {
                return [
                    ...state,
                    {
                        id: action?.payload?.id,
                        qty: action?.payload?.qty
                    }
                ];
            }
        case DECREMENT:
            const decreCart = state?.find((item) => item?.id === action?.payload?.id);
            if (decreCart) {
                if (decreCart?.qty === 1) {
                    return [
                        ...state?.filter((item) => item?.id !== action?.payload?.id),
                    ];
                } else {
                    return [
                        ...state?.map((item) => item?.id === action?.payload?.id ? { ...item, qty: item?.qty - action?.payload?.qty } : item),
                    ];
                }
            }
        case REMOVEFROMCART:
            return state?.filter((item) => item?.id !== action.payload.id);
        case CLEAR_CART:
            return [];
        default:
            return state;
    }
}

export default reducer;