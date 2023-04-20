import React from "react";
import Main from "./redux-intro/Main";
import store from "./redux-intro/store";
import { Provider } from "react-redux";
import Todo from "./redux-intro/TodoList/Todo";

store.subscribe(() => console.log(store.getState()));

const Redux = () => {
  return (
    <Provider store={store}>
      <Main />
      <Todo />
    </Provider>
  );
};

export default Redux;

/** ----- redux-intro ------npm install redux react-redux
 * << Complete React Redux Tutorial - Thapa #1 >>
 *
 *
 */
