import { CONFIRMED_ORDER, CLEAR_ORDER } from "../actionCreators/actions";

const initialState = {
    lastOrderId: 0,
    orders: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CONFIRMED_ORDER:
            let newLastOrderId = state?.lastOrderId  || 0;
            let newOrders = state?.orders || [];
            return {
                ...state,
                lastOrderId: newLastOrderId + 1,
                orders: [...newOrders,
                {
                    orderId: state.lastOrderId + 1,
                    products: action.payload,
                    date: new Date(),
                    status: 'Delivered'
                }
                ],
            }
        case CLEAR_ORDER:
            return {
                lastOrderId: 0,
                orders: []
            }
        default:
            return state;
    }
}

export default reducer;