import React from "react";
// import Home from "./components/Home";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./Services/Reducers/index";
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";

const store = configureStore({ reducer: rootReducer });

const Rdx2 = () => {
  return (
    <Provider store={store}>
      <HeaderContainer />
      <HomeContainer />
    </Provider>
  );
};

export default Rdx2;
