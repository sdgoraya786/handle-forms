import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartData.cartItems);
  return (
    <>
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          You have
          <span className="total-items-count"> {cartItems.length} </span>
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
                Cart Total : <span>Rs 0</span>
              </h3>
              <button>checkout</button>
              <button className="clear-cart">clear cart</button>
            </div>
          </>
        )}
        <div className="continue-shopping">
          <Link to={"/"}>
            <FaArrowLeft className="arrow-icon" />
            <h3>Continue Shopping</h3>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Cart;
