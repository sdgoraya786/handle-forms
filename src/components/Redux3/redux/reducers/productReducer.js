import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};

const cartInitialState = {
  cartItems: [],
};
export const cartDataReducer = (
  state = cartInitialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      console.log("r");
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      };
    default:
      return state;
  }
};
