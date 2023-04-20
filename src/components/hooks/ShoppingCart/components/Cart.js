import React, { createContext, useEffect, useReducer } from "react";
import "./Cart.css";
import { products } from "./products";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";

export const CartContext = createContext();
const initialState = {
  cartItems: products,
  totalAmount: 0,
  totalitems: 0,
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Remove Individual Item from Shopping Cart
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };
  // Clear Cart
  const clearCart = () => dispatch({ type: "CLEAR_CART" });
  // Item Quantity INCREMENT
  const qtyIncrement = (id) =>
    dispatch({ type: "QUANTITY_INCREMENT", payload: id });
  // Item Quantity DECREMENT
  const qtyDecrement = (id) =>
    dispatch({ type: "QUANTITY_DECREMENT", payload: id });

  // we will use useEffect to upadet data
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cartItems]);

  return (
    <>
      <CartContext.Provider
        value={{ ...state, removeItem, clearCart, qtyIncrement, qtyDecrement }}
      >
        <ContextCart />
      </CartContext.Provider>
    </>
  );
};

export default Cart;
