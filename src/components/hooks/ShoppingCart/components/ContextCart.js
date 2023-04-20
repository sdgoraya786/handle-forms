import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { cartItems, totalitems, totalAmount, clearCart } =
    useContext(CartContext);
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>Continue Shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalitems}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          You have
          <span className="total-items-count"> {totalitems} </span>
          items in shopping cart
        </p>

        {/* For Cart Items if cart in not empty */}
        {cartItems.length > 0 && (
          <>
            <div className="cart-items">
              <div className="cart-items-container">
                <Scrollbars>
                  {cartItems.map((curItem) => (
                    <Items key={curItem.id} {...curItem} />
                  ))}
                </Scrollbars>
              </div>
            </div>

            {/* for price */}
            <div className="card-total">
              <h3>
                Card Total : <span>Rs {totalAmount}</span>
              </h3>
              <button>checkout</button>
              <button className="clear-cart" onClick={clearCart}>
                clear cart
              </button>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default ContextCart;
