import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  cartDataReducer,
} from "./productReducer";

export const rootReducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cartData: cartDataReducer,
});
