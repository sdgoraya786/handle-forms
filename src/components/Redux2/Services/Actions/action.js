import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

export const addToCart = (data) => {
  // console.log("a", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const romoveCartItem = (id) => {
  return {
    type: REMOVE_TO_CART,
    id,
  };
};
