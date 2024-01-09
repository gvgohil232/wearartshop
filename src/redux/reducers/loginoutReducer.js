import { LOGIN, LOGOUT } from "../actionCreators/actions";

const initialState = false;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return true;

    case LOGOUT:
      return false;

    default:
      return state;
  }
};

export default reducer;
