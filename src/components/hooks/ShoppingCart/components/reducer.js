export const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (curElem) => curElem.id !== action.payload
        ),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };

    case "QUANTITY_INCREMENT":
      let updatedQtyInc = state.cartItems.map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity + 1 };
        }
        return curElem;
      });
      return { ...state, cartItems: updatedQtyInc };

    case "QUANTITY_DECREMENT":
      // (curElem.id === action.payload && curElem.quantity > 1) // Condition(1) for qty must be equal or greater then 1
      //map((){}).filter((curElem) => curElem.quantity !== 0); // Condition(3) if qty equal to 0 this item remove automaticaly from cart
      let updatedQtyDec = state.cartItems.map((curElem) => {
        if (curElem.id === action.payload && curElem.quantity > 1) {
          return { ...curElem, quantity: curElem.quantity - 1 };
        }
        return curElem;
      });
      return { ...state, cartItems: updatedQtyDec };

    case "GET_TOTAL":
      let { totalitems, totalAmount } = state.cartItems.reduce(
        (accum, curVal) => {
          let { quantity, price } = curVal;
          accum.totalitems += quantity;
          accum.totalAmount += price * quantity; // parseInt(price)
          return accum;
        },
        { totalitems: 0, totalAmount: 0 }
      );
      return { ...state, totalitems, totalAmount };
    default:
      return state;
  }
};
