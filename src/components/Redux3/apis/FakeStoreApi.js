import axios from "axios";

export default axios.create({
  baseURL: "https://fakestoreapi.com",
});

/** with Middleware */
// export const fetchProducts = async () => {
//   return async function (dispatch, getState) {
//     const reponse = await fakestoreapi.get("/products");
//     dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: reponse.data });
//   };
// };
/** */

// useEffect(() => {
//   dispatch(fetchProducts());
// }, []);

// ---------Redux Thunk Middleware --------//
// import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import { rootReducer } from "./reducers/index";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = configureStore(
//   { reducer: rootReducer },
//   composeEnhancers(applyMiddleware(thunk))
// );
// export default store;
