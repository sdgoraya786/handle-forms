import React from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cartData.cartItems);
  return (
    <header>
      <div className="site-name">
        <h3>SD Shop</h3>
      </div>
      <div className="cart-icon">
        <Link to={"/cart"}>
          <FaShoppingCart />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
