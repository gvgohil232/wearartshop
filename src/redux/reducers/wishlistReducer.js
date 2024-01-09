import { ADDTOWISHLIST, REMOVEFROMWISHLIST, CLEAR_WISHLIST } from '../actionCreators/actions'

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTOWISHLIST:
            return [
                ...state,
                action?.payload,
            ];
        case REMOVEFROMWISHLIST:
            const one = state?.filter((item) => item !== action.payload);
            return one;
        case CLEAR_WISHLIST:
            return []
        default:
            return state;
    }
}

export default reducer;