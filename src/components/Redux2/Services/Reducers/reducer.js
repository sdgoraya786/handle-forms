import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

const initialState = {
  cartData: [],
};
export const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartData: [...state.cartData, action.data],
      };
    case REMOVE_TO_CART:
      return {
        ...state,
        // cartData: [state.cartData.pop(0)],
      };
    default:
      return state;
  }
};
