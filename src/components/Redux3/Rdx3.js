import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import styled from "styled-components";
import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import Cart from "./containers/Cart";
import "./containers/Cart.css";

const Container = styled.div`
  .ui.cards > .card {
    height: 465px;
  }
  .ui.cards > .card > .image {
    padding: 20px;
    background: none;
  }
  .ui.cards > .card > .image > img {
    height: 212px;
  }
  .price-cat {
    padding: 0em 1em 1em 1em;
  }
`;

const Rdx3 = () => {
  // console.log(store.getState());
  return (
    <Provider store={store}>
      <Container>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="product/:productId" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route>404 Not Found!</Route>
          </Routes>
        </Router>
      </Container>
    </Provider>
  );
};

export default Rdx3;
